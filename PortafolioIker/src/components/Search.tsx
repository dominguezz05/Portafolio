import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Filter, ChevronDown } from 'lucide-react'
import { useApp } from '../context/AppContext'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  placeholder?: string
  filters?: string[]
  selectedFilters?: Set<string>
  onFilterToggle?: (filter: string) => void
  showFilters?: boolean
  onToggleFilters?: () => void
  className?: string
}

export function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = 'Buscar...',
  filters = [],
  selectedFilters = new Set(),
  onFilterToggle,
  showFilters = false,
  onToggleFilters,
  className = ''
}: SearchBarProps) {
  const { theme } = useApp()
  const isDarkMode = theme === 'dark'

  const inputClasses = `w-full pl-10 pr-4 py-2.5 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
    isDarkMode
      ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-sky-500'
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-sky-500'
  }`

  const filterButtonClasses = `px-3 py-2 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 flex items-center gap-2 ${
    isDarkMode
      ? 'bg-slate-800 border-slate-600 text-white hover:bg-slate-700'
      : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'
  }`

  const activeFilterClasses = (isActive: boolean) => `
    px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer
    ${isActive 
      ? isDarkMode 
        ? 'bg-sky-600 text-white hover:bg-sky-500' 
        : 'bg-sky-500 text-white hover:bg-sky-600'
      : isDarkMode
        ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
    }
  `

  const hasActiveFilters = selectedFilters.size > 0

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Barra de búsqueda principal */}
      <div className="relative">
        <Search 
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`} 
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
          aria-label="Buscar proyectos"
        />
        
        {/* Botón de limpiar búsqueda */}
        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => onSearchChange('')}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full ${
                isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-200'
              }`}
              aria-label="Limpiar búsqueda"
            >
              <X className="w-3 h-3" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Controles de filtros */}
      {filters.length > 0 && (
        <div className="flex items-center justify-between">
          <motion.button
            onClick={onToggleFilters}
            className={filterButtonClasses}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
            {hasActiveFilters && (
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                isDarkMode ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'
              }`}>
                {selectedFilters.size}
              </span>
            )}
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                showFilters ? 'rotate-180' : ''
              }`} 
            />
          </motion.button>

          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                if (onFilterToggle) {
                  selectedFilters.forEach(filter => onFilterToggle(filter))
                }
              }}
              className={`text-sm px-3 py-1.5 rounded-lg ${
                isDarkMode 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Limpiar filtros
            </motion.button>
          )}
        </div>
      )}

      {/* Panel de filtros */}
      <AnimatePresence>
        {showFilters && filters.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 rounded-lg border ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <motion.button
                  key={filter}
                  onClick={() => onFilterToggle?.(filter)}
                  className={activeFilterClasses(selectedFilters.has(filter))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface SearchResultsProps {
  results: any[]
  searchTerm: string
  selectedFilters: Set<string>
  renderItem: (item: any, index: number) => React.ReactNode
  emptyMessage?: string
  className?: string
}

export function SearchResults({
  results,
  searchTerm,
  selectedFilters,
  renderItem,
  emptyMessage,
  className = ''
}: SearchResultsProps) {
  const { theme, language } = useApp()
  const isDarkMode = theme === 'dark'

  if (results.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`text-center py-12 ${className}`}
      >
        <div className={`text-6xl mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-300'}`}>
          🔍
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {language === 'es' ? 'No se encontraron resultados' : 'No results found'}
        </h3>
        <p className={`text-sm ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {emptyMessage || (
            language === 'es' 
              ? `No hay proyectos que coincidan con "${searchTerm}"${selectedFilters.size > 0 ? ' y los filtros seleccionados' : ''}`
              : `No projects found matching "${searchTerm}"${selectedFilters.size > 0 ? ' and selected filters' : ''}`
          )}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {results.map((result, index) => (
        <motion.div
          key={result.item.id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {renderItem(result.item, index)}
        </motion.div>
      ))}
    </motion.div>
  )
}
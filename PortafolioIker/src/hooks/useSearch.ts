import { useState, useMemo, useCallback } from 'react'

interface SearchOptions {
  threshold?: number
  caseSensitive?: boolean
  includeScore?: boolean
}

interface SearchResult<T> {
  item: T
  score: number
  matches: string[]
}

export function useSearch<T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[],
  options: SearchOptions = {}
) {
  const {
    threshold = 0.3,
    caseSensitive = false,
    includeScore = false
  } = options

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set())

  // Función de búsqueda simple con fuzzy matching
  const fuzzyMatch = useCallback((text: string, query: string): number => {
    if (!query) return 1
    
    const source = caseSensitive ? text : text.toLowerCase()
    const target = caseSensitive ? query : query.toLowerCase()
    
    if (source.includes(target)) {
      return 1
    }
    
    // Simple fuzzy matching
    let score = 0
    let sourceIndex = 0
    let targetIndex = 0
    
    while (sourceIndex < source.length && targetIndex < target.length) {
      if (source[sourceIndex] === target[targetIndex]) {
        score++
        targetIndex++
      }
      sourceIndex++
    }
    
    return targetIndex > 0 ? score / target.length : 0
  }, [caseSensitive])

  // Función para extraer texto de un objeto
  const extractText = useCallback((item: T, field: keyof T): string => {
    const value = item[field]
    if (typeof value === 'string') return value
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).join(' ')
    }
    return String(value || '')
  }, [])

  // Resultados de búsqueda
  const searchResults = useMemo(() => {
    if (!searchTerm && selectedFilters.size === 0) {
      return items.map(item => ({ item, score: 1, matches: [] }))
    }

    return items
      .map(item => {
        let totalScore = 0
        const matches: string[] = []

        // Búsqueda en campos especificados
        for (const field of searchFields) {
          const text = extractText(item, field)
          const score = fuzzyMatch(text, searchTerm)
          
          if (score > threshold) {
            totalScore = Math.max(totalScore, score)
            matches.push(String(field))
          }
        }

        // Aplicar filtros
        if (selectedFilters.size > 0) {
          const itemText = searchFields.map(field => extractText(item, field)).join(' ')
          const hasFilter = Array.from(selectedFilters).some(filter => 
            itemText.toLowerCase().includes(filter.toLowerCase())
          )
          
          if (!hasFilter) {
            totalScore = 0
          }
        }

        return { item, score: totalScore, matches }
      })
      .filter(result => result.score > threshold || (searchTerm === '' && selectedFilters.size === 0))
      .sort((a, b) => b.score - a.score)
  }, [items, searchFields, searchTerm, selectedFilters, threshold, fuzzyMatch, extractText])

  // Función para agregar/eliminar filtros
  const toggleFilter = useCallback((filter: string) => {
    setSelectedFilters(prev => {
      const newFilters = new Set(prev)
      if (newFilters.has(filter)) {
        newFilters.delete(filter)
      } else {
        newFilters.add(filter)
      }
      return newFilters
    })
  }, [])

  // Función para limpiar búsqueda
  const clearSearch = useCallback(() => {
    setSearchTerm('')
    setSelectedFilters(new Set())
  }, [])

  // Filtros disponibles basados en los datos
  const availableFilters = useMemo(() => {
    const filters = new Set<string>()
    
    items.forEach(item => {
      searchFields.forEach(field => {
        const text = extractText(item, field)
        // Extraer palabras clave (tecnologías, categorías, etc.)
        const keywords = text.match(/\b[A-Z][a-zA-Z]+\b|\b[A-Z]{2,}\b/g) || []
        keywords.forEach(keyword => filters.add(keyword))
      })
    })
    
    return Array.from(filters).sort()
  }, [items, searchFields, extractText])

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    selectedFilters,
    toggleFilter,
    clearSearch,
    availableFilters,
    hasActiveSearch: searchTerm.length > 0 || selectedFilters.size > 0
  }
}

// Hook específico para proyectos
export function useProjectSearch(projects: any[]) {
  const searchFields: (keyof any)[] = ['title', 'description', 'technologies', 'category']
  
  return useSearch(projects, searchFields, {
    threshold: 0.2,
    caseSensitive: false
  })
}

// Hook específico para skills
export function useSkillSearch(skills: any[]) {
  const searchFields: (keyof any)[] = ['name', 'category', 'level']
  
  return useSearch(skills, searchFields, {
    threshold: 0.3,
    caseSensitive: false
  })
}
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'
type Language = 'es' | 'en'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const savedLanguage = localStorage.getItem('language') as Language | null
    
    if (savedTheme) {
      setTheme(savedTheme)
    }
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document and save to localStorage
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const value: AppContextType = {
    theme,
    toggleTheme,
    language,
    setLanguage
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
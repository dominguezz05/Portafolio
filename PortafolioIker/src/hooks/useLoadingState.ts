import { useState, useEffect } from 'react'

interface UseLoadingStateProps {
  minLoadingTime?: number // Tiempo mínimo de loading en ms
  initialState?: boolean
}

interface LoadingState {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

export function useLoadingState({ 
  minLoadingTime = 500, 
  initialState = false 
}: UseLoadingStateProps = {}): LoadingState {
  const [isLoading, setIsLoading] = useState(initialState)
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null)

  const startLoading = () => {
    setIsLoading(true)
    setLoadingStartTime(Date.now())
  }

  const stopLoading = () => {
    if (loadingStartTime) {
      const elapsedTime = Date.now() - loadingStartTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
      
      if (remainingTime > 0) {
        setTimeout(() => {
          setIsLoading(false)
          setLoadingStartTime(null)
        }, remainingTime)
      } else {
        setIsLoading(false)
        setLoadingStartTime(null)
      }
    } else {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    startLoading,
    stopLoading
  }
}

// Hook para manejar carga de datos asíncronos
interface UseAsyncDataProps<T> {
  fetcher: () => Promise<T>
  deps?: React.DependencyList
  minLoadingTime?: number
  initialData?: T
}

interface AsyncDataState<T> {
  data: T | undefined
  isLoading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useAsyncData<T>({
  fetcher,
  deps = [],
  minLoadingTime = 500,
  initialData
}: UseAsyncDataProps<T>): AsyncDataState<T> {
  const [data, setData] = useState<T | undefined>(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)
      setLoadingStartTime(Date.now())
      
      const result = await fetcher()
      
      // Respetar el tiempo mínimo de carga
      if (loadingStartTime) {
        const elapsedTime = Date.now() - loadingStartTime
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
        
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime))
        }
      }
      
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
    } finally {
      setIsLoading(false)
      setLoadingStartTime(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, deps)

  return {
    data,
    isLoading,
    error,
    refetch: fetchData
  }
}
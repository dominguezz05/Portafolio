import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
  lines?: number
}

export function Skeleton({ 
  className = '', 
  variant = 'text', 
  width, 
  height, 
  lines = 1 
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gray-300 dark:bg-gray-600 rounded'
  
  const variantClasses = {
    text: 'h-4',
    rectangular: 'rounded-md',
    circular: 'rounded-full'
  }

  const renderSkeleton = () => {
    if (variant === 'text' && lines > 1) {
      return (
        <div className={`space-y-2 ${className}`}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={`${baseClasses} ${variantClasses.text} ${
                i === lines - 1 ? 'w-3/4' : 'w-full'
              }`}
              style={{
                width: i === lines - 1 ? '75%' : width,
                height: height
              }}
            />
          ))}
        </div>
      )
    }

    return (
      <div
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={{ width, height }}
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {renderSkeleton()}
    </motion.div>
  )
}

interface CardSkeletonProps {
  count?: number
}

export function CardSkeleton({ count = 1 }: CardSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className={`p-6 rounded-lg border ${
            'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}
        >
          <div className="space-y-4">
            <Skeleton variant="circular" width={60} height={60} />
            <Skeleton variant="text" lines={2} />
            <Skeleton variant="text" width="60%" />
            <div className="flex gap-2">
              <Skeleton variant="rectangular" width={80} height={30} />
              <Skeleton variant="rectangular" width={80} height={30} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

interface ProjectCardSkeletonProps {
  count?: number
}

export function ProjectCardSkeleton({ count = 1 }: ProjectCardSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className={`p-6 rounded-lg border shadow-lg ${
            'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}
        >
          <div className="space-y-4">
            <Skeleton variant="rectangular" width="100%" height={180} />
            <Skeleton variant="text" lines={2} />
            <Skeleton variant="text" width="70%" />
            <div className="flex flex-wrap gap-2">
              <Skeleton variant="rectangular" width={60} height={24} />
              <Skeleton variant="rectangular" width={70} height={24} />
              <Skeleton variant="rectangular" width={55} height={24} />
            </div>
            <div className="flex gap-3 pt-4">
              <Skeleton variant="rectangular" width={100} height={36} />
              <Skeleton variant="rectangular" width={100} height={36} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
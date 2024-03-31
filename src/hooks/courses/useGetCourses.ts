import { useState } from 'react'

import { useFetchCourses } from './useFetchCourses.ts'
import { useNormalizedCourses } from './useNormalizeCourses.ts'

export const useGetCourses = () => {
  const [activeTag, setActiveTag] = useState('all')
  const { courses, error, loading } = useFetchCourses()
  const { normalizeCourses, tags } = useNormalizedCourses(courses)

  return { activeTag, courses, error, loading, normalizeCourses, setActiveTag, tags }
}

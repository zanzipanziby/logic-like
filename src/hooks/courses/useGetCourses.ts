import { useState } from 'react'

import { useFetchCourses } from './useFetchCourses'
import { useNormalizedCourses } from './useNormalizeCourses'
export const ALL_THEMES = 'Все темы'

export const useGetCourses = () => {
  const [activeTag, setActiveTag] = useState(ALL_THEMES)
  const { courses, error, loading } = useFetchCourses()
  const { normalizeCourses, tags } = useNormalizedCourses(courses)

  return { activeTag, courses, error, loading, normalizeCourses, setActiveTag, tags }
}

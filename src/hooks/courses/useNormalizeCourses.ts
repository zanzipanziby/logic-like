import { useEffect, useState } from 'react'

import { Courses, NormalizeCoursesType } from '../../types/courses.ts'

export const useNormalizedCourses = (courses: Courses[]) => {
  const [tags, setTags] = useState<string[]>([])
  const [normalizeCourses, setNormalizeCourses] = useState<NormalizeCoursesType>({})

  useEffect(() => {
    const newTagsSet = new Set<string>()

    const newNormalizeCourses: NormalizeCoursesType = {}

    courses.forEach(course => {
      course.tags.forEach(tag => {
        newTagsSet.add(tag)

        if (!newNormalizeCourses[tag]) {
          newNormalizeCourses[tag] = []
        }

        newNormalizeCourses[tag].push(course)
      })
    })

    setTags(['Все темы', ...newTagsSet])

    setNormalizeCourses(newNormalizeCourses)
  }, [courses])

  return { normalizeCourses, tags }
}

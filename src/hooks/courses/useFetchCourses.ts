import { useEffect, useState } from 'react'

import { AxiosError } from 'axios'

import { logicLikeAPI } from '../../api'
import { Courses } from '../../types/courses'

export const useFetchCourses = () => {
  const [courses, setCourses] = useState<Courses[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<null | string>(null)

  const getCourses = async () => {
    try {
      const response = await logicLikeAPI.getCourses()

      setCourses(response.data)
      setError(null)
    } catch (e) {
      const error = e as AxiosError

      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCourses()
  }, [])

  return { courses, error, loading }
}

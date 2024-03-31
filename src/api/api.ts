import axios, { AxiosInstance } from 'axios'

import { Courses } from '../types/courses'

class LogicLikeAPI {
  private instance: AxiosInstance

  constructor(baseUrl: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      withCredentials: true,
    })
  }

  getCourses() {
    return this.instance.get<Courses[]>('/')
  }
}

const baseUrl: string = import.meta.env.VITE_BASE_URL

export const logicLikeAPI = new LogicLikeAPI(baseUrl)

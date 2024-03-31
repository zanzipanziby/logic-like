export type Courses = {
  bgColor: string
  id: string
  image: string
  name: string
  tags: string[]
}

export type NormalizeCoursesType = {
  [key: string]: Courses[]
}

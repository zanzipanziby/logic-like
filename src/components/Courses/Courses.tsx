import s from './Courses.module.scss'

import { ALL_THEMES, useGetCourses } from '../../hooks/courses/useGetCourses'
import { CourseList } from '../ui/CardsList'
import { ContentContainer } from '../ui/ContentContainer'
import { Loader } from '../ui/Loader'
import { Sidebar } from '../ui/Sidebar'

export const Courses = () => {
  const { activeTag, courses, loading, normalizeCourses, setActiveTag, tags } = useGetCourses()

  if (loading) {
    return <Loader />
  }

  return (
    <ContentContainer>
      <div className={s.wrapper}>
        <Sidebar activeTab={activeTag} setActiveTab={setActiveTag} sidebarElems={tags} />
        <CourseList cards={activeTag === ALL_THEMES ? courses : normalizeCourses[activeTag]} />
      </div>
    </ContentContainer>
  )
}

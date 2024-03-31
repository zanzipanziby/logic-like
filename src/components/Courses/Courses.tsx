import s from './Courses.module.scss'

import { useGetCourses } from '../../hooks/courses/useGetCourses'
import { CardsList } from '../ui/CardsList'
import { ContentContainer } from '../ui/ContentContainer'
import { Sidebar } from '../ui/Sidebar'

export const Courses = () => {
  const { activeTag, courses, normalizeCourses, setActiveTag, tags } = useGetCourses()

  return (
    <ContentContainer>
      <div className={s.wrapper}>
        <Sidebar activeTab={activeTag} setActiveTab={setActiveTag} sidebarElems={tags} />
        <CardsList cards={activeTag === 'all' ? courses : normalizeCourses[activeTag]} />
      </div>
    </ContentContainer>
  )
}

import { memo } from 'react'

import s from './CourseList.module.scss'

import { Courses } from '../../../types/courses.ts'
import { Card } from '../Card'

export const CourseList = memo(({ cards }: Props) => {
  return (
    <ul className={s.cardsList}>
      {cards.map(card => (
        <li key={card.id}>
          <Card bgColor={card.bgColor} imgSrc={card.image} title={card.name} />
        </li>
      ))}
    </ul>
  )
})
type Props = {
  cards: Courses[]
}

import type { Card as CardType } from '../../../types/card'

import s from './CardsList.module.scss'

import { Card } from '../Card'

export const CardsList = ({ cards }: Props) => {
  return (
    //todo перевести на ul > li
    <ul className={s.cardsList}>
      {cards.map(card => (
        <li key={card.id}>
          <Card bgColor={card.bgColor} imgSrc={card.image} title={card.name} />
        </li>
      ))}
    </ul>
  )
}
type Props = {
  //todo исправить тип
  cards: CardType[]
}

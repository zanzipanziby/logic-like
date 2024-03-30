import { useEffect, useRef } from 'react'

import s from './Card.module.scss'

export const Card = ({ bgColor, imgSrc, title }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--card-background-image', `url(${imgSrc})`)
      ref.current.style.setProperty('--card-background-color', `${bgColor}`)
    }
  }, [imgSrc, bgColor])

  return (
    <div className={s.card}>
      <div className={s.imageContainer} ref={ref}></div>
      <div className={s.title}>{title}</div>
    </div>
  )
}
type Props = {
  bgColor: string
  imgSrc: string
  title: string
}

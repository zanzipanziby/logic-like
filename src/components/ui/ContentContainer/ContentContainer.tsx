import { ReactNode } from 'react'

import s from './ContentContainer.module.scss'

export const ContentContainer = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>
}

type Props = {
  children: ReactNode
}

import s from './SidebarElem.module.scss'

export const SidebarElem = ({ className, isActive, onClick, title }: Props) => {
  return (
    <li
      className={`${s.sidebarElem} ${isActive && s.active} ${className && className}`}
      onClick={onClick}
    >
      {title}
    </li>
  )
}

type Props = {
  className?: string
  isActive: boolean
  onClick: () => void
  title: string
}

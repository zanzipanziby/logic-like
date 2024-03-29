import s from './Sidebar.module.scss'

import { SidebarElem } from '../SidebarElem/SidebarElem'

export const Sidebar = ({ activeTab, className, sidebarElems }: Props) => {
  return (
    <aside>
      <nav>
        <ul className={`${s.elemList} ${className && className}`}>
          {sidebarElems.map(el => {
            return (
              <SidebarElem isActive={activeTab === el} key={el} onClick={() => {}} title={el} />
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
type Props = {
  activeTab: string
  className?: string
  sidebarElems: string[]
}

import s from './Sidebar.module.scss'

import { SidebarElem } from '../SidebarElem/SidebarElem'

export const Sidebar = ({ activeTab, className, setActiveTab, sidebarElems }: Props) => {
  return (
    <aside>
      <nav>
        <ul className={`${s.elemList} ${className && className}`}>
          {sidebarElems.map(el => {
            return (
              <SidebarElem
                isActive={activeTab === el}
                key={el}
                onClick={() => setActiveTab(el)}
                title={el}
              />
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
  setActiveTab: (tabTitle: string) => void
  sidebarElems: string[]
}

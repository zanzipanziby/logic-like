import { Meta, StoryObj } from '@storybook/react'

import { SidebarElem } from './SidebarElem'

const meta = {
  args: {},
  component: SidebarElem,
  tags: ['autodocs'],
  title: 'Components/SidebarElem',
} satisfies Meta<typeof SidebarElem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isActive: false,
    onClick: () => {},
    title: 'Все темы',
  },
}

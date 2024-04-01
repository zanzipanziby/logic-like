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
    isActive: true,
    onClick: () => {},
    title: 'Все темы',
  },
  decorators: [
    Story => (
      <div style={{ width: 'calc(var(--sidebar-width) - var(--size-md)*2 )' }}>
        <Story />
      </div>
    ),
  ],
}

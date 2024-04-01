import { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './'

const sidebarElems = ['Все продукты', 'Логика и мышление', 'Загадки', 'Головоломки', 'Путешествия']

const meta = {
  argTypes: { activeTab: { control: { type: 'select' }, options: sidebarElems } },
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Components/Sidebar',
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    activeTab: 'Все темы',
    setActiveTab: (_: string) => {},
    sidebarElems,
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: 'var(--sidebar-width)' }}>
        <Story />
      </div>
    ),
  ],
}

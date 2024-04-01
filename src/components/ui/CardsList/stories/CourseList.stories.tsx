import { Meta, StoryObj } from '@storybook/react'

import { CourseList } from '../CourseList.tsx'
import { courseListMockData } from './CourseList.mockData.ts'

const meta = {
  component: CourseList,
  title: 'components/CourseList',
} satisfies Meta<typeof CourseList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: courseListMockData,
  },
}

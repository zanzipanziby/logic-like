import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    bgColor: '#FF9966',
    imgSrc:
      'https://s3.logiclike.com/s3/logic-training/side-courses/files/MkHAmnYuhotzMc91WydqA7dkFrVPO3KoclrIJX2O.png',
    title: 'Шахматы',
  },
}

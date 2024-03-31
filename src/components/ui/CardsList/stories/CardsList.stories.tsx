import { Meta, StoryObj } from '@storybook/react'

import { CardsList } from '../CardsList'
import { cardListMockData } from './CardList.mockData'

const meta = {
  component: CardsList,
  title: 'components/CardsList',
} satisfies Meta<typeof CardsList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: cardListMockData,
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import TextField from '../Components/TextField/TextField'
import { Story } from '@storybook/blocks'

const meta = {
   title: 'Example/TextField',
   component: TextField,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {
      /*backgroundColor: { control: 'color' },*/
   },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const FirstExample: Story = {
   args: {
      variant: 'outlined',
      placeholder: 'test',
   },
}

export const SecondExample: Story = {
   args: {
      variant: 'standard',
      header: 'Email',
   },
}

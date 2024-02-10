import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default ={
  render: (args: MenuProps) => <Menu {...args} />,
  args: {
    username: ""
  },
  argTypes: {
    username: {
      type: 'string'
    }
},
parameters: {
  layout: 'Fullscreen',
  backgrounds:{
    default: 'dark'
  }

}
}

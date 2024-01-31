import { Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default { component: Button } as Meta


export const Default = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {type: 'select'}
    },
    icon: { table:{ disable: true } }
  }
}

export const withIcon = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart/>,
    size: 'small'
  },
  argTypes: {
   icon: {
      control: {type: 'select'}
    }
}
}

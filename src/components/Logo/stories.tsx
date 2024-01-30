import { Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' }
    }
  }
} as Meta

const Template = (args: LogoProps) => <Logo {...args} />

export const Default = Template.bind({}) as any
Default.args = {
  color: 'white'
}
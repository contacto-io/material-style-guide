import React from 'react'
import { Alert } from './'
import { Text } from '../Typography'

export default {
  title: 'Components/Alert',
  component: Alert,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  message: 'This is a warning banner',
  type: 'info',
}

export const Success = Template.bind({})
Success.args = {
  message: 'This is a success banner',
  type: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  message: 'This is a warning banner',
  type: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  message: 'This is a danger banner',
  type: 'danger',
}

export const DefaultSmall = Template.bind({})
DefaultSmall.args = {
  message: 'This is a small banner',
  type: 'info',
  size: 'small',
}

export const CustomNote = Template.bind({})
CustomNote.args = {
  message: 'This is a custom banner',
  type: 'warning',
  iconName: 'task',
  children: (
    <Text type="headline" color="primary-color">
      Action
    </Text>
  ),
}

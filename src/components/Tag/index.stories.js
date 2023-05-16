import React from 'react'
import { ReactComponent as CustomIcon } from '../../assets/ic-account.svg'
import { Tag, TAG_TYPES } from './'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    type: {
      options: TAG_TYPES,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default Tag',
}

export const Closeable = Template.bind({})
Closeable.args = {
  label: 'Default Tag',
  closable: true,
}

export const Success = Template.bind({})
Success.args = {
  label: 'Active',
  type: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Inactive',
  type: 'danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  type: 'disabled',
}

export const InProgress = Template.bind({})
InProgress.args = {
  label: 'In Progress',
  type: 'progress',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'In Progress',
  type: 'warning',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'With Icon',
  type: 'default',
  icon: 'visibility',
}

export const SvgIcon = Template.bind({})
SvgIcon.args = {
  label: 'With Icon',
  type: 'default',
  svg: CustomIcon,
}

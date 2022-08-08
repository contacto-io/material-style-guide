import React from 'react'
import { Icon } from './'
import cssVars from '../../utils/cssVars'
import { ReactComponent as CustomIcon } from '../../assets/ic-account.svg'

export default {
  title: 'Icons/Basic Usage',
  component: Icon,
  argTypes: {
    color: {
      options: cssVars,
      control: { type: 'select' },
    },
    hoverColor: {
      options: cssVars,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

export const WithColor = Template.bind({})
WithColor.args = {
  color: 'primary-color',
}

export const WithHoverColor = Template.bind({})
WithHoverColor.args = {
  color: 'gray-2',
  hoverColor: 'danger-color',
}

export const LoadingIcon = () => <Icon.Loading />

export const EmptySearchIcon = () => (
  <Icon.Custom type="empty-search" message="No contacts found with the above information" />
)

export const EmptyNewConversation = () => (
  <Icon.Custom type="empty-new-conversation" message="Empty queue should bring smiles" />
)

export const ApiError = () => (
  <Icon.Custom type="api-error" message="Oops there is a technical error" />
)

export const EmptyFolder = () => (
  <Icon.Custom type="empty-folder" message="Empty queue should bring smiles" />
)

export const EmptyActiveConversation = () => (
  <Icon.Custom type="active-conversation" message="Awesome! You have a clean slate" />
)

export const AddNotes = () => <Icon.Custom type="add-notes" message="Add notes to make notes" />

export const DifferentSizes = (args) => {
  return (
    <div>
      <Icon name="search" size={18}></Icon>
      <Icon name="search" size={20}></Icon>
      <Icon name="search" size={24}></Icon>
      <Icon name="search" size={32}></Icon>
      <Icon name="search" size={40}></Icon>
      <Icon name="search" size={56}></Icon>
    </div>
  )
}

export const CustomSvgIcon = Template.bind({})
CustomSvgIcon.args = {
  color: 'primary-color',
  hoverColor: 'danger-color',
  svg: CustomIcon,
  size: 55,
}

import React from 'react'
import { HighlightInputBox } from './'

export default {
  title: 'Components/HighlightInputBox',
  component: HighlightInputBox,
  // argTypes: {
  //  type: {
  //    options:
  //    control: { type: 'select' },
  //  },
  // },
}

const Template = (args) => <HighlightInputBox style={{ width: 280 }} {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'This is a partial highlight textbox',
  word: 'partial highlight',
}

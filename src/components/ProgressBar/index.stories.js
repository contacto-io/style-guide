import React from 'react'
import { ProgressBar } from './'

export default {
  title: 'Components/Progress Bar',
  component: ProgressBar,
}

const Template = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  timer: 20000,
  strokeColors: ['#f5222d', '#52c41a'],
  progressPercentchange: 25,
}

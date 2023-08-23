import React from 'react'
import { TimeLeftBar } from '.'

export default {
  title: 'Components/TimeLeft Bar',
  component: TimeLeftBar,
  parameters: {},
}

const Template = (args) => <TimeLeftBar {...args} />

export const Default = Template.bind({})
Default.args = {
  duration: 20000, // total duration of bar
  colorone: 'success-color', // Color of the bar is it's percentage is more than progressPercentage
  colortwo: 'danger-color', // Color of the  bar is it's percentage is less than progressPercentage
  coloronethreshold: 25, // Percent at which the  bar changes it's color
}

export const WithoutThreshold = Template.bind({})
WithoutThreshold.args = {
  duration: 20000,
  colorone: 'primary-color',
}

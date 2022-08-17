import React from 'react'
import { PhoneNumberWithCodeInput } from '.'

export default {
  title: 'Components/Phone number with Country Code',
  component: PhoneNumberWithCodeInput,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'select' },
    },
  },
  decorators: [(story) => <div style={{ width: '280px' }}>{story()}</div>],
}

const Template = (args) => <PhoneNumberWithCodeInput {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'input',
  size: 'default',
  placeholder: 'A simple text field',
  defaultCode: '91',
  defaultNumber: '8107680129',
  maxLength: 20,
  fieldGap: '12px',
  onChange: () => {},
}

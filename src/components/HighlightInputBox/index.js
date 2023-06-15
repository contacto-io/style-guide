import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { HighlightInputBox as HInputBox } from 'react-highlighting-textbox'
//import { Component } from 'antd'
//import { Text } from '../Typography/index'

/**
 * A Input box that can handle partial highlight
 */
export const HighlightInputBox = ({
  className = '',
  value,
  onChange,
  highlightClassName,
  word,
  style,
  ...props
}) => {
  return (
    <div
      className={['sg contacto-input-wrapper contacto-highlightinputbox', className].join(' ')}
      style={style}
    >
      <HInputBox
        className="contacto-input"
        value={value}
        onChange={onChange}
        highlightClassName={highlightClassName}
        word={word}
      />
    </div>
  )
}

HighlightInputBox.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  highlightClassName: PropTypes.string,
  /**
   * Word/string that needs to be highlighted
   */
  word: PropTypes.string,
  style: PropTypes.object,
}

HighlightInputBox.defaultProps = {}

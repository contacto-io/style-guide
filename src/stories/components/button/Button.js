import React from 'react'
import PropTypes from 'prop-types'
import { Button as AntButton } from 'antd'
import './button.scss'
export const BUTTON_TYPES = [
  'primary',
  'secondary',
  'danger-primary',
  'danger-secondary',
  'link',
  'link-danger',
  'table-action-link',
]

export const getButtonClassName = (
  type,
  size = 'default',
  icon,
  className,
  onlyIcon,
  fullWidth,
  align,
) => {
  return [
    'sg',
    'cnto-btn',
    'contacto-button',
    type ? `contacto-button--${type}` : '',
    size ? `contacto-button--${size}` : '',
    icon ? `contacto-button--with-icon` : '',
    onlyIcon ? 'contacto-button--only-icon' : '',
    fullWidth ? 'contacto-button--full-width' : '',
    align ? `contacto-button--${align}` : '',
    className,
  ].join(' ')
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  size,
  label,
  icon,
  fullWidth,
  align,
  className,
  children,
  ...props
}) => {
  return (
    <AntButton
      className={getButtonClassName(type, size, icon, className, !label && icon, fullWidth, align)}
      icon={icon ? <span className={'material-icons contacto-icon ' + size}>{icon}</span> : null}
      {...props}
    >
      {label || children}
    </AntButton>
  )
}

Button.propTypes = {
  /**
   * This indicates what type of button should be rendered
   */
  type: PropTypes.oneOf(BUTTON_TYPES),
  className: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Button Text
   */
  label: PropTypes.string,

  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,
  /**
   * Disable the button
   */
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.any,
}

Button.defaultProps = {
  size: 'default',
  type: 'primary',
}

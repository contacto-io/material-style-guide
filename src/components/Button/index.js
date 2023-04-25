import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'
import { Icon } from '../Icon/index'
import './button.scss'
import { Text } from '../Typography/index'
export const BUTTON_TYPES = [
  'primary',
  'secondary',
  'secondary-gray',
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
  loading,
) => {
  return [
    'sg',
    'cnto-btn',
    'contacto-button',
    type ? `contacto-button--${type}` : '',
    size ? `contacto-button--${size}` : '',
    icon ? `contacto-button--with-icon--${size}` : '',
    onlyIcon ? 'contacto-button--only-icon' : '',
    loading ? `contacto-button--loading` : '',
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
  loading,
  disabled,
  children,
  loaderColor,
  ...props
}) => {
  type = props.textType ? 'text-type-button' : type
  return (
    <MuiButton
      className={getButtonClassName(
        type,
        size,
        icon,
        className,
        !(label || children) && icon,
        fullWidth,
        align,
        loading,
      )}
      startIcon={icon ? <Icon name={icon} className={size} /> : null}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <Icon.Loading
          size={size === 'small' ? 18 : 20}
          strokeWidth={1}
          color={loaderColor}
          trackColor="white"
        />
      ) : null}
      <Text
        className="contacto-button-content"
        type={props.textType || (type.includes('link') ? 'headline' : 'body')}
        color={props.textColor}
      >
        {label || children}
      </Text>
    </MuiButton>
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
  size: PropTypes.oneOf(['small', 'default', 'large', 'extra-large']),
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
  /**
   * Set to true, if the button needs to expand to full width of the container
   */
  fullWidth: PropTypes.bool,
  /**
   * How to align the text inside the button. Default is center.
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.any,
  loading: PropTypes.bool,
  loaderColor: PropTypes.string,
  textType: PropTypes.string,
  textColor: PropTypes.string,
}

Button.defaultProps = {
  size: 'default',
  type: 'primary',
}

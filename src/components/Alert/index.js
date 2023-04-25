import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'

const iconMap = {
  info: 'info',
  warning: 'error',
  danger: 'report',
  success: 'check_circle',
}

/**
 * Component that is used to show alert messages on the UI
 */
export const Alert = ({
  className = '',
  type,
  message,
  size = 'default',
  iconName,
  iconSvg,
  children = <></>,
  ...props
}) => {
  return (
    <div
      className={[
        'sg contacto-alert',
        `contacto-alert--${size}`,
        `contacto-alert--${type}`,
        className,
      ].join(' ')}
      {...props}
    >
      <div className="contacto-alert-icon">
        {iconSvg ? (
          <Icon svg={iconSvg} size={20} />
        ) : (
          <Icon name={iconName ? iconName : iconMap[type]} size={20} />
        )}
      </div>
      <div className="contacto-alert-message">
        <Text>{message}</Text>
        {children}
      </div>
    </div>
  )
}

Alert.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The type of alert
   */
  type: PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
  /**
   * The alert message to be displayed
   */
  message: PropTypes.string,
  /**
   * The alert size to be displayed
   */
  size: PropTypes.oneOf(['small', 'default']),
  /**
   * The alert's iconName will be used for icon
   */
  iconName: PropTypes.string,
  /**
   * The alert iconSvg will be used for icon
   */
  iconSvg: PropTypes.any,
  /**
   * The alert consider children as action component
   */
  children: PropTypes.any,
}

Alert.defaultProps = {}

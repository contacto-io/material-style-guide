import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Text } from '../Typography/index'
import { Icon } from '../Icon/index'
import { Block } from '../Block'

export const TAG_TYPES = ['success', 'danger', 'disabled', 'progress', 'default', 'warning']
/**
 * Tag component that is used to specify status of a task
 */
export const Tag = ({ className = '', type, label, children, icon, svg, ...props }) => {
  return (
    <span className={['sg contacto-tag', className, `contacto-tag--${type}`].join(' ')} {...props}>
      <Block display="flex" alignItems="center">
        {icon && <Icon name={icon} size={14} className="tag-icon" />}
        {svg && <Icon svg={svg} size={14} className="tag-icon" />}
        <Text type={type === 'default' ? 'caption' : 'caption-capital'}>{label || children}</Text>
      </Block>
    </span>
  )
}

Tag.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The type of tag
   */
  type: PropTypes.oneOf(TAG_TYPES),
  /**
   * The text to be displayed
   */
  label: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  svg: PropTypes.any,
}

Tag.defaultProps = {
  type: 'default',
}

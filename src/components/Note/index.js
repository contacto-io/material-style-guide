import React, { useEffect, useState } from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'

/**
 * Component that is used to show note messages on the UI
 */
export const Note = ({
  className = '',
  iconName,
  iconSvg,
  message,
  hasLongText = false,
  expandNote = false,
  children,
  ...props
}) => {
  const [hasCollapsed, setHasCollapsed] = useState(expandNote)
  const handleCollapse = () => {
    setHasCollapsed(!hasCollapsed)
  }

  useEffect(() => {
    if (expandNote && !hasCollapsed) {
      setHasCollapsed(true)
    }
  }, [expandNote])

  return (
    <div
      className={['sg contacto-note', `${hasCollapsed ? 'expand' : ''}`, className].join(' ')}
      {...props}
    >
      <div className="contacto-note-icon">
        {iconName && <Icon name={iconName} size={20} color="secondary-color" />}
        {iconSvg && <Icon svg={iconSvg} size={20} color="secondary-color" />}
      </div>
      <div className="contacto-note-message">
        <Text ellipsis={!hasCollapsed && hasLongText} type="caption">
          {message}
          {children}
        </Text>
      </div>
      {hasLongText ? (
        <div className="contacto-note-collapse-box expand-icon" onClick={handleCollapse}>
          <Icon name={` ${hasCollapsed ? 'expand_less' : 'expand_more'}`} size={20} />
        </div>
      ) : null}
    </div>
  )
}

Note.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  /**
   * The note's iconName will be used for icon
   */
  iconName: PropTypes.string,
  /**
   * The note custom iconSvg will be used for icon
   */
  iconSvg: PropTypes.any,
  /**
   * The note message to be displayed
   */
  message: PropTypes.string,
  /**
   * The note hasLongText will allow to handle long text with collapse toggle
   */
  hasLongText: PropTypes.bool,
  /**
   * The note expandNote will expand the note
   */
  expandNote: PropTypes.bool,
  /**
   * The note append the children to message
   */
  children: PropTypes.any,
}

Note.defaultProps = {}

import React, { useEffect, useRef, useState } from 'react'
import { Text } from '../Typography/index'
import { Select as MaterialSelect, MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import './select.scss'
import { Icon } from '../Icon/index'
/**
 * This is used to select a value from the list of options
 */
export const Select = React.forwardRef(function Select(
  {
    label,
    type,
    icon,
    disabled,
    placeholder,
    readOnly,
    className,
    dropdownWidth,
    dropdownClassName,
    listHeight,
    size,
    onIconClick,
    loading,
    noShadow,
    options,
    children,
    onChange,
    renderValue,
    value,
    ...props
  },
  ref,
) {
  const [selectedValue, setSelectedValue] = useState(value || '')
  const wrapperRef = useRef(null)

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    onChange?.(e.target.value)
  }

  useEffect(() => setSelectedValue(value || ''), [value])

  const handleRenderValue = (value) => {
    const selectedOption = options.find((option) => option.value === value)
    return renderValue(value, selectedOption)
  }

  const generatedOptions = options.map((option) => (
    <MenuItem disabled={option.disabled} value={option.value} key={option.value}>
      <Text
        className={selectedValue === option.value ? 'select-item selected-item' : 'select-item'}
        align="left"
        ellipsis
        title={typeof option.label === 'string' ? option.label : option.value}
      >
        {option.label ? option.label : option.value}
      </Text>
    </MenuItem>
  ))
  return (
    <div
      className={[
        'sg mui-contacto-select-wrapper ',
        `mui-contacto-select--${size}`,
        className,
      ].join(' ')}
      ref={wrapperRef}
    >
      {label && (
        <div className="mui-contacto-select-label-wrapper">
          <Text type="caption-bold">{label}</Text>
        </div>
      )}
      {placeholder && !selectedValue && (
        <Text color="gray-2" className="mui-contacto-select-placeholder">
          {placeholder}
        </Text>
      )}
      <MaterialSelect
        className={[
          'mui-contacto-select',
          readOnly ? 'mui-contacto-select--readonly' : '',
          noShadow ? 'mui-contacto-select--no-shadow' : '',
          `mui-contacto-select--${type}`,
        ].join(' ')}
        ref={ref}
        onChange={handleChange}
        renderValue={renderValue ? handleRenderValue : undefined}
        MenuProps={{
          classes: {
            paper: `sg mui-contacto-select-listbox ${
              type ? `mui-contacto-select-listbox--${type}` : ''
            } ${dropdownClassName || ''}`,
          },
          anchorEl: () => wrapperRef.current,
          TransitionProps: {
            onEnter: (element) => {
              element.style.width = dropdownWidth || wrapperRef.current.offsetWidth + 'px'
            },
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        value={selectedValue}
        variant="outlined"
        disabled={readOnly || disabled}
        IconComponent={() =>
          loading ? (
            <Icon.Loading size={size === 'small' ? 16 : 20} strokeWidth={2} />
          ) : (
            <Icon
              name="expand_more"
              color={disabled ? 'gray-2' : 'gray-1'}
              onClick={onIconClick}
              className="mui-contacto-select-caret"
              size={20}
            />
          )
        }
        {...props}
      >
        {children || generatedOptions.length ? (
          generatedOptions
        ) : (
          <option disabled className="select-item select-item-no-data">
            {' '}
            No Data
          </option>
        )}
      </MaterialSelect>
    </div>
  )
})

Select.propTypes = {
  /**
   * How large should the textfield be?
   */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /**
   * Placeholder Text
   */
  placeholder: PropTypes.string,
  /**
   * Label for the Input
   */
  label: PropTypes.string,
  /**
   * Material UI icon name taken from https://fonts.google.com/icons
   */
  icon: PropTypes.string,
  /**
   * Disable the textfield
   */
  disabled: PropTypes.bool,
  /**
   * Show the value as readonly
   */
  readOnly: PropTypes.bool,
  /**
   * Class name to be added
   */
  className: PropTypes.string,
  /**
   * Class name to be added for the list-box
   */
  dropdownClassName: PropTypes.string,
  /**
   * Height of the dropdown listbox
   */
  listHeight: PropTypes.number,
  /**
   * Show the loader
   */
  loading: PropTypes.bool,
  /**
   * Click handler for the icon
   */
  onIconClick: PropTypes.func,
  /**
   * Set it to true to remove shadow
   */
  noShadow: PropTypes.bool,
  /**
   * Options
   */
  options: PropTypes.any,
  children: PropTypes.any,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  value: PropTypes.any,
  dropdownWidth: PropTypes.any,
  type: PropTypes.any,
}

Select.defaultProps = {
  size: 'default',
  options: [],
}

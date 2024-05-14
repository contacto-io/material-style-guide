import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import MomentUtils from '@date-io/moment'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import InputAdornment from '@material-ui/core/InputAdornment'
import moment from 'moment'
import useStyles from './input.styles'
import { Icon } from '../Icon/index'
import { TextField } from '../Textfield/index'
import ToolbarComponent from './toolbar'
import './styles.scss'

const FORMATS = {
  datetime: 'D MMM, YYYY, h:mm a',
  date: 'D MMM, YYYY',
  time: 'h:mm a',
}

export const DateTime = ({
  onChange,
  isValueFieldDisabled,
  value,
  error,
  toolbarType,
  format,
  onClose,
  allowOnlyPastDate,
  maxDate,
  placeholder,
  defaultOpen,
  minDate,
}) => {
  const classes = useStyles()
  const [open, setOpenState] = useState(false)
  const dateTimePickerWrapperRef = useRef(null)

  const placeholderText =
    placeholder ||
    (toolbarType === 'datetime'
      ? 'Select Date and Time'
      : toolbarType === 'time'
      ? 'Select Time'
      : 'Select Date')
  const dateTimeFormat = format || FORMATS[toolbarType]
  const views =
    toolbarType === 'datetime'
      ? ['date', 'hours', 'minutes']
      : toolbarType === 'time'
      ? ['hours', 'minutes']
      : ['date']

  const onOpen = () => {
    setOpenState(true)
  }

  useEffect(() => {
    if (defaultOpen) {
      onOpen()
    }
  }, [])

  const inputValue = value ? moment(value).format(dateTimeFormat) : ''

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="sg contacto-datetime">
        <div ref={dateTimePickerWrapperRef}>
          <DateTimePicker
            autoOk
            variant="inline"
            hideTabs
            clearable
            ToolbarComponent={(props) => <ToolbarComponent toolbarType={toolbarType} {...props} />}
            value={value}
            placeholder={placeholderText}
            maxDate={maxDate}
            error={error}
            views={views}
            TextFieldComponent={(props) => {
              return <TextField {...props} value={inputValue} />
            }}
            PopoverProps={{
              anchorEl: dateTimePickerWrapperRef?.current,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              classes: {
                paper: classes.paper,
              },
              elevation: 0,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenState(true)
                  }}
                >
                  <Icon
                    name={toolbarType === 'time' ? 'schedule' : 'calendar_today'}
                    color="gray-1"
                    size={18}
                  />
                </InputAdornment>
              ),
            }}
            disabled={isValueFieldDisabled}
            onChange={onChange}
            open={open}
            onOpen={onOpen}
            onClose={() => {
              setOpenState(false)
              if (onClose) onClose(value)
            }}
            minDate={minDate}
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default DateTime

DateTime.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  index: PropTypes.any,
  onChange: PropTypes.any,
  isValueFieldDisabled: PropTypes.any,
  value: PropTypes.any,
  error: PropTypes.any,
  toolbarType: PropTypes.any,
  format: PropTypes.any,
  onClose: PropTypes.any,
  allowOnlyPastDate: PropTypes.any,
  maxDate: PropTypes.any,
  placeholder: PropTypes.string,
}

DateTime.defaultProps = {}

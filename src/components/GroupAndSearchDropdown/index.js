/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from '../Icon/index'
import { Text } from '../Typography/index'
import { TextField } from '../Textfield/index'
import './groupAndSearchDropdown.scss'

function insertText(newText, e) {
  let cursorPosition = e.selectionStart
  let textBeforeCursorPosition = e.value.substring(0, cursorPosition)
  let textAfterCursorPosition = e.value.substring(cursorPosition, e.value.length)
  return textBeforeCursorPosition.replace(/{{$/, '') + newText + textAfterCursorPosition
}

export const GroupAndSearchDropdown = ({
  options,
  onValueSelect,
  className,
  mode,
  onChange,
  dropdownIcon,
  openOnTextboxClick,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const textFieldRef = useRef()
  const searchRef = useRef()

  //To autofocus the search bar whenever the dropdown opens
  useEffect(() => {
    if (showDropdown) {
      setTimeout(() => searchRef.current.focus(), 100)
    }
  }, [showDropdown])

  const OptionsDropdown = () => {
    const [searchString, setSearchString] = useState('')

    return (
      <div className="options-dropdown">
        <div className="search-box">
          <TextField
            type="search-box"
            placeholder="Search"
            onChange={({ target }) => {
              setSearchString(target.value)
            }}
            autoFocus={true}
            ref={searchRef}
          />
        </div>
        {options?.map((option, index) => {
          const filteredOptions = option?.children?.filter((item) =>
            item?.value?.toLowerCase().includes(searchString.toLowerCase()),
          )
          if (filteredOptions.length === 0) return null
          return (
            <>
              <div className="group-header" key={index}>
                <Text type="caption-bold" color="gray-2">
                  {option?.title}
                </Text>
              </div>
              {filteredOptions?.map((child, childIndex) => (
                <div
                  className="group-option"
                  key={childIndex}
                  onClick={() => {
                    const finalValue = `{{${child?.value}}}`
                    textFieldRef.current.focus()
                    onChange({
                      target: {
                        value:
                          mode === 'replacer'
                            ? finalValue
                            : insertText(finalValue, document.activeElement),
                      },
                      isSelection: true,
                    })
                    setShowDropdown(false)
                    setSearchString('')
                  }}
                >
                  <Text type="caption">{child?.label}</Text>
                </div>
              ))}
            </>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <Dropdown
        overlay={<OptionsDropdown />}
        trigger={['click']}
        visible={showDropdown}
        placement="bottomRight"
        onVisibleChange={(visible) => setShowDropdown(visible)}
      >
        <div className={`group-dropdown`}>
          <TextField
            type={'text'}
            ref={textFieldRef}
            className={className}
            suffix={
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  setShowDropdown(!showDropdown)
                }}
                className="contacto-icon--input-suffix-variable-dropdown"
              >
                <Icon svg={dropdownIcon} size={20} />
              </div>
            }
            onBlur={(e) => {
              e.target.value = e.target.value.trim()
              onChange(e)
            }}
            onClick={(e) => !openOnTextboxClick && e.stopPropagation()}
            onChange={(e) => {
              const value = e.target.value

              setShowDropdown(value.match(/{{$/g))
              onChange(e)
            }}
            {...props}
          />
        </div>
      </Dropdown>
    </>
  )
}

GroupAndSearchDropdown.propTypes = {
  className: PropTypes.string,
  /**
   * Dropdown options
   */
  options: PropTypes.object,
  value: PropTypes.string,
  onValueSelect: PropTypes.func,
  mode: PropTypes.string,
  onChange: PropTypes.func,
  dropdownIcon: PropTypes.any,
  openOnTextboxClick: PropTypes.bool,
}

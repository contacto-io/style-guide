import React, { useState, useEffect } from 'react'
import { Progress } from 'antd'
import PropTypes from 'prop-types'

export const TimeLeftBar = ({
  duration,
  colorone,
  colortwo,
  coloronethreshold,
  className,
  ...props
}) => {
  const [progressPercent, setProgressPercent] = useState(0)
  useEffect(() => {
    let startTime = new Date().getTime()

    const interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const elapsedTime = currentTime - startTime

      if (elapsedTime >= duration) {
        clearInterval(interval)
      }
      // calculating the percentage of time left
      const percentage = 100 - (elapsedTime / duration) * 100
      setProgressPercent(percentage)
    }, 100) // Update every 100 milliseconds

    return () => clearInterval(interval)
  }, [])

  let progressBarColor
  if (coloronethreshold !== undefined)
    progressBarColor = progressPercent <= coloronethreshold ? colortwo : colorone
  else progressBarColor = colorone

  return (
    <Progress
      className={className}
      percent={progressPercent}
      showInfo={false}
      strokeColor={`var(--${progressBarColor})`}
      reverse
      {...props}
    />
  )
}

TimeLeftBar.propTypes = {
  className: PropTypes.string,
  /**
   * This indicates how much time is left
   */
  duration: PropTypes.string,
  /**
   * This indicates initial color of the bar
   */
  colorone: PropTypes.string,
  /**
   * This indicates color that changes after color one threshold
   */
  colortwo: PropTypes.string,
  /**
   * This indicates when at what percentage the color one changes
   */
  coloronethreshold: PropTypes.string,
}

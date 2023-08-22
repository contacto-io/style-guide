import React, { useState, useEffect } from 'react'
import { Progress } from 'antd'
import 'antd/dist/antd.css'
import './styles.scss'

export const ProgressBar = ({ timer, strokeColors, progressPercentchange, ...props }) => {
  const duration = timer
  const [progressPercent, setProgressPercent] = useState(0)
  let progressBarColor

  useEffect(() => {
    let startTime = new Date().getTime()

    const interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const elapsedTime = currentTime - startTime

      if (elapsedTime >= duration) {
        clearInterval(interval)
      }

      const percentage = 100 - (elapsedTime / duration) * 100
      setProgressPercent(percentage)
    }, 100) // Update every 100 milliseconds

    return () => clearInterval(interval)
  }, [])

  if (progressPercentchange)
    progressBarColor = progressPercent <= progressPercentchange ? strokeColors[0] : strokeColors[1] // Green or Red

  return (
    <div className="linear-progress-container">
      <Progress percent={progressPercent} showInfo={false} strokeColor={progressBarColor} reverse />
    </div>
  )
}

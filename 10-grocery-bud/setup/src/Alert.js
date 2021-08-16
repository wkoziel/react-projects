import React, { useEffect } from 'react'

const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [list])
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
    </div>
  )
}

export default Alert

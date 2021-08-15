import React, { useEffect } from 'react'

const Alert = ({ message, type }) => {
  return (
    <div
      className={`alert ${
        type === 'danger' ? 'alert-danger' : 'alert-success'
      }`}
    >
      <p>{message}</p>
    </div>
  )
}

export default Alert

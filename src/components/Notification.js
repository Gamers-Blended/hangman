import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    // if true, add show as a class
    // else, add nothing
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification
import React from 'react'

const LeftMessage = (props) => {
  return (
    <>
      <div className="message-outer-container">
        <div className="message-container">
          <div className="message">
            <p>{props.text}</p>
          </div>
          <div className="bottom-container">
            <p>{props.user}</p>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftMessage

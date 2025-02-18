import React from 'react'
import MessageReactions from './MessageReactions'

const Message = ({ message }) => {
  return (
    <div className={`message ${message.isAI ? 'ai' : 'user'}`}>
      <div className="message-content">
        <div className="username">{message.username}</div>
        <div className="text">{message.response}</div>
        <MessageReactions message={message} />
      </div>
    </div>
  )
}

export default Message

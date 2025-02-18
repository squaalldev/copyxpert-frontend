import React from 'react'
import Message from './Message'

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  )
}

export default ChatMessages

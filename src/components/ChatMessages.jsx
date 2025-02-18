import React from 'react'
import { Message }
export default ChatMessages from './Message'

const ChatMessages = ({ messages }
export default ChatMessages) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <Message key={index}
export default ChatMessages message={message}
export default ChatMessages />
      ))}
export default ChatMessages
    </div>
  )
}
export default ChatMessages

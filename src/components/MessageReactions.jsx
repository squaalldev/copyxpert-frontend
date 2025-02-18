import React from 'react'

const MessageReactions = ({ message }) => {
  return (
    <div className="message-reactions">
      {message.reactions && message.reactions.map((reaction, index) => (
        <span key={index} className="reaction">{reaction}</span>
      ))}
    </div>
  )
}

export default MessageReactions

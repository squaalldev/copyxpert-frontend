import React from 'react'
import { MessageReactions } from './MessageReactions'

export function Message({ message }) {
  return (
    <div className={`message ${message.isAI ? 'ai' : 'user'}`}>
      <div className="message-content">
        <div className="message-text">{message.content}</div>
        <MessageReactions message={message} />
      </div>
      <div className="message-info">
        <span className="message-username">{message.username}</span>
        <span className="message-time">
          {new Date(message.created_at).toLocaleTimeString()}
        </span>
      </div>
    </div>
  )
}

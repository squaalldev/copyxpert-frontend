import React from 'react'
import { Message } from './Message'

export function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  )
}

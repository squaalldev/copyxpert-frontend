import React, { useState } from 'react'
import EmojiPicker from './EmojiPicker'

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <EmojiPicker onEmojiSelect={(emoji) => setMessage(message + emoji)} />
      <button type="submit">Send</button>
    </form>
  )
}

export default ChatInput

import React, { useState } from 'react'
import { EmojiPicker } from './EmojiPicker'

export function MessageReactions({ message }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  return (
    <div className="message-reactions">
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        <i className="ri-emotion-line"></i>
      </button>
      {showEmojiPicker && (
        <EmojiPicker onEmojiSelect={(emoji) => {
          // Lógica para añadir reacción
          setShowEmojiPicker(false)
        }} />
      )}
      {message.reactions?.map((reaction, index) => (
        <span key={index} className="reaction">
          {reaction.emoji}
        </span>
      ))}
    </div>
  )
}

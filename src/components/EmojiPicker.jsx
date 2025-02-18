import React from 'react'

export function EmojiPicker({ onEmojiSelect }) {
  const emojis = ['👍', '❤️', '😊', '🎉', '🤔', '👏', '🔥', '🙌', '💯', '✨']
  
  return (
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <button 
          key={index}
          onClick={() => onEmojiSelect(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

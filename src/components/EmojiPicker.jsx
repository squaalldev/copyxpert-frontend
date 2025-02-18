import React from 'react'

const EmojiPicker = ({ onEmojiSelect }) => {
  const emojis = ['😀', '😊', '🤔', '👍', '❤️']
  
  return (
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <button 
          key={index}
          onClick={() => onEmojiSelect(emoji)}
          type="button"
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

export default EmojiPicker

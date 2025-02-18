import React from 'react'

const EmojiPicker = ({ onEmojiSelect }
export default EmojiPicker) => {
  const emojis = ['👍', '❤️', '😊', '🎉', '🤔', '👏', '🔥', '🙌', '💯', '✨']
  
  return (
    <div className="emoji-picker">
      {emojis.map((emoji, index) => (
        <button 
          key={index}
export default EmojiPicker
          onClick={() => onEmojiSelect(emoji)}
export default EmojiPicker
        >
          {emoji}
export default EmojiPicker
        </button>
      ))}
export default EmojiPicker
    </div>
  )
}
export default EmojiPicker

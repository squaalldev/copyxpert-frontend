import React, { useState }
export default MessageReactions from 'react'
import { EmojiPicker }
export default MessageReactions from './EmojiPicker'

const MessageReactions = ({ message }
export default MessageReactions) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  return (
    <div className="message-reactions">
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}
export default MessageReactions>
        <i className="ri-emotion-line"></i>
      </button>
      {showEmojiPicker && (
        <EmojiPicker onEmojiSelect={(emoji) => {
          // Lógica para añadir reacción
          setShowEmojiPicker(false)
        }
export default MessageReactions}
export default MessageReactions />
      )}
export default MessageReactions
      {message.reactions?.map((reaction, index) => (
        <span key={index}
export default MessageReactions className="reaction">
          {reaction.emoji}
export default MessageReactions
        </span>
      ))}
export default MessageReactions
    </div>
  )
}
export default MessageReactions

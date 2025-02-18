import React, { useState, useRef }
export default ChatInput from 'react'

const ChatInput = ({ newMessage, onMessageChange, onSubmit, fileInputRef }
export default ChatInput) => {
  return (
    <div className="chat-input">
      <form onSubmit={onSubmit}
export default ChatInput>
        <input
          type="text"
          value={newMessage}
export default ChatInput
          onChange={(e) => onMessageChange(e.target.value)}
export default ChatInput
          placeholder="Escribe un mensaje..."
        />
        <input
          type="file"
          ref={fileInputRef}
export default ChatInput
          style={{ display: 'none' }
export default ChatInput}
export default ChatInput
          onChange={(e) => onFileChange(e.target.files[0])}
export default ChatInput
        />
        <button type="button" onClick={() => fileInputRef.current.click()}
export default ChatInput>
          <i className="ri-attachment-2"></i>
        </button>
        <button type="submit">
          <i className="ri-send-plane-fill"></i>
        </button>
      </form>
    </div>
  )
}
export default ChatInput

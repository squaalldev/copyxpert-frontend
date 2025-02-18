import React, { useState, useRef } from 'react'

export function ChatInput({ newMessage, onMessageChange, onSubmit, fileInputRef }) {
  return (
    <div className="chat-input">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => onFileChange(e.target.files[0])}
        />
        <button type="button" onClick={() => fileInputRef.current.click()}>
          <i className="ri-attachment-2"></i>
        </button>
        <button type="submit">
          <i className="ri-send-plane-fill"></i>
        </button>
      </form>
    </div>
  )
}

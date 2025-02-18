import React, { useState, useRef } from 'react'
import ChatHeader from './components/ChatHeader'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'
import useMessages from './hooks/useMessages'
import { aiService } from './services/ai'

function App() {
  const { messages, addMessage } = useMessages()
  const [newMessage, setNewMessage] = useState('')
  const fileInputRef = useRef(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return
    
    try {
      const userMessage = {
        content: newMessage,
        isAI: false,
        username: "You",
        created_at: new Date().toISOString()
      }
      
      addMessage(userMessage)
      setNewMessage('')
      
      const response = await aiService.generateResponse(newMessage)
      
      const aiMessage = {
        content: response,
        isAI: true,
        username: "CopyXpert",
        created_at: new Date().toISOString()
      }
      
      addMessage(aiMessage)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  
  return (
    <div className="app">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput 
        newMessage={newMessage}
        onMessageChange={setNewMessage}
        onSubmit={handleSubmit}
        fileInputRef={fileInputRef}
      />
    </div>
  )
}

export default App

import React from 'react'
import { MessageReactions }
export default Message from './MessageReactions'

const Message = ({ message }
export default Message) => {
  return (
    <div className={`message ${message.isAI ? 'ai' : 'user'}
export default Message`}
export default Message>
      <div className="message-content">
        <div className="message-text">{message.content}
export default Message</div>
        <MessageReactions message={message}
export default Message />
      </div>
      <div className="message-info">
        <span className="message-username">{message.username}
export default Message</span>
        <span className="message-time">
          {new Date(message.created_at).toLocaleTimeString()}
export default Message
        </span>
      </div>
    </div>
  )
}
export default Message

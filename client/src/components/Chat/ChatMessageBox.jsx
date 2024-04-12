import React from 'react'

const ChatMessageBox = ({messages}) => {
    return (
      <div className="h-[60vh] overflow-auto">
       { messages.map(({id, author, content}) => {
          return (
            <div className={`text-[15px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6`} key={id}>
              <div className="inline-flex items-baseline text-green">
                {author.username}
              </div>
              <span className="ml-3 break-words text-base-text-color">{content}</span>
            </div>
          );
       })}
      </div>
    )
  }
export default ChatMessageBox

  
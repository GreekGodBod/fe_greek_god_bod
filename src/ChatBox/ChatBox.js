import React from 'react';
import consumer from '../cable.js';
import { useEffect, useState } from 'react'

const ChatBox = (props) => {
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    consumer.subscriptions.create({
      channel: 'ChatChannel',
      username: props.username,
    }, {
      connected: () => console.log('connected'),
      disconnected: () => console.log('disconnected'),
      received: data => console.log(data),
  })
  }, [])

  useEffect(() => {
    consumer.disconnect()
    console.log('hello')
  }, [])

  const handleSubmit = (e) => {
  e.preventDefault()
  const chat = {
    username: props.username,
    content: content
  }
  fetch('http://localhost:3000/messages', {
    method: 'POST',
    body: JSON.stringify(chat)
  })
  console.log(chat)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name='chat' value={content} onChange={(e) => setContent(e.target.value)} type='text' />
      <button>Submit</button>
    </form>
  )
}

export default ChatBox

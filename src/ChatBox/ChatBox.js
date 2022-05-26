import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
// import { createConsumer } from '@rails/actioncable'
import * as ActionCable from '@rails/actioncable'
import './ChatBox.css'

ActionCable.logger.enabled = true
const { createConsumer } = ActionCable

const ChatBox = (props) => {
  // const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [messages, setMessages] = useState([])
  const { id } = useParams()
  let cable = useRef()

  useEffect(() => {
    props.fetchChat().then((data) => setMessages([...messages, data]))
  }, [])
  
  console.log(messages)

  let user;
  if(props.users[0]){
    user = props.users.find(user => user.id == id)
  }


  useEffect(() => {
    const URL = 'wss://be-greek-god-bod.herokuapp.com/cable'
    // const URL = 'ws://localhost:5000/cable'
    if (!cable.current) {
      cable.current = createConsumer(URL)
    }

    const paramsToSend = {
      channel: 'SocialChannel',
      name: user.name
    }
  
    const handlers = {
      received(data) {
        console.log("data",data)
        setMessages([...messages[0], data])
      },

      connected() {
        console.log('connected')
      },

      disconnected() {
        console.log('disconnected')
        cable.current = null
      }
    }

    const subscription = cable.current.subscriptions.create(paramsToSend, handlers)

    return function cleanup() {
      console.log('unsubbing from', user.name)
      subscription.unsubscribe()
      cable.current = null
    }
  }, [id, messages, user.id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: user.name,
      content: content
    }
    fetch('https://be-greek-god-bod.herokuapp.com/api/v1/social', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    console.log(JSON.stringify(data))
  }

  if (messages[0]) {
    let chatConvo = messages[0].map((message) => {
      return (
        <div
          className={
            //conditional rendering for styling depending on who is signed in below
            message.name === user.name
              ? 'chat-message-main-user'
              : 'chat-message'
          }
          key={message.id}
        >
          <p>
            <b>{message.name}:</b> {message.content}
          </p>
        </div>
      )
    })

    return (
      <section className='chat-page'>
        <div className='chat-container'>{chatConvo}</div>
        <div className='chat-input-container'>
          <form className='chat-form' onSubmit={(e) => handleSubmit(e)}>
            <input
              name='chat'
              value={content}
              className='chat-input-field'
              onChange={(e) => setContent(e.target.value)}
              type='text'
            />
            <button className='chat-submit-button'>Submit</button>
          </form>
        </div>
      </section>
    )
  } else {
    return <h1 className='loading'>Loading...</h1>
  }
}

export default ChatBox

import React from 'react'
// import consumer from '../cable.js';
import { useEffect, useState, useRef } from 'react'
// import { createConsumer } from '@rails/actioncable'
import * as ActionCable from '@rails/actioncable'
import './ChatBox.css'

ActionCable.logger.enabled = true
const { createConsumer } = ActionCable

const ChatBox = (props) => {
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [messages, setMessages] = useState([])
  let cable = useRef()

  useEffect(() => {
    props.fetchChat().then((data) => setMessages([...messages, data]))
  }, [])
  // }, [params.id, loggedInUser.id])
  console.log(messages)
  useEffect(() => {
    // const URL = 'wss://be-greek-god-bod.herokuapp.com/cable'
    const URL = 'ws://localhost:5000/cable'
    if (!cable.current) {
      cable.current = createConsumer(URL)
    }

    const paramsToSend = {
      channel: 'SocialChannel',
      username: props.username
    }

    const handlers = {
      received(data) {
        setMessages([...messages, data])
      },

      connected() {
        console.log('connected')
      },

      disconnected() {
        console.log('disconnected')
        cable.current = null
      }
    }

    const subscription = cable.current.subscriptions.create(
      paramsToSend,
      handlers
    )

    return function cleanup() {
      console.log('unsubbing from', props.username)
      subscription.unsubscribe()
      cable.current = null
    }
  }, [])

  // useEffect(() => {
  //   consumer.disconnect()
  //   console.log('hello')
  // }, [props.username, messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: props.username,
      content: content
    }
    fetch('https://be-greek-god-bod.herokuapp.com//api/v1/social', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    console.log(data)
  }

  if (messages[0]) {
    let chatConvo = messages[0].map((message) => {
      return (
        <div
          className={
            //conditional rendering for styling depending on who is signed in below
            message.name === props.username
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
    return <h1>Loading</h1>
  }
}

export default ChatBox

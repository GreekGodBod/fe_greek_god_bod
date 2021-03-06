import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
// import { createConsumer } from '@rails/actioncable'
import * as ActionCable from '@rails/actioncable'
import './ChatBox.css'

ActionCable.logger.enabled = true
const { createConsumer } = ActionCable

const ChatBox = (props) => {
  const [content, setContent] = useState('')
  const [recieved, setRecieved] = useState(0)
  const { id } = useParams()
  let cable = useRef()
  const scroll = useRef()


  const fetchChat = async () => {
    let data;
    const response = await fetch('https://be-greek-god-bod.herokuapp.com//api/v1/social')
      data = await response.json()
      props.setMessages(data)
  }

  useEffect(() => {
    fetchChat()
  }, [recieved])

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
        props.setMessages([...props.messages, data])
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
  }, [props.messages])

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
    setContent('')
    scroll.current.scrollIntoView({behavior: "smooth"})
  }
  console.log('2',props.messages)

  if (props.messages) {
    let chatConvo = props.messages.map((message) => {
      return (
        <div
          className={
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
        <div className='chat-container'>
          {chatConvo}
          <div ref={scroll}></div>
          </div>
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

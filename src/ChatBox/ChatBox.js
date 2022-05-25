import React from 'react';
// import consumer from '../cable.js';
import { useEffect, useState, useRef } from 'react'
import { createConsumer } from '@rails/actioncable';

const ChatBox = (props) => {
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [messages, setMessages] = useState([])
  let cable = useRef()

  useEffect(() => {
    props.fetchChat()
    .then(data => setMessages([...messages, data]))
  }, [])
  // }, [params.id, loggedInUser.id])
console.log(messages)
  useEffect(() => {
    const URL = 'wss://be-greek-god-bod.herokuapp.com/cable';
    if(!cable.current){
      cable.current = createConsumer(URL);
    }
    

    const paramsToSend ={
      channel: 'ChatChannel',
      username: props.username
    }

    const handlers = {
      received(data) {
        setMessages([...messages, data])
      },

      connected() {
        console.log("connected")
      },

      disconnected() {
        console.log("disconnected")
        cable.current = null
      }
    }

    const subscription = cable.current.subscriptions.create(paramsToSend, handlers)

    return function cleanup() {
      console.log("unsubbing from", props.username)
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

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name='chat' value={content} onChange={(e) => setContent(e.target.value)} type='text' />
      <button>Submit</button>
    </form>
  )
}

export default ChatBox

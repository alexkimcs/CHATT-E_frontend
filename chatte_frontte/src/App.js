import './App.css';
import React, {useState ,useEffect, Fragment} from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Header from './components/Header';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import Landing from './components/Landing'
import Chat from './components/Chat'
import {Route} from 'react-router-dom';

let socket = io('https://chatte-deploy.herokuapp.com/);

function App() {

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
         setMessages([...messages, message])
     })
  },[messages])
  const [mongoMessages, setMongoMessages] = useState([]);
  
  useEffect(() => {
    axios.get('https://chatte-deploy.herokuapp.com/api/messages').then(response => {
      // gets the initial data
      setMongoMessages(response.data)
    })
  },[messages]);
  
  
  function submitHandler(event) {
    event.preventDefault();
  
    socket.emit('chatMessage', event.target.firstChild.value);
  
    axios.post('https://chatte-deploy.herokuapp.com/api/messages', {
      name: 'User',
      message: event.target.firstChild.value
    })
    .then(res => console.log(res.data))
    .then(() => event.target.firstChild.value = '')
    .catch(error => console.log(error))
  
    }
  
    const sendMessage = (event) => {
      event.preventDefault(); 
      
      if(message) {
        socket.emit('chatMessage', message);
      }
    }
  return (
    <div>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={Signin}/> 
      <Route exact path="/chat" >
        <Chat 
          message={message}
          messages={messages} 
          submitHandler={submitHandler} 
          mongoMessages={mongoMessages} 
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </Route>
      <Route exact path="/" component={Landing}/>


    </div>

  );
}

export default App;

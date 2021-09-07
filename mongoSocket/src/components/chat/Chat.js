
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import queryString from 'query-string';
import io from "socket.io-client";

import './chat.css';


let socket;

function Chat() {

    const location = useLocation();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:4000';
    

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);

        console.log(name)
    
        setRoom(room);
        setName(name);

        
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

      }, [ENDPOINT, location.search]);

      useEffect(() => {
        socket.on('message', (message) => {
          setMessages([...messages, message])
        })
      }, [messages])

      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }

      console.log(message, messages)

    return (
      <div className="outerContainer">
        <div className="container">
            <input 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
            />
        </div>
      </div>
    );
}

export default Chat;
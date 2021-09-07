// import logo from './logo.svg';
import React from 'react';
import Chat from './components/chat/Chat';
import Join from './components/join/Join';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>

        <Route path='/' exact >
          <Join/>
        </Route>

        <Route path='/chat'>
          <Chat/>
        </Route>

      </Router>
    </div>
  );
}

export default App;

import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import Landing from './components/Landing'
import Chat from './components/Chat'
import {Route} from 'react-router-dom';

function App() {
    const test = ["hi", "oh hi der","this is a test ","this is a test ","this is a test ","this is a test ","this is a test ","this is a test ","this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test"]
  return (
    <div>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={Signin}/> 
      <Route exact path="/chat" render = {(props)=><Chat test={test}/>} />
      <Route exact path="/" component={Landing}/>


    </div>

  );
}

export default App;

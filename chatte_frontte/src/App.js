import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import Landing from './components/Landing'
import Chat from './components/Chat'
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/signin" component={Signin}/> 
      <Route exact path="/chat" render = {(props)=><Chat test={["test","test2"]}/>} />
      <Route exact path="/" component={Landing}/>


    </div>

  );
}

export default App;

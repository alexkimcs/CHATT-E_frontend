import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Signin from './components/Signin'
import SignUp from './components/SignUp';
import Snapshots from './components/Snapshots';
import Landing from './components/Landing'
import Chat from './components/Chat'
import {Route, Router, Switch} from 'react-router-dom';

const StyledDescription = styled.div`
    width: 50%;
    margin-top: 2em;
    background-color: rgba(230,230,230,.75);
    padding: 1em;
    border-radius: 1.5em;

    p {
      font-size: 1.25em;
      text-align: justify;
    }
`;

const StyledButtons = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;

    button {
      width: 8em;
      height: 3em;
      font-size: 1.5em;
      border-radius: 2em;
      border: none;
    }
`;

const StyledMain = styled.main`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

function App() {
  return (
    // <Chat test={["noice"]}/>
    <Landing/>
  );
}

export default App;

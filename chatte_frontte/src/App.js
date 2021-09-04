import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Snapshots from './components/Snapshots';
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
    <div className="App">
      {/* <Header /> 
      <StyledMain>
        <StyledDescription>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt 
            t labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.</p>
        </StyledDescription>
        <Snapshots/>

        <StyledButtons>

          <button>Sign Up</button>
          <button>Sign In</button>
        </StyledButtons>
      </StyledMain> */}
      <SignUp />
    </div> 
  );
}

export default App;

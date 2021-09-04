import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

const StyledDescription = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 2em;
    background-color: rgba(230,230,230,.75);
    padding: 1em;
    border-radius: 1.5em;

    p {
      font-size: 1.25em;
      text-align: justify;
    }
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StyledDescription>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt 
          t labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.</p>
      </StyledDescription>
    </div> 
  );
}

export default App;

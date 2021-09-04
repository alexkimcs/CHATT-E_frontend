import styled from 'styled-components';
import './App.css';
import Header from './components/Header';

const StyledDescription = styled.div`
    width: 100%;
    height: 100%;
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
          nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse
          um dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.</p>
      </StyledDescription>
    </div> 
  );
}

export default App;

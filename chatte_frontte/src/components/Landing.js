import styled from 'styled-components';
import Header from './Header';

import Snapshots from './Snapshots';

import Chat from './Chat'
import {Link} from 'react-router-dom';
const StyledDescription = styled.div`
    width: 50%;
    max-height: 220px;
    margin-top: 2em;
    background-color: rgba(230,230,230,.75);
    padding: 1em;
    border-radius: 1.5em;

    p {
        font-size: 1.25em;
        text-align: center;

    }
`;

const StyledButtons = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;

    button {
        background-color: rgb(192,192,192);
        min-width: 5.5em;
        height: 2.5em;
        font-size: 1.1em;
        border-radius: 2em;
        border-style: solid;
        border-color: rgb(192,192,192);


        :hover{
            border-color: white;
        }

        :active{
            background-color: #5282A1;
            color: white;
        }
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
      
      <Header /> 
      <StyledMain>
        <StyledDescription>
          <p>Chat with your friends in real time.</p>
        </StyledDescription>
        <Snapshots/>

        <StyledButtons>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
         
            <Link to="/signin">
                <button>Sign In</button>
            </Link>
         
        </StyledButtons>
      </StyledMain> 

    </div> 
  );
}

export default App;
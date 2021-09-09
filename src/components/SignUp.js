import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Fragment } from 'react/cjs/react.production.min';

const StyledHeader = styled.header`
    width: 100%;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6085A6; 
    border-radius: 0 0 4em 4em;
    /* position: absolute; */
    box-shadow: 0 0 2em -10px rgba(230,230,230,.75);
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div:nth-of-type(2n) {
        border-radius: 2em;
    }
`;

const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #012340;
    padding: 1.5em;
    border-radius: 5em;
    margin: 1em;
    width: 60vw;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        label {
            font-size: 1.5em;
            color: white;
            margin-top: 1em;
        }

        label:first-child {
            margin-top: 0;
        }
    }

    form input {
        margin-top: 1em;
        border: none;
        width: 40vw;
        height: 2em;
        border-radius: 2em;
    }

    form input:first-child {
        margin-top: 0;
    }

`;

const StyledCardContainer = styled.div`
    width: 80vw;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #6085A6;
    border-radius: 3em;
    padding: 1em;
`;

const StyledButtonContainer = styled.div`
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

function SignUp(props) {
    return (
        <Fragment>
        {/* <StyledHeader /> */}
            <Header />
            <StyledContainer>
                <StyledCardContainer>
                    <StyledCard>
                        <form>
                            <label>Username:</label>
                            <input></input>
                        </form>
                    </StyledCard>
                    
                    <StyledCard>
                        <form>
                            <label>Password:</label>
                            <input></input>
                            <label>Confirm Password:</label>
                            <input></input>
                        </form>
                    </StyledCard>

                    <StyledCard>
                        <form>
                            <input></input>
                            <input></input>
                        </form>
                    </StyledCard>

                    <StyledCard>
                        <form>
                            <input></input>
                            <input></input>
                        </form>
                    </StyledCard>

                    <StyledButtonContainer>
                        <button>Cancel</button>
                        <button>Save</button>
                    </StyledButtonContainer>
                </StyledCardContainer>
            </StyledContainer>
        </Fragment>
    );
}

export default SignUp;
import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledContactsContainer = styled.div`
    width: 48%;
    min-width: 200px;
    height: 700px;
    background-color: #6085A6;
    display: inline-block;
    border-radius: 0px 25px 25px 0px;
`

const HeaderContainer = styled.div`

height: 60px;
    background-color: rgba(230,230,230,.75);
    border-radius: 0 2em 2em 0;
    padding: 0.5em;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 92%;
    h1{
        font-size: 2.5em;
        margin: 0;
        color: black;
    }
    
    display: flex;
    flex-direction: row;
    align-items: left;
    
`

const StyledContact = styled.div`
    margin-right: auto;
    max-width: 400px;
    min-width: 170px;
    height: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


`

const StyledSmallProfile = styled.div`
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(230,230,230,.75);

    margin-top: 7.5px;
    @media screen and (max-width: 900px) {

        display: none;

      }
`

const StyledUsername = styled.div`
    width: 200px;
    height: 40px;
    border-radius: 30px;

    background-color: rgba(230,230,230,.75);
    padding-left: 15px;
    margin-top: 7.5px;

    display: inline-block;

`

const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 7.5px;



    

    button {
        background-color: #012340;
        width: 90px;
        height: 40px;
        font-size: 17px;
        color: white;
        border-radius: 0.8em;
        border-style: solid;
        border-color: #012340;

        :hover{
            border-color: white;
        }
    
        :active{
            background-color: #5282A1;
        }
    }
`;




const StyledInfoContainer = styled.div`
    width: 48%;
    height: 700px;
    background-color: #6085A6;
    display: inline-block;
    border-radius: 25px 0px 0px 25px;
`

const StyledProfile = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(230,230,230,.75);

    margin-left: auto;
    margin-right: auto;
    
`

const StyledUserContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 90%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: end;

    @media screen and (max-width: 900px) {

        grid-template-columns: repeat(1, 1fr);

      }

`

const StyledInfoDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    height: 40px;
    border-radius: 30px;

    background-color: rgba(230,230,230,.75);
    padding-left: 15px;
    margin-top: 7.5px;

    display: inline-block;

`

function Contacts() {
    return (
        <StyledContainer>
            <StyledContactsContainer>

                <HeaderContainer>
                    <Logo />
                    <h1 style={{marginLeft: "10%"}}>Contacts</h1>
                </HeaderContainer>

                <StyledContact>
                    <StyledSmallProfile> </StyledSmallProfile>

                    <StyledUsername> </StyledUsername>

                    <StyledButtons> 
                        <button>
                            Select
                        </button>
                        
                    </StyledButtons>



                </StyledContact>

                <StyledContact>
                    <StyledSmallProfile> </StyledSmallProfile>

                    <StyledUsername> </StyledUsername>

                    <StyledButtons> 
                        <button>
                            Select
                        </button>
                        
                    </StyledButtons>


                    
                </StyledContact>

                <StyledContact>
                    <StyledSmallProfile> </StyledSmallProfile>

                    <StyledUsername> </StyledUsername>

                    <StyledButtons> 
                        <button>
                            Select
                        </button>
                        
                    </StyledButtons>



                    
                </StyledContact>

            </StyledContactsContainer>

            <StyledInfoContainer>

                <StyledProfile>

                </StyledProfile>


                <StyledUserContainer>
                    <StyledInfoDiv> </StyledInfoDiv>
                    <StyledInfoDiv> </StyledInfoDiv>

                    <StyledInfoDiv> </StyledInfoDiv>
                    <StyledInfoDiv> </StyledInfoDiv>

                    <StyledButtons> 
                        <button>
                            Add
                        </button>
                    </StyledButtons>

                    <StyledButtons> 
                        <button>
                            Remove
                        </button>
                    </StyledButtons>


                </StyledUserContainer>


            </StyledInfoContainer>

        </StyledContainer>
    )
}

export default Contacts

import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledContactsContainer = styled.div`
    width: 48%;
    height: 700px;
    background-color: #6085A6;
    display: inline-block;
    border-radius: 0px 25px 25px 0px;
`

const HeaderContainer = styled.div`
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
    
    
`

const StyledContact = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    height: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


`

const StyledSmallProfile = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 32.5px;
    background-color: rgba(230,230,230,.75);

`

const StyledUsername = styled.div`
    width: 250px;
    height: 50px;
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
        width: 6em;
        height: 2.5em;
        font-size: 1.2em;
        color: white;
        border-radius: 0.8em;
        border: none;
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

`

const StyledInfoDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 50px;
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
                    <h1>Contacts</h1>
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

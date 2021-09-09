import React, {useState ,useEffect} from 'react'
import styled from 'styled-components'
import ScrollToBottom from'react-scroll-to-bottom'

import Message from './Message'

import Logo from './Logo'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledChatRooms = styled.div`
    width: 25%;
    min-width: 200px;
    height: 700px;
    background-color: #6085A6;
    display: inline-block;
    border-radius: 0px 25px 25px 0px;

    @media screen and (max-width: 650px) {

        border-radius: 0px;

      }
`

const StyledChat = styled.div`
    width: 70%;
    height: 700px;
    background-color: #6085A6;
    border-radius: 25px 0px 0px 25px;

    @media screen and (max-width: 650px) {

        border-radius: 0px;

      }
`

const StyledChatContainer = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledChatRoom = styled.button`
    width: 65%;
    height: 80%;
    border-radius: 0px 30px 30px 0px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    font-size: 15px;

`

const StyledSelect = styled.button`
    width: 80px;
    height: 80%;
    border-radius: 30px;
    border-style: solid;
    border-color: #012340;
    background-color: #012340;
    margin-right: 15px;
    font-size: 15px;
    color: white;

    :hover{
        border-color: white;
    }

    :active{
        background-color: #5282A1;
    }
`

const StyledTextContainer = styled.form`
    margin-left: auto;
    height: 50px;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`


const StyledInput = styled.div`
    width: 85%;

    input{
        width: 95%;
        height: 80%;
        border-radius: 10px;
        border-style: none;
        background-color: rgba(230,230,230,.75);
        padding-left: 15px;
        display: inline-block;
        font-size: 14px;
        :focus{
            outline: none;
        }
    }


    
`

const StyledMessagesContainer = styled.div`
    margin-left: auto;
    height: 640px;
    width: 95%;
    flex: auto;


    button:nth-child(odd) {
        background-color: antiquewhite;
        margin-left: auto;
        margin-right: 10%;
    }
`

const StyledSend = styled.button`
    width: 80px;
    height: 85%;
    border-radius: 10px;
    border-style: solid;
    border-color: #012340;
    background-color: #012340;
    margin-right: 10px;
    font-size: 15px;
    color: white;

    display: inline-block;


    :hover{
        border-color: white;
    }

    :active{
        background-color: #5282A1;
    }
`

const HeaderContainer = styled.div`
    background-color: rgba(230,230,230,.75);
    border-radius: 0 2em 2em 0;
    padding: 0.5em;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 92%;
    height:60px;
    h1{
        font-size: 2.5em;
        margin: 0;
        color: black;
    }
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;




function Chat(props) {
    const test = props.test;


    return (
        <StyledContainer>
            {/* sidebar with chats */}
            <StyledChatRooms>
                <HeaderContainer>
                    <Logo />
                    <h1>Chats</h1>
                </HeaderContainer>

                {/* The following is one chat */}


                <StyledChatContainer>
                    <StyledChatRoom>
                        Chat room 1
                    </StyledChatRoom>

                    <StyledSelect>

                        Select
                    </StyledSelect>

                </StyledChatContainer>



                <StyledChatContainer>
                    <StyledChatRoom>
                        Chat room 2
                    </StyledChatRoom>

                    <StyledSelect>

                        Select
                    </StyledSelect>

                </StyledChatContainer>








            </StyledChatRooms>

            {/* Main chat selected, with messages */}
            
            <StyledChat>
                <ScrollToBottom>

                    <StyledMessagesContainer>

                        {test.map((msg)=><Message test={msg}/>)}

                        
                    </StyledMessagesContainer>
                

                        
                        
                    
                </ScrollToBottom>
                <StyledTextContainer id='messageForm' action='' onSubmit={props.submitHandler}>
                
                <StyledInput >
                    <input placeholder="Message here" type='text' name='message' autoComplete="off"/>
                </StyledInput>
                <StyledSend>
                    Send
                </StyledSend>
            
        </StyledTextContainer>

            </StyledChat>
        </StyledContainer>
    )
}

export default Chat
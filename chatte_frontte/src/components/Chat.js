import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`




const StyledChatRooms = styled.div`
    width: 25%;
    height: 700px;
    background-color: #6085A6;

    display: inline-block;

    
    border-radius: 0px 25px 25px 0px;
`

const StyledChat = styled.div`
    width: 70%;
    height: 700px;
    background-color: #6085A6;
    border-radius: 25px 0px 0px 25px;


`





const StyledChatContainer = styled.div`
    height: 60px;
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
    border-style: none;
    background-color: #012340;

    margin-right: 15px;

    font-size: 15px;
    color: white;

`

const StyledTextContainer = styled.div`
    margin-left: auto;

    height: 60px;
    width: 95%;
    

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const StyledInput = styled.input`
    width: 85%;
    height: 80%;
    border-radius: 20px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    padding-left: 15px;

    display: block;
    font-size: 18px;
    :focus{
        outline: none;
    }
`

const StyledMessagesContainer = styled.div`
    margin-left: auto;
    height: 640px;
    width: 95%;

    display: block;
`

const StyledSend = styled.button`
    width: 100px;
    height: 80%;
    border-radius: 30px;
    border-style: none;
    background-color: #012340;
    margin-right: 10px;


    font-size: 15px;
    color: white;

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
    
    
`;


function Chat() {
    return (
        <StyledContainer>
            {/* sidebar with chats */}
            <StyledChatRooms>
                <HeaderContainer>
                    <h1>chats</h1>
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
                <StyledMessagesContainer>
                </StyledMessagesContainer>
                <StyledTextContainer>
                    <StyledInput></StyledInput>

                    <StyledSend>

                        Send
                    </StyledSend>

                </StyledTextContainer>

            </StyledChat>

        </StyledContainer>
    )
}

export default Chat

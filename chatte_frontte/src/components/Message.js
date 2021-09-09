import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.button`
    min-width: 70px;
    max-width: 30%;
    max-height: 400px;
    border-style: none;
    border-radius: 1em;
    background-color: rgba(230,230,230,.85);
    text-align: left;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;

    padding-right: 10px;
    padding-left: 12px;
    padding-top: 7px;
    padding-bottom: 7px;

    word-wrap: break-word;
    white-space: normal
`;

function Message(props) {
    return (
        <StyledMessage>
            {props.test}
        </StyledMessage>
    )
}

export default Message;

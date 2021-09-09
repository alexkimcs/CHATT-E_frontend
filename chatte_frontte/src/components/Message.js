import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

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
    white-space: normal;
`;

function Message(props) {

    function handleClick(event) {
        // event.preventDefault();
        window.location.reload();
        axios.delete(`http://localhost:4001/api/messages/${props.id}`, {})
        .then((res) => console.log(res.data));
    }

    return (
        <StyledMessage onClick={handleClick} id={props.id}>
            {props.message}
        </StyledMessage>
    )
}

export default Message;

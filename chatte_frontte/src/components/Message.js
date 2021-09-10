import React, { useState } from 'react'
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

    const [edit, setEdit] = useState(false);
    const [editedMessage, setEditedMessage] = useState(props.message);

    function handleClick(event) {

        if (event.shiftKey) {
            axios.delete(`http://localhost:4001/api/messages/${props.id}`, {})
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            });
        } else {
            setEdit(!edit);
        }

        // event.preventDefault();
        
    }
    const handleEditChange = (event) => {
        setEditedMessage(event.target.value);
    }

    const handleEdit = () => {
        axios.put(`http://localhost:4001/api/messages/${props.id}`, {message: editedMessage})
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            });
    }

    
    
    if (!edit) {
        return (
        <StyledMessage onClick={handleClick} id={props.id}>
            {props.message}
        </StyledMessage>
        )
    } else {
        return (
        <StyledMessage onClick={handleClick} id={props.id}>
            <input type='text' value={editedMessage} onChange={handleEditChange} />
            <button type='button' onClick={handleEdit} >edit</button>
        </StyledMessage>
        )
    }
    
}

export default Message;

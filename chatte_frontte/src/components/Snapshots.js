import React from 'react'
import styled from 'styled-components';


const Styledcontainer = styled.div`
    margin-top: 30px; 
    width: 100%;
    min-height: 240px;
    background-color: #6085A6; 
    display: flex;
    justify-content: center;
`;

const Styledboxes = styled.div`
    min-width: 200px;
    min-height: 80%;
    background-color: rgba(230,230,230,.75);
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10%;
    margin-left: 10px;
    margin-right: 10px;
`;

function Snapshots() {
    return (
        <Styledcontainer>
            <Styledboxes>
            </Styledboxes>

            <Styledboxes>
            </Styledboxes>

            <Styledboxes>
            </Styledboxes>

            <Styledboxes>
            </Styledboxes>

            <Styledboxes>
            </Styledboxes>
        
        </Styledcontainer>
    )
} 

export default Snapshots;


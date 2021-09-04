import React from 'react';
import styled from 'styled-components';

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

const LogoContainer = styled.div`
    background-color: rgba(230,230,230,.75);
    border-radius: 2em;
    padding: 1em;

    h1{
        font-size: 3em;
        margin: 0;
        color: white;
    }
    
    
`;

function Header(props) {
    return (
        <StyledHeader>

            <LogoContainer>
                <h1>Chatt-E</h1>
            </LogoContainer>
            
        </StyledHeader>
    );
}

export default Header;
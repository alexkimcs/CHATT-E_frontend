import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6085A6;
    border-radius: 0 0 4em 4em;
    position: absolute;
`;

const LogoContainer = styled.div`
    h1{
        @import url("https://use.typekit.net/bxl4mvb.css");
        font-family: eldwin-script, sans-serif;
        font-weight: 700;
        font-style: normal;
    }
    
`;

function Header(props) {
    return (
        <StyledHeader>

            <LogoContainer>
                <h1>Chatt-e</h1>
            </LogoContainer>
            
        </StyledHeader>
    );
}

export default Header;
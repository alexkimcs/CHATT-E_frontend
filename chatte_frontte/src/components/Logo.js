import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    margin-right: 15px;

    width: 80px;
    height: 60px;
    background-color: #6085A6;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


    @media screen and (max-width: 850px) {

        display: none;

      }
`

const StyledRectangle = styled.div`
    
    margin-right: auto;
    margin-left: auto;

    border-radius: 25px;
    width: 75%;
    height: 15%;
    background-color: rgb(230,230,230);


`


function Logo() {
    return (
        <div>
            <StyledContainer>
                <StyledRectangle> </StyledRectangle>
                <StyledRectangle> </StyledRectangle>

                <StyledRectangle> </StyledRectangle>

            </StyledContainer>
        </div>
        
    )
}

export default Logo

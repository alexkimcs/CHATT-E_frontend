import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Styledheader = styled.div`

    width: 100%;
    height: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6085A6; 
    border-radius: 0 0 4em 4em;
    /* position: absolute; */
    box-shadow: 0 0 2em -10px rgba(230,230,230,.75);


`

const Styledlogo = styled.button`
    width: 300px;
    height: 70px;
    border-style: none;
    border-radius: 30px;
    background-color: rgba(230,230,230,.75);

    margin-left: auto;
    margin-right: auto;

    font-size: 35px;

`


const Styledcontainer = styled.div`
    width: 80%;
    height: 450px;
    background-color: #6085A6;
    padding-top: 50px;

    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 25px;

`

const StyledProfile = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(230,230,230,.75);

    margin-left: auto;
    margin-right: auto;
    
`

const Styledusername = styled.input`
    width: 250px;
    height: 30px;
    border-radius: 30px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    padding-left: 15px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    display: block;

    :focus{
        outline: none;
    }
`
const Styledpassword = styled.input`
    width: 250px;
    height: 30px;
    border-radius: 30px;
    border-style: none;
    background-color: rgba(230,230,230,.75);
    padding-left: 15px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: block; 

    :focus{
        outline: none;
    }
`


const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 2em;
    margin-right: auto;
    margin-left: auto;


    

    button {
        background-color: #012340;
        width: 80px;
        height: 40px;
        font-size: 17px;
        color: white;
        border-radius: 15px;
        border-style: solid;
        border-color: #012340;

        margin-right: 10px;
        margin-left: 10px;

        :hover{
            border-color: white;
        }
    
        :active{
            background-color: #5282A1;
        }
    }



`;



function Signin() {
    return (
        <body >
            <Styledheader>
                <Styledlogo>
                    Chat-E
                </Styledlogo>


            </Styledheader>


            <Styledcontainer>
                <StyledProfile>
                </StyledProfile>
                

                <Styledusername>

                </Styledusername>

                <Styledpassword>

                </Styledpassword>


                <StyledButtons>
                    <Link to="/chat">
                        <button>Log in</button>
                    </Link>
                        
                        <button>Sign up</button>
                </StyledButtons>
            </Styledcontainer>


        </body>
    )
}

export default Signin

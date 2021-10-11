import React, { Component } from 'react'
import styled from 'styled-components';


class MainSignUp extends Component {
    render() { 
        return <Container>
            <h1>Join<br />Wakulima Initiative</h1>
        </Container>;
    }
}
 
export default MainSignUp;


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

    h1{
        
        font-size: 55px;
        font-weight: 700;
        color: #343434;
        
        @media(max-width: 980px){
            display: none;
        }
    }

`


import React, { Component } from 'react'
import styled from 'styled-components';
import logo from '../../../../assets/Shamba-bay.png';
import InputField from './input';


class SideBar extends Component {
    render() { 
        return <Container>
            <Logo>
                <img src={logo} alt ="logo"></img>
                <h3>
                    Shamba<span>Bay</span>
                </h3>
            </Logo>
            <Form>
                
                <h3>
                    Sign Up
                </h3>
                <InputField placeholder = "First Names" />
                <InputField placeholder = "Last Name" />
                <InputField type= "email" placeholder= "Email" />
                <InputField type= "password" placeholder ="Password" />
                <InputField type= "password" placeholder = "Confirm Password" />
                <button>Sign Up</button>
            </Form>
            <div>
                <Terms>
                    By signing up to this site you are to<br/>
                    <span>Terms and Conditons</span>
                    
                </Terms>
                <h4>
                    Already have an account <span>Sign In</span>
                </h4>
            </div>
        </Container>;
    }
}
 
export default SideBar;
const Terms = styled.p`
    font-size: 9px;
    padding: 0 1rem;
    color: black;
    font-weight: 300px;
    text-align: center;

`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: #666666;
        margin-bottom: 1rem;
    }

    button{
        width: 65%;
        max-width: 350px;
        min-width: 250 px;
        height: 36px;
        border: none;
        margin: 0.4rem 0;
        box-shadow: 0px 14px 9px 15px rgba(0, 0, 0, 0.25);
        border-radius: 13px;
        background-color: green;
        color: #ffffff;
    }

`;
const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        height: 6rem;

    }
    h3{
        color: #343434;
        font-size: 22;
        text-align: center;
    }
    span{
        color: grey;
        font-weight: 300;
        font-size: 18;
    }
`

const Container = styled.div
`
    width: 350px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 2rem;

    @media(max-width: 900px){
        width: 100vw;
        position: absolute; 
        padding: 0;
    }
    h4{
        font-size: 13px;
        font-weight: 300;
        
        span{
            color: green;
        }
    }

`;
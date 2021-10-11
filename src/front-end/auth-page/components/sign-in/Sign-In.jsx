import bgImg from '../assets/Shamba-bg.png';
import styled from 'styled-components';
import SideBar from './sidebar';
import MainSignIn from './main';

const SignInScreen = () =>{
    return <Container>
        <Wrapper>
            <SideBar/>
            <MainSignIn/>
        </Wrapper>
    </Container>

}

export default SignInScreen;

const Container = styled.div`
    background: #ffffff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
const Wrapper = styled.div
`
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 2fr 6fr;
    width: 100%;
    height: 100%;

`;
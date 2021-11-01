//import bgImg from '../../../../assets/Shamba-bg.png';
//import styled from 'styled-components';
import SideBar from './sidebar';
import MainSignUp from '../sign-in/main';

const SignUpScreen = () =>{
    return <div className="bg-white absolute top-0 bottom-0 left-0 right-0">
        <div className="bg-cover bg-no-repeat bg-center bg- ">
            <SideBar/>
            <MainSignUp/>
        </div>
    </div>

}

export default SignUpScreen;

// const Container = styled.div`
//     background: #ffffff;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
// `;
// const Wrapper = styled.div
// `
//     background-image: url(${bgImg});
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     display: grid;
//     grid-template-columns: 2fr 6fr;
//     width: 100%;
//     height: 100%;

// `;
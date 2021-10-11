
import styled from 'styled-components';

const InputField = ({type, placeholder}) =>{
    return <Container>
            <StyledInput placeholder={placeholder && placeholder} 
            type ={type ? type : "text"}
            required
            autoComplete="off" />
            <Status />
        </Container>;
    
}
const StyledInput = styled.input`
    width: 95%;
    max-width: 350px;
    min-width: 250 px;
    height: 36px;
    border: none;
    margin: 0.2rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px 15px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    padding: 0 1rem;
    translation: all 0.2s ease-in;

    &hover{
        transform: translateY(-3px);
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Status = styled.div`
    height: 10px;
    width: 10px;
    background-color: #9d9d9d;
    border-radius: 14px;
    margin-left: 1 rem;

    ${StyledInput}: focus + &{
        background:#ffa689;
    };
    ${StyledInput}: invalid + &{
        background:#fe2f75;
    };
    ${StyledInput}: valid+ &{
        background:#70edb9;
    };

`;
 
export default InputField;
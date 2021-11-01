

const InputField = ({type, placeholder}) =>{
    return <div className="flex justify-center items-center">
            <input className="
            w-11/12 max-w-sm min-w-full h-9 border-none m-1 bg-gray-50 shadow-2xl rounded-2xl px-4 hover:-translate-y-1 " placeholder={placeholder && placeholder } 
            type ={type ? type : "text"}
            required
            autoComplete="off" />
            <div className="h-3 w-3 bg-gray-100 rounded-2xl mx-4"/>
        </div>;
    
}
// const StyledInput = styled.input`
//     width: 95%;
//     max-width: 350px;
//     min-width: 250 px;
//     height: 36px;
//     border: none;
//     margin: 0.2rem 0;
//     background-color: #f5f5f5;
//     box-shadow: 0px 14px 9px 15px rgba(0, 0, 0, 0.25);
//     border-radius: 13px;
//     padding: 0 1rem;
//     translation: all 0.2s ease-in;

//     &hover{
//         transform: translateY(-3px);
//     }
// `
// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
// const Status = styled.div`
//     height: 10px;
//     width: 10px;
//     background-color: #9d9d9d;
//     border-radius: 14px;
//     margin-left: 1 rem;

//     ${StyledInput}: focus + &{
//         background:#ffa689;
//     };
//     ${StyledInput}: invalid + &{
//         background:#fe2f75;
//     };
//     ${StyledInput}: valid+ &{
//         background:#70edb9;
//     };

// `;
 
export default InputField;
import React, {Component}from "react";
//import PosterImg from "../../assets/shambay.png";
import logo from "../../assets/Shamba Bay.png";
import InputBox from "./widgets/inputBox";
import "./auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: true,
        signUpForm: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        },
        signInForm: {
            email: "",
            password: ""
        }
     }
  }
  render() { 
    
    return (  
     
      <div className="login flex bg-gif-texture bg-cover bg-no-repeat h-screen w-screen">
       <div className={`login__welcome-container ${this.state.login ? 'login__welcome-container--active': 'login__welcome-container--inactive'} bg-green-100 z-2 w-1/4 absolute h-full bg-opacity-90`}>

       <div className="logo-wrapper flex flex-col items-center my-3 p-4">
            <img src={logo} alt="" className="logo w-20 h-20" />
            <h3 className="logo-title text-lg text-black font-bold">
              Sham
              <span className="word-decor text-lg text-green-500 font-normal">
                ba
              </span>
            </h3>
          </div>
          <div className="welcome-section flex flex-col items-center mt-20 w-full">
            <div className="welcome-head w-4/5">
              <h1 className="welcome-title text-xl font-bold ">Welcome back</h1>
              <h3 className="welcome-secondary-title text-base font-normal text-black">
                Missed you
              </h3>
              <p className="signin-option text-sm text-gray-800 mt-3">
                Already have an account? <br />
                Please Log in
              </p>
            </div>
            <button
             onClick={()=>{
               this.setState({
                 login: !this.state.login
               })
             }}
             className="welcome-button w-1/3 flex items-center justify-center text-xl rounded-3xl border-2 border-solid  border-green-500 mt-10 cursor-pointer  flex-row">
                    Login
            </button>
          </div>
       </div>
       <div className={`login-create-container ${this.state.login ? 'login-create-container--active' : 'login-create-container--inactive'}  z-2 w-3/4 absolute h-full left-1/4 items-center flex justify-center`}>
         <div className="card bg-green-100 w-1/3 h-auto my-5 rounded-2xl">
         <img
              src={logo}
              alt=""
              className="rounded-full p-4 w-20 h-20 items-center mx-auto"
            />

            <header className=" text-2xl font-extrabold py-4 px-4 text-center">
              Create Account
            </header>
            <div>
              <form className="text-gray-500 text-justify justify-center font-semibold mx-4 flex flex-col">
                <InputBox
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                  type="text"
                />
                <InputBox
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your Last name"
                  type="text"
                />
                <InputBox
                  label="User Name"
                  name="userName"
                  placeholder="Enter your user name"
                  type="text"
                />
                <InputBox
                  label="email"
                  name="firstName"
                  placeholder="Enter your email name"
                  type="email"
                />
                <InputBox
                  label="Password"
                  name="firstName"
                  placeholder="Enter your password"
                  type="password"
                />
                <InputBox
                  label="Confirm Password"
                  name="firstName"
                  placeholder="Confirm your password"
                  type="password"
                />
              </form>
            </div>
            <footer className="text-center py-3 px-8 text-gray-500">
              <button className="py-2 px-4 mt-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600">
                Sign Up
              </button>
            </footer>
         </div>
       </div>


       <div className={`login-login-container ${!this.state.login ? ' login-login-container--active':' login-login-container--inactive'} absolute flex flex-col justify-center items-center h-full z-2 w-3/4 `}>
         <div className="card bg-green-100 w-1/3 h-auto rounded-2xl my-5">
         <img
              src={logo}
              alt=""
              className="rounded-full p-4 w-20 h-20 items-center mx-auto"
            />

            <header className=" text-2xl font-extrabold py-4 px-4 text-center">
              Log into Account
            </header>
            <div>
              <form className="text-gray-500 text-justify justify-center font-semibold mx-4 flex flex-col">
               
               
                <InputBox
                  label="email"
                  name="email"
                  placeholder="Enter your email name"
                  type="email"
                />
                <InputBox
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
                
              </form>
            </div>
            <footer className="text-center py-3 px-8 text-gray-500">
              <button className="py-2 px-4 mt-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600">
                Sign In
              </button>
            </footer>
         </div>
       </div>

       <div className={`create-container ${!this.state.login ? 'create-container--active':'create-container--inactive'} w-1/4 left-3/4 absolute flex flex-col justify-center items-center h-full  bg-green-100`}>

       <div className="logo-wrapper flex flex-col items-center my-3 p-4">
            <img src={logo} alt="" className="logo w-20 h-20" />
            <h3 className="logo-title text-lg text-black font-bold">
              Sham
              <span className="word-decor text-lg text-green-500 font-normal">
                ba
              </span>
            </h3>
          </div>
          <div className="welcome-section flex flex-col items-center mt-20 w-full">
            <div className="welcome-head w-4/5">
              <h1 className="welcome-title text-xl font-bold ">Hey, Stranger!</h1>
              <h3 className="welcome-secondary-title text-base font-normal text-black">
                Welcome to the Family
              </h3>
              <p className="signin-option text-sm text-gray-800 mt-3">
                Don't have an account? <br />
                Please Sign Up
              </p>
            </div>
            <button 
            onClick={()=>{
              this.setState(
                {login: !this.state.login}
              )}
            }
            className="welcome-button w-1/3 flex items-center justify-center text-xl rounded-3xl border-2 border-solid  border-green-500 mt-10 cursor-pointer  flex-row">
                    Sign Up
            </button>
          </div>
       </div>
       
   

    </div>

    );
  }
  signUp() {
    this.setState({
        signUpForm: {
            name: "",
            password: "",
            email: ""
        }
    });
}

signIn() {
    this.setState({
        signInForm: {
            password: "",
            email: ""
        }
    });
}
}

 
export default Auth;
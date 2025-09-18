import { useNavigate } from "react-router-dom";
import InputComponent from "./InputComponet";
import {useState} from 'react';
import { Link } from "react-router-dom";
import './signin.css';
export default function SignIn(){
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [emailerror,setEmailError] = useState("");
    const [pwdError,setpwdError] = useState("");
  const[signup,setSignup] = useState(false)
    const getlocalstore=localStorage.getItem(email)
     const userdata=JSON.parse(getlocalstore)
     console.log("userdata",userdata)

    const navigate = useNavigate()

   function ValidateEmail(event){
      console.log("event.target",event.target);// it  triggers the inpt field which input is called.
      console.log("event.target.value",event.target.value);// it give that triggered input field value.
      setEmail(event.target.value)
    }

    function validatePassword(event){
        setPwd(event.target.value);
    }

    function validationEmail() {
        let regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === null || email === "") {
            setEmailError("Please enter your email");
            return false;
        }
        else if (!regExpEmail.test(email)) {
            setEmailError("please enter your Valid Email");
            return false;
        }
        else {
            setEmailError("");
            return true
        }

    }
    function validatationPwd() {
           const onlyDigits = /^\d+$/;
        if (pwd === "") {
            setpwdError("enter your password ");
            return false;
        }
        else if (!onlyDigits.test(pwd)) {
            setpwdError("Here Password contains Didits only*");
            return false;
        }
        else if (pwd.length < 4) {
            setpwdError("Password must be at least 8 characters");
            return false;
        }
        else {
            setpwdError("")
            return true
        }

    }
    function ValidSignIn(e){
       e.preventDefault()
       const isValidEmail=validationEmail()
       console.log("isValidEmail",isValidEmail)
       const isValidPwd=validatationPwd() 

         if(((isValidEmail&&isValidPwd)&& userdata&&email===userdata.Email)&&(pwd===userdata.password)){
          alert("SuccessFully SignIn..")
          navigate('/Dashboard')
          setSignup(false)
          }  else{
          alert('user not found')
          setSignup(true)
           }
        }
    
    return(
        <div id="divide">
            <form>
                <h1>SIGN IN</h1>
                <InputComponent inputType="email" inputId="email" inputValue={email} inputOnChange={ValidateEmail} inputLable="Email" emailError={emailerror}/>
                <span id="sp">{emailerror}</span>
                <InputComponent inputType="password" inputId="password" inputValue={pwd} inputOnChange={validatePassword} inputLable="Password" pwdError={pwdError} />
                 <span  id="sp">{pwdError}</span><br></br>
                <button id="signin-button" onClick={ValidSignIn}>SignIn</button><br></br><br></br>
                {
                    signup&&<p>user not found please ,<Link to="/SignUp">SignUp</Link></p>
                 }
            </form>

        </div>
    )
}
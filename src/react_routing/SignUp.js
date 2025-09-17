import {useState} from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "./InputComponet";
export default function SignUp(){
    const navigate = useNavigate()
    const [fName,setFname] = useState("");
    const [sName,setSName] = useState("");
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    // const [confirmPassword,setConfirmPwd] = useState("");
    const [fnerror,setFnameError] = useState("");
    const [snerror,setLnameError] = useState("");
    const [emailerror,setEmailError] = useState("");
    const [pwdError,setpwdError] = useState("");
    // const [cpwderror,setCpwdError] = useState("");

function firstName(e){
    setFname(e.target.value)
}
function secondName(e){
        setSName(e.target.value)

}
//  const navigate = useNavigate()
function ValidateEmail(event){
      console.log("event.target",event.target);// it  triggers the inpt field which input is called.
      console.log("event.target.value",event.target.value);// it give that triggered input field value.
      setEmail(event.target.value)
    }

 function validatePassword(event){
        setPwd(event.target.value);
    }
// function validateConfirmPassword(event){
//         setConfirmPwd(event.target.value);
//     }

function validationOfSignUpForm() {
  let isValid = true;

  const regName = /^[A-Za-z]+$/;
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onlyDigits = /^\d+$/;

  // First Name
  if (!fName || fName.trim() === "") {
    setFnameError("Please enter your first name");
    isValid = false;
  } else if (!regName.test(fName)) {
    setFnameError("Allow characters only");
    isValid = false;
  } else {
    setFnameError("");
  }

  // Last Name
  if (!sName || sName.trim() === "") {
    setLnameError("Please enter your last name");
    isValid = false;
  } else if (!regName.test(sName)) {
    setLnameError("Allow characters only");
    isValid = false;
  } else {
    setLnameError("");
  }

  // Email
  if (!email || email.trim() === "") {
    setEmailError("Please enter your email");
    isValid = false;
  } else if (!regEmail.test(email)) {
    setEmailError("Please enter a valid email");
    isValid = false;
  } else {
    setEmailError("");
  }

  // Password
  if (!pwd || pwd === "") {
    setpwdError("Enter your password");
    isValid = false;
  } else if (!onlyDigits.test(pwd)) {
    setpwdError("Password must contain digits only");
    isValid = false;
  } else if (pwd.length < 4) {
    setpwdError("Password must be at least 4 characters");
    isValid = false;
  } else {
    setpwdError("");
  }

//   // Confirm Password
//   if (!confirmPassword || confirmPassword === "") {
//     setCpwdError("Enter your confirm password");
//     isValid = false;
//   } else if (pwd !== confirmPassword) {
//     setCpwdError("Passwords do not match");
//     isValid = false;
//   } else {
//     setCpwdError("");
//   }

  return isValid; // returns true only if all fields are valid
}
function handleSubmit(){
    if(validationOfSignUpForm()){
         const local={
            firstname:fName,
            secondNamename:sName,
            Email:email,
            password:pwd,
            // confirmpwd:confirmPassword,
        }
    
        localStorage.setItem(email ,JSON.stringify(local)) ;
        alert(email);
     
        alert("successful Sign Up");
        navigate('/');
    }
    else{
        alert("Oops..! Check your credentials");
        return false;
    }
}


    return(
        <div>
            <form onSubmit={handleSubmit}>
               <h1>SignUp</h1>
               <InputComponent inputType="text" inputId="fname" inputValue={fName} inputOnChange={firstName} inputLable="First Name" fnerror={fnerror}/>
                <span>{fnerror}</span>
                <InputComponent inputType="text" inputId="SName" inputValue={sName} inputOnChange={secondName} inputLable="Second Name" snerror={snerror} />
                 <span>{snerror}</span>
                  <InputComponent inputType="email" inputId="email" inputValue={email} inputOnChange={ValidateEmail} inputLable="Email" emailError={emailerror}/>
                <span>{emailerror}</span>
                {/* <InputComponent inputType="password" inputId="confirmPassword" inputValue={confirmPassword} inputOnChange={validateConfirmPassword} inputLable="Confirm Password" cpwderror={cpwderror} />
                 <span>{cpwderror}</span><br></br> */}
                <InputComponent inputType="password" inputId="password" inputValue={pwd} inputOnChange={validatePassword} inputLable="Password" pwdError={pwdError} />
                 <span>{pwdError}</span><br></br>
                 <button>SignUp</button>
            </form>
        </div>
    )
}
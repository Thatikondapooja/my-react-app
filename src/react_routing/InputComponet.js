export default function InputComponent({inputType,inputId,inputValue,inputLable,inputOnChange,fnerror,snerror,cpwderror,emailError,pwdError,signup}){
    return(
        <div>
           <lable>{inputLable}<br></br>
            <input  type={inputType} id={inputId} value={inputValue} onChange={inputOnChange} fnameerror={fnerror} snameerror={snerror} cpwderror={cpwderror} emailerror={emailError} pwderror={pwdError} signup={signup}/>
            </lable>
        </div>
    )
}
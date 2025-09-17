export default function InputComponent({inputType,inputId,inputValue,inputLable,inputOnChange,fnerror,snerror,cpwderror,emailError,pwdError}){
    return(
        <div>
           <lable>{inputLable}<br></br>
            <input  type={inputType} id={inputId} value={inputValue} onChange={inputOnChange} fnerror={fnerror} snerror={snerror} cpwderror={cpwderror} emailerror={emailError} pwderror={pwdError}/>
            </lable>
        </div>
    )
}
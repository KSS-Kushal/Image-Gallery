import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Input = ({ type, name, placeholder, bgColor, font, color, border, borderColor, my, onChange, value, isRequired }) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div className={`${my?my:"my-2"} w-full relative`}>
      <input type={type==='password'?(isRevealPwd?'text':type):type} required={isRequired?true:false} onChange={onChange} value={value} name={name} placeholder={placeholder} className={`${bgColor?bgColor:"bg-white"} ${border?"border":''} ${borderColor?borderColor:'border-black'} rounded-md ${font?font:"font-heading"} text-sm ${color?color:"text-black/50"} px-3 py-2 w-full`} />
      {type === 'password' ?
        <div onClick={()=>{setIsRevealPwd(!isRevealPwd)}} className="cursor-pointer inline-block absolute top-3 right-4">
          {isRevealPwd?<AiOutlineEyeInvisible title='Hide password' />:<AiOutlineEye title='Show password' />}
        </div> : ""}
    </div>
  )
}

export default Input

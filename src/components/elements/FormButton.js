import React from 'react'

const FormButton = ({type, onClick, padding_x, padding_y, text, leftIcon, hover}) => {
  return (
    <div className=''>
      <button type={type} onClick={onClick} className={`bg-white border border-dark rounded-md drop-shadow-lg ${padding_x?padding_x:"px-8"} ${padding_y?padding_y:"py-2"} font-para text-sm text-dark flex ${hover}`}>
        {leftIcon?
        <img src={leftIcon} srcSet="" alt='' width={20} height={20} className={"mr-2"} />:""}
        {text}
      </button>
    </div>
  )
}

export default FormButton

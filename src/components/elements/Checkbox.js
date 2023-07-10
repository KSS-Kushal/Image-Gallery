import React from 'react'

const Checkbox = ({name, id, label}) => {
  return (
    <div className='flex'>
      <input type="checkbox" name={name} id={id} className="bg-[#686868]/60 cursor-pointer text-[#686868]/60" />
      <label htmlFor={id} className="font-para text-xs text-[#686868]/60 px-2 cursor-pointer">{label}</label>
    </div>
  )
}

export default Checkbox

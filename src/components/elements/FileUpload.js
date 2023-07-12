import React from 'react'

const FileUpload = ({name, id, onChange}) => {
  return (
    <div className="">
        <input type="file" name={name} id={id} onChange={onChange} required className='border-2 border-mid-dark rounded-md text-normal bg-light/20'/>
    </div>
  )
}

export default FileUpload
import React from 'react';
import { TbSearch } from 'react-icons/tb';

const SearchBar = ({ name, placeholder, bgColor, font, color, border, borderColor, my, onChange, value, isRequired }) => {
    return (
        <div className={`mx-3 w-36 relative`}>
            <input type="text" required={isRequired ? true : false} onChange={onChange} value={value} name={name} placeholder={placeholder} className={`${bgColor ? bgColor : "bg-white"} ${border ? "border" : ''} ${borderColor ? borderColor : 'border-black'} rounded-md ${font ? font : "font-heading"} text-sm ${color ? color : "text-mid-dark"} pl-10 pr-4 py-2 w-full`} />
            <div className="cursor-pointer inline-block absolute top-3 left-4">
                <TbSearch />
            </div>
        </div>
    )
}

export default SearchBar
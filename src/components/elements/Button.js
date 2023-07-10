import React from 'react'

const Button = ({text, arow, size, onClick}) => {
    return (
        <button className={`inline-flex items-center bg-mid-dark text-white border-0 focus:outline-none hover:bg-light hover:text-dark rounded text-base mt-4 md:mt-0 ${size?size:'py-2 px-10'}`} onClick={onClick}>{text}
            {arow?<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>:""}
        </button>
    )
}

export default Button
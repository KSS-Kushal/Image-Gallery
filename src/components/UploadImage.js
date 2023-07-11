import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const UploadImage = ({ isLoggedIn, setisLoggedIn }) => {
    return (
        <Fragment>
            {/* Nanbar  */}
            <Navbar title={"Image Gallery"} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            {/* Footer  */}
            <Footer title={"Image Gallery"} />
        </Fragment>
    )
}

export default UploadImage
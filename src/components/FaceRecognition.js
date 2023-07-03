import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FaceRecognition = () => {
  return (
    <Fragment>
        <Navbar title={"Image Gallery"} />
        <p className="text-center">FaceRecognition</p>
        {/* Footer  */}
        <Footer title={"Image Gallery"} />
    </Fragment>
  )
}

export default FaceRecognition
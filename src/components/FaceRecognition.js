import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FileUpload from './elements/FileUpload'
import Button from './elements/Button'

const FaceRecognition = () => {
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar title={"Image Gallery"} />

      {/* Face Recognition */}
      <section className="my-5 md:my-14">
        <h2 className="text-center text-xl md:text-2xl text-dark">Recognise your and your friends face!</h2>
        <div className="mx-3 md:mx-auto md:w-4/5 flex flex-col justify-center items-center my-5 md:8">
          <form>
            <FileUpload
              name={"image"}
              id={'image'} />
            <div className="my-5 mx-auto flex justify-center">
              <Button
                type={'submit'}
                text={'Upload'}
                arow={false} />
            </div>
          </form>
        </div>
      </section>

      {/* Footer  */}
      <Footer title={"Image Gallery"} />
    </Fragment>
  )
}

export default FaceRecognition
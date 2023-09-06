import React, { Fragment, useContext, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FileUpload from './elements/FileUpload'
import Button from './elements/Button'
import Input from './elements/Input'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import ImageContext from '../context/images/imageContext'

const UploadImage = ({ isLoggedIn, setisLoggedIn }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState({ image: '', tag: '', formData: new FormData() });
    const [file, setFile] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const {uploadImage} = useContext(ImageContext);

    const onChange = (e) => {
        const { name } = e.target;
        const value = (name === 'image') ? e.target.files[0] : e.target.value;
        image.formData.set(name, value)
        if (name === 'image') {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
        setImage({ ...image, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const url = "http://localhost:5000/api/image/upload";
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'auth-token': cookies.authToken
        //     },
        //     body: image.formData
        // });
        // let data = await response.json();
        // if (data.success) {
        //     navigate(0);
        //     alert('Successfullly Uploaded')
        // }
        uploadImage(image.formData).then((data)=>{
            if (data) {
                console.log(data,'data')
                navigate(0);
                alert('Successfullly Uploaded');
            }
        })
    }

    return (
        <Fragment>
            {/* Nanbar  */}
            <Navbar title={"Image Gallery"} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            {/* Upload a new Image */}
            <section className="my-5 md:my-14">
                <h2 className="text-center text-xl md:text-2xl text-dark">Upload a new Image</h2>
                <div className="mx-3 md:mx-auto md:w-4/5 flex flex-col justify-center items-center my-5 md:8">
                    <form onSubmit={handleSubmit}>
                        <FileUpload
                            name={"image"}
                            id={'image'}
                            onChange={onChange} />
                        <Input
                            type={'text'}
                            name={'tag'}
                            placeholder={'Tag (Optional)'}
                            isRequired={false}
                            bgColor={'bg-light/20'}
                            color={'text-normal'}
                            borderColor={'border-mid-dark'}
                            border={true}
                            onChange={onChange}
                            value={image.tag} />
                        <div className="my-5 mx-auto flex justify-between">
                            <Button
                                type={'button'}
                                text={'Preview'}
                                arow={false}
                                onClick={() => { setIsOpen(!isOpen) }} />
                            <Button
                                type={'submit'}
                                text={'Upload'}
                                arow={false} />
                        </div>
                    </form>
                </div>
            </section>
            {/* Preview */}
            {isOpen && <section className="my-5">
                <h3 className="text-center text-lg md:text-xl text-dark">Preview</h3>
                <div className="mx-3 md:mx-auto md:w-4/5 flex flex-col justify-center items-center my-5 md:8">
                    {file ? <img src={file} alt="" className="" /> :
                        <p className='text-base font-medium text-mid-dark'>Please choose an Image to preview...</p>}
                </div>
            </section>}
            {/* Footer  */}
            <Footer title={"Image Gallery"} />
        </Fragment>
    )
}

export default UploadImage
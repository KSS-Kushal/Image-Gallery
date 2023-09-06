import React, { Fragment, useContext } from 'react'
import { useCookies } from 'react-cookie';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ImageContext from '../context/images/imageContext';

const Image = ({ url, id }) => {
    const context = useContext(ImageContext);
    const {deleteImage} = context;

    // const [cookies, setCookie] = useCookies(['user']);
    // const navigate = useNavigate();

    // const deleteImage = async () => {
    //     const url = "http://localhost:5000/api/image/delete/" + id;
    //     const response = await fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             "auth-token": cookies.authToken
    //         }
    //     });
    //     let data = await response.json();
    //     if (data.success) {
    //         navigate(0);
    //     }
    // }
    return (
        <Fragment>
            <div className="relative">
                <div className="">
                    <img alt="gallery" className="inset-0 object-cover object-center" src={url} style={{width:450, height:300}} />
                </div>
                <div className="px-5 py-3 absolute left-0 top-0 w-full z-10 flex justify-end opacity-0 hover:opacity-100">
                    <AiFillDelete className='text-normal text-2xl cursor-pointer' onClick={()=>{deleteImage(id)}} />
                </div>
            </div>
        </Fragment>
    )
}

export default Image
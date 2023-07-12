import React, { Fragment } from 'react'
import { useCookies } from 'react-cookie';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Image = ({ url, id }) => {
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const deleteImage = async () => {
        const url = "http://localhost:5000/api/image/delete/" + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                "auth-token": cookies.authToken
            }
        });
        let data = await response.json();
        if (data.success) {
            navigate(0);
        }
    }
    return (
        <Fragment>
            <div className="relative">
                <div className="">
                    <img alt="gallery" className="inset-0 object-cover object-center" src={url} style={{width:450, height:300}} />
                </div>
                <div className="px-5 py-3 absolute left-0 top-0 w-full z-10 flex justify-end opacity-0 hover:opacity-100">
                    <AiFillDelete className='text-normal text-2xl cursor-pointer' onClick={deleteImage} />
                </div>
            </div>
            {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
             <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={url} />
                {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             <h2 className="tracking-widest text-sm title-font font-medium text-normal mb-1">THE SUBTITLE</h2>
             <h1 className="title-font text-lg font-medium text-dark mb-3">Shooting Stars</h1>
             <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
         </div> 
             </div>
         </div> */}
        </Fragment>
    )
}

export default Image
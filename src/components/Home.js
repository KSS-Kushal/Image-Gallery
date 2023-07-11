import React, { Fragment, useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from './Image'
import { useCookies } from 'react-cookie';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Home = ({ user, isLoggedIn, setisLoggedIn }) => {
    const [cookies, setCookie] = useCookies(['user']);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getAllImage = async () => {
            const url = "http://localhost:5000/api/image/images";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json",
                    "auth-token": cookies.authToken
                }
            });
            let data = await response.json();
            if (data.success) {
                setImages(data.images);
            }
        }
        if (isLoggedIn) {
            if (cookies.authToken) {
                getAllImage();
            }
        }
    }, [])

    return (
        <Fragment>
            {/* Nanbar  */}
            <Navbar title={"Image Gallery"} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            {/* Home  */}
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-dark">Wellcome {user.name}</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    {/* Show images */}
                    <div className="grid gap-2 grid-cols-auto -m-4">
                        {images.map((img, i) => (
                            <Image key={i} url={img.url} id={img._id} />
                        ))}
                    </div>
                    {/* Upload Image */}
                    <Link to={'/uploadimage'}>
                        <div className="fixed bottom-5 right-5 flex flex-col justify-center items-center bg-light px-6 py-2 rounded-md cursor-pointer">
                            <BiSolidCloudUpload className='text-4xl text-mid-dark' />
                            <p className="text-mid-dark text-base font-medium">Upload Image</p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* Footer  */}
            <Footer title={"Image Gallery"} />
        </Fragment>
    )
}

export default Home
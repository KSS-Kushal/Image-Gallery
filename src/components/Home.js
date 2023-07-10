import React, { Fragment, useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useCookies } from 'react-cookie';

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
            console.log(response)
            let data = await response.json();
            console.log(data)
            if (data.success) {
                setImages(data.images);
            }
        }
        if (cookies.authToken) {
            getAllImage();
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
                    <div className="flex flex-wrap -m-4">


                        {images.map((img, i) => (

                            <div className="lg:w-1/3 sm:w-1/2 p-4" key={i}>
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={img.url} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-normal mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-dark mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* Footer  */}
            <Footer title={"Image Gallery"} />
        </Fragment>
    )
}

export default Home
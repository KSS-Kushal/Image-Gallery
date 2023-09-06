import React, { Fragment, useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from './Image'
import { useCookies } from 'react-cookie';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './elements/SearchBar';
import Button from './elements/Button';
import ImageContext from '../context/images/imageContext';
import AuthContext from '../context/auths/authContext';

const Home = ({ isLoggedIn, setisLoggedIn }) => {
    const navigate = useNavigate();
    const context = useContext(ImageContext);
    const {images, getAllImage, searchImageByTag} = context;
    // const [cookies, setCookie] = useCookies(['user']);
    const {user, token, getUser} = useContext(AuthContext);
    // const [images, setImages] = useState([]);

    const [search, setSearch] = useState();

    // useEffect(() => {
    //     console.log("run")
    //     const getAllImage = async () => {
    //         const url = "http://localhost:5000/api/image/images";
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': "application/json",
    //                 "auth-token": cookies.authToken
    //             }
    //         });
    //         let data = await response.json();
    //         if (data.success) {
    //             setImages(data.images);
    //         }
    //     }
    //     if (cookies.authToken) {
    //         if (cookies.authToken) {
    //             getAllImage();
    //             console.log(images)
    //         }
    //     }
    // }, [navigate])

    useEffect(() => {
      if (token) {
        getAllImage();
      }else if(localStorage.getItem('authToken')){
        getUser(localStorage.getItem('authToken'));
      }
    }, [navigate,token])
    


    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const searchImage = async () => {
        const tag = search.toLowerCase();
        // const url = "http://localhost:5000/api/image/images/" + tag;
        //     const response = await fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': "application/json",
        //             // "auth-token": cookies.authToken,
        //             "auth-token": localStorage.getItem('authToken'),
        //         }
        //     });
        //     let data = await response.json();
        //     if (data.success) {
        //         setImages(data.images);
        //     }
        searchImageByTag(tag);
    }

    return (
        <Fragment>
            {/* Nanbar  */}
            <Navbar title={"Image Gallery"} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
            {/* Home  */}
            <section className="body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-dark">{user.name}, Wellcome to Image Gallery</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    {/* Search Image */}
                    <div className="flex justify-end my-5">
                    <div className="flex justify-between">
                        <SearchBar
                            name={'tag'}
                            placeholder={'Search Image'}
                            isRequired={true}
                            bgColor={'bg-light/20'}
                            color={'text-normal'}
                            borderColor={'border-mid-dark'}
                            border={true}
                            onChange={onChange}
                            value={search} />
                        <Button
                            type={'button'}
                            text={"Search"}
                            onClick={searchImage}
                            arow={true}
                            m={'mt-0'} />
                    </div>
                    </div>
                    {/* Show images */}
                    <div className="grid gap-2 grid-cols-auto -m-4">
                        {images.map((img, i) => (
                            <Image key={i} url={img.url} id={img._id} />
                        ))}
                    </div>
                    {/* Upload Image */}
                    <Link to={'/uploadimage'}>
                        <div className="fixed bottom-5 right-5 flex flex-col justify-center items-center bg-light px-6 py-2 rounded-md cursor-pointer opacity-30 hover:opacity-100">
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
import React, { useEffect, useState } from 'react'
import Input from './elements/Input'
import FormButton from './elements/FormButton'
import Checkbox from './elements/Checkbox'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const SignUp = ({ isLoggedIn, setisLoggedIn }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "" });
    const [cookies, setCookie] = useCookies(['user']);


    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/createuser";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                phone: user.phone,
                password: user.password
            })
        });
        let data = await response.json();
        if (data.success) {
            setCookie("authToken", data.authToken);
            setisLoggedIn(true);
            navigate("/");
            navigate(0);
        }
    }

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate("/");
    //     }
    // }, [isLoggedIn])

    return (
        <section className="bg-login h-[100vh] -scale-x-100 w-full">
            <div className="-scale-x-100">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <div className="mx-7 md:mx-16 my-5 md:my-14">
                            <h1 className="font-logo font-semibold text-4xl">Image Gallery</h1>
                            <div className="md:my-14 md:ml-20 my-10">
                                <div className="">
                                    <p className="font-heading text-3xl md:text-5xl">
                                        Start your <br /> journey with us.
                                    </p>
                                    <p className="font-para text-xs md:text-base text-dark my-3 md:my-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                                        do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    {/* <div className="mt-7 md:mt-14">
                                        <p className="font-heading font-medium text-lg md:text-xl text-black my-4">
                                            Explore All in one features on our platform:
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white md:h-[100vh] md:rounded-tl-[350px] px-3 py-4 md:pt-48 md:pl-12">
                        <div className="mx-3 md:ml-28 md:mr-40 2xl:pr-20">
                            <p className="font-para text-sm text-[#949494]">Start for Free</p>
                            <h3 className="font-heading font-medium text-xl">Create new account</h3>
                            <form onSubmit={handleSubmit} className="my-7">
                                <div className="flex flex-col md:flex-row md:space-x-3">
                                    <Input
                                        type={"text"}
                                        name={"firstName"}
                                        placeholder={'First Name'}
                                        isRequired={true}
                                        onChange={onChange}
                                        value={user.firstName}
                                        border={true} />
                                    <Input
                                        type={"text"}
                                        name={"lastName"}
                                        placeholder={'Last Name'}
                                        isRequired={true}
                                        onChange={onChange}
                                        value={user.lastName}
                                        border={true} />
                                </div>
                                <Input
                                    type={"email"}
                                    name={"email"}
                                    placeholder={"Email"}
                                    isRequired={true}
                                    onChange={onChange}
                                    value={user.email}
                                    border={true} />
                                <Input
                                    type={"tell"}
                                    name={"phone"}
                                    placeholder={"Phone"}
                                    isRequired={true}
                                    onChange={onChange}
                                    value={user.phone}
                                    border={true} />
                                <Input
                                    type={"password"}
                                    name={"password"}
                                    placeholder={"Password"}
                                    isRequired={true}
                                    onChange={onChange}
                                    value={user.password}
                                    border={true} />
                                <p className="font-para text-xs text-[#686868]/60 my-2">Must be at least 8 characters</p>
                                <Checkbox id={"agree"} name={"agree"} label={"I agree to all the Terms & Conditions "} />
                                <div className="my-6 flex flex-col justify-center items-center">
                                    <FormButton type={"submit"} text={"Create account"} padding_x={"px-20"} hover={'hover:drop-shadow-none'} />
                                    {/* <p className="my-3 font-para font-medium text-sm">OR</p>
                                    <div className="flex space-x-3">
                                        <FormButton
                                            leftIcon={'/G-logo.svg'}
                                            text={"Google"}
                                            padding_x={"pl-6 pr-8"}
                                            hover={'hover:drop-shadow-none'}
                                            type={"button"} />
                                        <FormButton
                                            leftIcon={'/F-logo.svg'}
                                            text={"Facebook"}
                                            padding_x={"pl-6 pr-8"}
                                            hover={'hover:drop-shadow-none'}
                                            type={"button"} />
                                    </div> */}
                                    <p className="font-heading text-sm text-black/50 my-3">
                                        Already have an account?
                                        <Link to={'/login'} className={'text-black'}>&nbsp; Log in</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
import React, { Fragment, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from './elements/FormButton';
import Input from './elements/Input';
import { useCookies } from 'react-cookie';
import AuthContext from '../context/auths/authContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [cookies, setCookie] = useCookies(['user']);
    const {loginUser} = useContext(AuthContext);

    const onChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginUser(email, password).then((authToken)=>{
            console.log(authToken,'loauth');
            localStorage.setItem('authToken',authToken);
            navigate('/');
    });
        // if (authToken) {
        //     // setCookie("authToken", authToken);
        //     console.log(authToken,'loauth');
        //     localStorage.setItem('authToken',authToken);
        //     navigate('/');
        // }
    }

    // useEffect(() => {
    //   if (isLoggedIn) {
    //     navigate("/");
    //   }
    // }, [isLoggedIn])
    

    return (
        <Fragment>
            {/* Login */}
            <section className="bg-login h-[100vh] -scale-x-100 w-full">
                <div className="-scale-x-100">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                            <div className="mx-7 md:mx-16 my-5 md:my-14">
                                <h1 className="font-logo font-semibold text-4xl">Image Gallery</h1>
                                <div className="md:my-14 md:ml-20 my-10">
                                    <div className="">
                                        <p className="font-heading text-3xl md:text-5xl">Hello Again!</p>
                                        <p className="font-para text-sm md:text-base text-dark my-3 md:my-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                            elit, sed do eiusmod tempor incididunt ut labore et <br />
                                            dolore
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-white md:h-[100vh] md:rounded-tl-[350px] px-3 py-4 md:pt-52 md:pl-12">
                            <div className="mx-3 md:ml-28 md:mr-40 2xl:pr-20">
                                <h3 className="font-heading font-medium text-xl">Log in to your account</h3>
                                <p className="font-heading text-sm text-black/50 my-3">
                                    Don’t have an account?
                                    <Link to={'/signup'} className={'text-black'}>&nbsp; Sign up</Link>
                                </p>
                                <form onSubmit={handleSubmit} className="my-7">
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeholder={"Email"}
                                        isRequired={true}
                                        border={true}
                                        onChange={onChange}
                                        value={email} />
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeholder={"Password"}
                                        isRequired={true}
                                        border={true}
                                        onChange={onChange}
                                        value={password} />
                                    <div className="my-2 flex justify-between">
                                        {/* <Checkbox id={"rememberme"} name={"rememberme"} label={"Remember me"} /> */}
                                        <Link to={'/forgotpassword'}>
                                            <p className="text-[#686868]/60 font-para text-xs underline underline-offset-2">Forgot Password?</p>
                                        </Link>
                                    </div>
                                    <div className="my-6 flex flex-col justify-center items-center">
                                        <FormButton
                                            type={"submit"}
                                            text={"Log in"}
                                            padding_x={"px-14"}
                                            hover={'hover:drop-shadow-none'} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login
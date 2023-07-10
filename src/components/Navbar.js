import React, { Fragment } from 'react'
import Button from './elements/Button'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Navbar = ({ title, isLoggedIn, setisLoggedIn }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const logOut = ()=>{
    setisLoggedIn(false);
    removeCookie("authToken");
  }
  return (
    <Fragment>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-dark mb-4 md:mb-0">
            <span className="ml-3 text-2xl hover:text-normal cursor-pointer">{title}</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
            <Link to={'/'} className="mr-5 hover:text-dark text-mid-dark cursor-pointer">Home</Link>
            <Link to={'/facerecognition'} className="mr-5 hover:text-dark text-mid-dark cursor-pointer">Face Recognition</Link>
            <Link to={'/about'} className="mr-5 hover:text-dark text-mid-dark cursor-pointer">About</Link>
          </nav>
          {!isLoggedIn ? <Link to={'/login'}>
            <Button
              text={"Login"}
              arow={true} />
          </Link> :
            <Button
              text={"Log out"}
              onClick={logOut}
              arow={true} />}
        </div>
      </header>
    </Fragment>
  )
}

export default Navbar
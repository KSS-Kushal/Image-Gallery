import React, { Fragment, useContext } from 'react';
import Button from './elements/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AuthContext from '../context/auths/authContext';

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {pathname} = location;
  // const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const {isLogin, logoutUser} = useContext(AuthContext);
  const logOut = ()=>{
    logoutUser();
    // removeCookie("authToken");
    localStorage.removeItem('authToken');
    navigate('/login');
  }
  return (
    <Fragment>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-dark mb-4 md:mb-0">
            <span className="ml-3 text-2xl hover:text-normal cursor-pointer">{title}</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
            <Link to={'/'} className={`mr-5 hover:text-dark ${pathname==='/'?"text-dark":"text-mid-dark"} cursor-pointer`}>Home</Link>
            <Link to={'/facerecognition'} className={`mr-5 hover:text-dark ${pathname==='/facerecognition'?"text-dark":"text-mid-dark"} cursor-pointer`}>Face Recognition</Link>
            <Link to={'/about'} className={`mr-5 hover:text-dark ${pathname==='/about'?"text-dark":"text-mid-dark"} cursor-pointer`}>About</Link>
          </nav>
          {!isLogin ? <Link to={'/login'}>
            <Button
            type={'button'}
              text={"Login"}
              arow={true} />
          </Link> :
            <Button
              type={'button'}
              text={"Log out"}
              onClick={logOut}
              arow={true} />}
        </div>
      </header>
    </Fragment>
  )
}

export default Navbar
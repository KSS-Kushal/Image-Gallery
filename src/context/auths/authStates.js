import { useState } from "react";
import AuthContext from "./authContext"

const baseUrl = 'http://localhost:5000/api/auth';
const AuthSates = (props)=>{
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState();

    const getUser = async (token) => {
        const res = await fetch(`${baseUrl}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'auth-token': token
            }
        });
        const data = await res.json();
        if (data.success) {
            setUser(data.user);
            setIsLogin(true);
            setToken(token);
            return data.user;
        }
    };

    const createUser = async (name, email, phone, password) => {
        const res = await fetch(`${baseUrl}/createuser`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password
            })
        });
        const data = await res.json();
        if (data.success) {
            setToken(data.authToken);
            setIsLogin(true);
            return data.authToken;
        }
    };

    const loginUser = async (email, password)=> {
        const res = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await res.json();
        if (data.success) {
            setToken(data.authToken);
            setIsLogin(true);
            return data.authToken;
        }
    };

    const logoutUser = ()=> {
        setIsLogin(false);
        setUser({});
        setToken();
    }
    return (
        <AuthContext.Provider value={{isLogin, user, token, getUser, createUser, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthSates
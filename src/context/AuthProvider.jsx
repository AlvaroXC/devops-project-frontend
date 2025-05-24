import {useState, useEffect, createContext} from 'react';
import axios from 'axios';
const AuthContext = createContext(); 

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const authUser = async () => {
            const token = localStorage.getItem('token'); 
            if(!token) return 
            
            const config = {
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const response = await axios.get('http://127.0.0.1:5000/vehicle', config);
                console.log(response)
            } catch (error) {
                console.log(error);
            }

        }
        authUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
export default AuthContext
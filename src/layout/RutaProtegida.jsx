import { Outlet, Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import { Footer } from "../pages/Footer";

const RutaProtegida = () => {
    const {auth, loading} = useAuth()

    if(loading) return 'Cargando...'

    return (
        <>
            <h1>Esta es una ruta protegida</h1>
            
                {auth?.id ? <Outlet/> : <Navigate to='/' />}

            <Footer/>
        </>
    )
}

export default RutaProtegida
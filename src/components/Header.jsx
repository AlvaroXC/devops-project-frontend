import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Header= () =>{

    const {logout} = useAuth();

    return (
        <header className="py-10 bg-indigo-600" >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl text-indigo-200 text-center">Admistrador de {''}<span className="text-white font-black">Flotilla</span> </h1>
                <nav className="flex flex-col gap-4 mt-5 lg:flex-row lg:mt-0"> 
                    <Link className="text-white text-sm font-bold uppercase" to="/admin">Inicio</Link>
                    <Link className="text-white text-sm font-bold uppercase" to="/admin/vehicles">Vehiculos</Link>
                    <Link className="text-white text-sm font-bold uppercase" to="/admin/drivers">Conductores</Link>
                    <Link className="text-white text-sm font-bold uppercase" to="/admin/assignments">Asignaciones</Link>
                    <Link className="text-white text-sm font-bold uppercase" to="/admin/routes">Rutas</Link>
                    <button type="button" className="text-white text-sm font-bold uppercase cursor-pointer" onClick={logout}>
                        Cerrar Sesión
                    </button>
                </nav>
            </div>

        </header>
    )
}

export default Header;

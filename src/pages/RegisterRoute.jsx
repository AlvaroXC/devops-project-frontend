import { useState } from "react"
import { ListRoutes } from "../components/ListRoutes"
import { RouteForm } from "../components/RouteForm"

export const RegisterRoute = () => {
    const [showRouteForm, setShowRouteForm] = useState(true)

    return (
        <div className="flex flex-col md:flex-row mx-5">
            <button 
                type="button" 
                className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
                onClick={() => setShowRouteForm(!showRouteForm)}
            >
                {showRouteForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={` ${showRouteForm ? 'block' : 'hidden' } md:w-1/2 lg:w-2/5`}>
                <RouteForm />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
                <ListRoutes/>
            </div>
        </div>
    )
} 
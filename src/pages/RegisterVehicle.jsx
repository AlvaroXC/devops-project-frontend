import { useState } from "react"
import { ListVehicles } from "../components/ListVehicles"
import { VehicleForm } from "../components/VehicleForm"


export const RegisterVehicle = () => {

    const [showVehicleForm, setShowVehicleForm] = useState(true)

    return (
        <div className="flex flex-col md:flex-row mx-5">
            <button 
                type="button" 
                className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
                onClick={() => setShowVehicleForm(!showVehicleForm)}
            >
                {showVehicleForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={` ${showVehicleForm ? 'block' : 'hidden' } md:w-1/2 lg:w-2/5`}>
                <VehicleForm />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
                <ListVehicles/>
            </div>
        </div>
    )
}

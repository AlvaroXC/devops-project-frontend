import useVehicles from "../hooks/useVehicles"
import { Vehicle } from "./Vehicle"

export const ListVehicles = () => {

    const { vehicles } = useVehicles()

    return (
        <>
            {vehicles.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Vehículos</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Vehículos</span>
                    </p>

                    {vehicles.map(vehicle => (
                        <Vehicle
                            key={vehicle.id}
                            vehicle={vehicle}
                        />
                    ))}

                </>   
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Vehículos</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando vehiculos {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
}

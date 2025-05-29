import { useState, useEffect } from "react"
import { Alert } from "./Alert"
import useAssignments from "../hooks/useAssignments"

export const AssignmentForm = () => {
    const [vehicleId, setVehicleId] = useState('')
    const [driverId, setDriverId] = useState('')
    const [id, setId] = useState(null)

    const [alertMessage, setAlertMessage] = useState({})

    const {saveAssignment, assignment, vehicles, drivers} = useAssignments()
    
    useEffect(() => {
        if(assignment?.vehicle_id){
            setVehicleId(assignment.vehicle_id)
            setDriverId(assignment.driver_id)
            setId(assignment.id)
        }
    }, [assignment])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ([vehicleId, driverId].includes('')) {
            setAlertMessage({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        // // Verificar que el vehículo no esté ya asignado (solo para nuevas asignaciones)
        // if (!id) {
        //     const vehicleAlreadyAssigned = vehicles.find(v => v.id === parseInt(vehicleId))
        //     // Aquí podrías agregar lógica adicional para verificar asignaciones existentes
        // }

        saveAssignment({
            vehicle_id: parseInt(vehicleId),
            driver_id: parseInt(driverId),
            id
        })

        setAlertMessage({msg: 'Asignación guardada correctamente'})
        setVehicleId('')
        setDriverId('')
        setId(null)
    }

    const { msg } = alertMessage

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de Asignaciones</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Asignar {''}
                <span className="text-indigo-600 font-bold">Vehículo a Conductor</span>
            </p>

            {msg && <Alert alertMessage={alertMessage} />}
            <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="vehicle" className="text-gray-500 uppercase font-bold">Vehículo</label>
                    <select 
                        id="vehicle"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={vehicleId}
                        onChange={e => setVehicleId(e.target.value)}
                    >
                        <option value="">-- Selecciona un Vehículo --</option>
                        {vehicles.map(vehicle => (
                            <option key={vehicle.id} value={vehicle.id}>
                                {vehicle.brand} {vehicle.model} - {vehicle.license_plate}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="driver" className="text-gray-500 uppercase font-bold">Conductor</label>
                    <select 
                        id="driver"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={driverId}
                        onChange={e => setDriverId(e.target.value)}
                    >
                        <option value="">-- Selecciona un Conductor --</option>
                        {drivers.map(driver => (
                            <option key={driver.id} value={driver.id}>
                                {driver.name} - {driver.license_number}
                            </option>
                        ))}
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={id ? 'Actualizar Asignación' : "Crear Asignación"} 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-colors"
                />
            </form>
        </>
    )
}
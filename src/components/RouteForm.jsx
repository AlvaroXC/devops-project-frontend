import { useState, useEffect } from "react"
import { Alert } from "./Alert"
import useRoutes from "../hooks/useRoutes"
import useAssignments from "../hooks/useAssignments"
import useVehicles from "../hooks/useVehicles"
import useDrivers from "../hooks/useDrivers"

export const RouteForm = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [originLat, setOriginLat] = useState('')
    const [originLng, setOriginLng] = useState('')
    const [destinationLat, setDestinationLat] = useState('')
    const [destinationLng, setDestinationLng] = useState('')
    const [assignmentId, setAssignmentId] = useState('')
    const [status, setStatus] = useState('pending')
    const [problemDescription, setProblemDescription] = useState('')
    const [comments, setComments] = useState('')
    const [id, setId] = useState(null)

    const [alertMessage, setAlertMessage] = useState({})

    const { saveRoute, route } = useRoutes()
    const { vehicles } = useVehicles()
    const { drivers } = useDrivers()
    const {assignments} = useAssignments()


    const getDetailedAssignmentInfo = (assignment) => {
        const vehicle = vehicles.find(v => v.id === assignment.vehicle_id)
        const driver = drivers.find(d => d.id === assignment.driver_id)
        
        return {
            assignmentId: assignment.id,
            vehicleInfo: vehicle ? `${vehicle.brand} ${vehicle.model} (${vehicle.license_plate})` : 'Vehículo no encontrado',
            driverInfo: driver ? `${driver.name} (${driver.license_number})` : 'Conductor no encontrado'
        }
    }
    
    useEffect(() => {
        if(route?.name) {
            setName(route.name)
            setDate(route.date)
            setOriginLat(route.origin_lat)
            setOriginLng(route.origin_lng)
            setDestinationLat(route.destination_lat)
            setDestinationLng(route.destination_lng)
            setAssignmentId(route.assignment_id)
            setStatus(route.status)
            setProblemDescription(route.problem_description || '')
            setComments(route.comments || '')
            setId(route.id)
        }
    }, [route])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if ([name, date, originLat, originLng, destinationLat, destinationLng, assignmentId].includes('')) {
            setAlertMessage({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        try {
            await saveRoute({
                name,
                date,
                origin_lat: originLat,
                origin_lng: originLng,
                destination_lat: destinationLat,
                destination_lng: destinationLng,
                assignment_id: assignmentId,
                status,
                problem_description: problemDescription,
                comments,
                id
            })

            setAlertMessage({msg: 'Ruta guardada correctamente'})
            resetForm()
        } catch (error) {
            setAlertMessage({
                msg: error.message || 'Error al guardar la ruta',
                error: true
            })
        }
    }

    const resetForm = () => {
        setName('')
        setDate('')
        setOriginLat('')
        setOriginLng('')
        setDestinationLat('')
        setDestinationLng('')
        setAssignmentId('')
        setStatus('pending')
        setProblemDescription('')
        setComments('')
        setId(null)
    }

    const { msg } = alertMessage

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de Rutas</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Añadir y Administrar {''}
                <span className="text-indigo-600 font-bold">Rutas</span>
            </p>

            {msg && <Alert alertMessage={alertMessage} />}
            <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="text-gray-500 uppercase font-bold">Nombre de la Ruta</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Nombre de la ruta"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-gray-500 uppercase font-bold">Fecha</label>
                    <input 
                        type="date"
                        id="date"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="assignment" className="text-gray-500 uppercase font-bold">Asignación</label>
                    <select 
                        id="assignment"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={assignmentId}
                        onChange={e => setAssignmentId(e.target.value)}
                    >
                        <option value="">-- Selecciona una Asignación --</option>
                        {assignments.map(assignment => {
                            const details = getDetailedAssignmentInfo(assignment)
                            return (
                                <option key={assignment.id} value={assignment.id}>
                                    ID: {details.assignmentId} | Vehículo: {details.vehicleInfo} | Conductor: {details.driverInfo}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-5">
                        <label htmlFor="originLat" className="text-gray-500 uppercase font-bold">Latitud Origen</label>
                        <input 
                            type="number"
                            step="any"
                            id="originLat"
                            placeholder="Latitud de origen"
                            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                            value={originLat}
                            onChange={e => setOriginLat(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="originLng" className="text-gray-500 uppercase font-bold">Longitud Origen</label>
                        <input 
                            type="number"
                            step="any"
                            id="originLng"
                            placeholder="Longitud de origen"
                            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                            value={originLng}
                            onChange={e => setOriginLng(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-5">
                        <label htmlFor="destinationLat" className="text-gray-500 uppercase font-bold">Latitud Destino</label>
                        <input 
                            type="number"
                            step="any"
                            id="destinationLat"
                            placeholder="Latitud de destino"
                            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                            value={destinationLat}
                            onChange={e => setDestinationLat(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="destinationLng" className="text-gray-500 uppercase font-bold">Longitud Destino</label>
                        <input 
                            type="number"
                            step="any"
                            id="destinationLng"
                            placeholder="Longitud de destino"
                            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                            value={destinationLng}
                            onChange={e => setDestinationLng(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="status" className="text-gray-500 uppercase font-bold">Estado</label>
                    <select 
                        id="status"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="pending">Pendiente</option>
                        <option value="in_progress">En Progreso</option>
                        <option value="completed">Completada</option>
                        <option value="failed">Fallida</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="problemDescription" className="text-gray-500 uppercase font-bold">Descripción del Problema</label>
                    <textarea 
                        id="problemDescription"
                        placeholder="Descripción del problema (si existe)"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={problemDescription}
                        onChange={e => setProblemDescription(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="comments" className="text-gray-500 uppercase font-bold">Comentarios</label>
                    <textarea 
                        id="comments"
                        placeholder="Comentarios adicionales"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    value={id ? 'Guardar Cambios' : "Agregar Ruta"} 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-colors"
                />
            </form>
        </>
    )
} 
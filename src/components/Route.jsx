import useRoutes from "../hooks/useRoutes"
import useVehicles from "../hooks/useVehicles"
import useDrivers from "../hooks/useDrivers"
import useAssignments from "../hooks/useAssignments"


export const Route = ({route}) => {
    const {updateRoute, deleteRoute} = useRoutes()
    const {vehicles} = useVehicles()
    const {drivers} = useDrivers()
    const {assignments} = useAssignments()
    const {name, date, origin_lat, origin_lng, destination_lat, destination_lng, assignment_id, status, problem_description, comments, id} = route

    const modifiedDate = (date) => {
        const newDate = new Date(date)
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(newDate);
    }

    const getStatusBadgeColor = (status) => {
        const statusColors = {
            'pending': 'bg-yellow-500',
            'in_progress': 'bg-blue-500',
            'completed': 'bg-green-500',
            'failed': 'bg-red-500'
        };
        return statusColors[status] || 'bg-gray-500';
    }

    const getAssignmentDetails = () => {
        const assignment = assignments.find(a => a.id === route.assignment_id)

        if (!assignment) {
            return {
                vehicleInfo: 'Asignación no encontrada',
                driverInfo: 'Asignación no encontrada'
            }
        }

        const vehicle = vehicles.find(v => String(v.id) === String(assignment.vehicle_id))
        const driver = drivers.find(d => String(d.id) === String(assignment.driver_id))

        return {
            vehicleInfo: vehicle ? `${vehicle.brand} ${vehicle.model}` : 'Vehículo no encontrado',
            driverInfo: driver ? `${driver.name} (${driver.license_number})` : 'Conductor no encontrado'
        }
    }


    const assignmentDetails = getAssignmentDetails();

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-700 my-2">Nombre de Ruta: {''}
                <span className="font-normal normal-case text-black">{name}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Fecha: {''}
                <span className="font-normal normal-case text-black">{modifiedDate(date)}</span>
            </p>
            <div className="my-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-2">Detalles de la Asignación:</h3>
                <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Vehículo:</span> 
                    {assignmentDetails.vehicleInfo}
                </p>
                <p className="text-sm text-gray-600">
                    <span className="font-semibold">Conductor:</span> 
                    {assignmentDetails.driverInfo}
                </p>
            </div>
            <p className="font-bold uppercase text-indigo-700 my-2">Estado: {''}
                <span className={`px-2 py-1 rounded-full text-white text-sm ${getStatusBadgeColor(status)}`}>
                    {status}
                </span>
            </p>
            <div className="my-4">
                <p className="font-bold uppercase text-indigo-700 mb-2">Ubicación de Origen:</p>
                <p className="text-sm text-gray-600">Latitud: {origin_lat}</p>
                <p className="text-sm text-gray-600">Longitud: {origin_lng}</p>
            </div>
            <div className="my-4">
                <p className="font-bold uppercase text-indigo-700 mb-2">Ubicación de Destino:</p>
                <p className="text-sm text-gray-600">Latitud: {destination_lat}</p>
                <p className="text-sm text-gray-600">Longitud: {destination_lng}</p>
            </div>
            {problem_description && (
                <p className="font-bold uppercase text-indigo-700 my-2">Descripción del Problema: {''}
                    <span className="font-normal normal-case text-black">{problem_description}</span>
                </p>
            )}
            {comments && (
                <p className="font-bold uppercase text-indigo-700 my-2">Comentarios: {''}
                    <span className="font-normal normal-case text-black">{comments}</span>
                </p>
            )}

            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => updateRoute(route)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => deleteRoute(id)}
                >Eliminar</button>
            </div>
        </div>
    )
} 
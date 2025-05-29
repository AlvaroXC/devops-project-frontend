import useAssignments from "../hooks/useAssignments"

export const Assignment = ({assignment}) => {

    const {updateAssignment, deleteAssignment, getVehicleName, getDriverName} = useAssignments()

    const {vehicle_id, driver_id, id} = assignment

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-700 my-2">ID Asignación: {''}
                <span className="font-normal normal-case text-black">{id}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Vehículo: {''}
                <span className="font-normal normal-case text-black">{getVehicleName(vehicle_id)}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Conductor: {''}
                <span className="font-normal normal-case text-black">{getDriverName(driver_id)}</span>
            </p>

            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => updateAssignment(assignment)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => deleteAssignment(id)}
                >Eliminar</button>
            </div>
        </div>
    )
}
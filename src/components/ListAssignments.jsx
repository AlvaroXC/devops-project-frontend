import useAssignments from "../hooks/useAssignments"
import { Assignment } from "./Assignment"

export const ListAssignments = () => {

    const { assignments } = useAssignments()

    return (
        <>
            {assignments.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Asignaciones</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Asignaciones</span>
                    </p>

                    {assignments.map(assignment => (
                        <Assignment
                            key={assignment.id}
                            assignment={assignment}
                        />
                    ))}

                </>   
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Asignaciones</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza asignando vehículos a conductores {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
}
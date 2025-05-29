import { useState } from "react"
import { ListAssignments } from "../components/ListAssignments"
import { AssignmentForm } from "../components/AssignmentForm"

export const RegisterAssignment = () => {

    const [showAssignmentForm, setShowAssignmentForm] = useState(true)

    return (
        <div className="flex flex-col md:flex-row mx-5">
            <button 
                type="button" 
                className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
                onClick={() => setShowAssignmentForm(!showAssignmentForm)}
            >
                {showAssignmentForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={` ${showAssignmentForm ? 'block' : 'hidden' } md:w-1/2 lg:w-2/5`}>
                <AssignmentForm />
            </div>
            <div className="md:w-1/2 lg:w-3/5">
                <ListAssignments/>
            </div>
        </div>
    )
}
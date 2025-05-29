import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AssignmentsContext = createContext()

// Función helper reutilizable para obtener datos
const fetchData = async (endpoint, setData) => {
    try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        const {data} = await axios(`http://127.0.0.1:5001/${endpoint}/`, config)
        setData(endpoint === 'vehicle' ? data.data : data)
    } catch (error) {
        console.log(error)
    }
}

const AssignmentsProvider = ({children}) => {
    const [assignments, setAssignments] = useState([])
    const [assignment, setAssignment] = useState({})
    const [vehicles, setVehicles] = useState([])
    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        // Obtenemos todos los datos necesarios
        const fetchAllData = async () => {
            await Promise.all([
                fetchData('assignments', setAssignments),
                fetchData('vehicle', setVehicles),
                fetchData('drivers', setDrivers)
            ])
        }
        fetchAllData()
    }, [])

    const saveAssignment = async (assignment) => {
        const token = localStorage.getItem('token'); 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        if(assignment.id){
            try {
                const { id, ...payload } = assignment;
                const { data } = await axios.put(`http://127.0.0.1:5001/assignments/${assignment.id}`, payload, config)
                setAssignments(prevAssignments => 
                    prevAssignments.map(a => 
                        a.id === assignment.id ? {...assignment, id: data.id} : a
                    )
                )
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await axios.post('http://127.0.0.1:5001/assignments/', assignment, config)
                setAssignments(prevAssignments => [...prevAssignments, {...assignment, id: data.id}])
            } catch (error) {
                console.log(error)
            }
        }
    }

    const updateAssignment = (assignment) => {
        setAssignment(assignment)
    }

    const deleteAssignment = async id => {
        const confirmDeleteAssignment = confirm('¿Deseas eliminar esta asignación?')
        if(confirmDeleteAssignment){
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
                await axios.delete(`http://127.0.0.1:5001/assignments/${id}`, config)
                setAssignments(prevAssignments => 
                    prevAssignments.filter(assignment => assignment.id !== id)
                )
            } catch (error){
                console.log(error)
            }
        }
    }

    const getVehicleName = (vehicleId) => {
        const vehicle = vehicles.find(v => v.id === vehicleId)
        return vehicle ? `${vehicle.brand} ${vehicle.model} - ${vehicle.license_plate}` : 'Vehículo no encontrado'
    }

    const getDriverName = (driverId) => {
        const driver = drivers.find(d => d.id === driverId)
        return driver ? driver.name : 'Conductor no encontrado'
    }

    return (
        <AssignmentsContext.Provider
            value={{
                assignments,
                assignment,
                vehicles,
                drivers,
                saveAssignment,
                updateAssignment,
                deleteAssignment,
                getVehicleName,
                getDriverName
            }}
        >
            {children}
        </AssignmentsContext.Provider>
    )
}

export {
    AssignmentsProvider
}

export default AssignmentsContext
import { createContext, useState, useEffect } from "react";
import axios from "axios";


const VehiclesContext = createContext()

const VehiclesProvider = ({children}) => {
    
    const [vehicles, setVehicles] = useState([])
    const [vehicle, setVehicle] = useState({})

    useEffect(() => {
        const getVehicles = async () => {

            try {
                const token = localStorage.getItem('token')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }

                const {data } = await axios('http://127.0.0.1:5000/vehicle/', config)
                
                setVehicles(data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getVehicles()
    }, [])

    const saveVehicle = async (vehicle) => {


        const token = localStorage.getItem('token'); 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        if(vehicle.id){
            try {
                const { id, ...payload } = vehicle;
                
                const { data } = await axios.put(`http://127.0.0.1:5000/vehicle/${vehicle.id}`, payload, config)
                setVehicles(prevVehicles => 
                    prevVehicles.map(v => 
                        v.id === vehicle.id ? data.data : v
                    )
                )
                

            } catch (error) {
                console.log(error)
            }
        }else{
            try {
                const { data } = await axios.post('http://127.0.0.1:5000/vehicle/', vehicle, config)
                setVehicles(prevVehicles => [...prevVehicles, data.data])
                
            } catch (error) {
                console.log(error)
            }
        }

    }

    const updateVehicle = (vehicle) => {
        setVehicle(vehicle)
    }

    const deleteVehicle = async id => {
        const confirmDeleteVehicle = confirm('¿Deseas eliminar este vehículo?')
        if(confirmDeleteVehicle){
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
                const {data} = axios.delete(`http://127.0.0.1:5000/vehicle/${id}`, config)
                setVehicles(prevVehicles => 
                    prevVehicles.filter(vehicle => vehicle.id !== id)
                )
                
            } catch (error){
                console.log(error)
            }
        }
    }

    return (
        <VehiclesContext.Provider
            value={{
                vehicles,
                saveVehicle,
                updateVehicle, 
                vehicle, 
                deleteVehicle
            }}
        >
            {children}
        </VehiclesContext.Provider>
    )
}

export {
    VehiclesProvider
}

export default VehiclesContext
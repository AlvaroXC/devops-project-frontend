import { useState, useEffect } from "react"
import { Alert } from "./Alert"
import useVehicles from "../hooks/useVehicles"

export const VehicleForm = () => {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [vin, setVin] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    const [cost, setCost] = useState('')
    const [entryDate, setEntryDate] = useState('')
    const [id, setId] = useState(null)

    const [alertMessage, setAlertMessage] = useState({})

    const {saveVehicle, vehicle} = useVehicles()
    
    useEffect(() => {
        if(vehicle?.brand){
            setBrand(vehicle.brand)
            setModel(vehicle.model)
            setVin(vehicle.vin)
            setLicensePlate(vehicle.license_plate)
            setPurchaseDate(vehicle.purchase_date)
            setCost(vehicle.cost)
            setEntryDate(vehicle.entry_date)
            setId(vehicle.id)
        }
    }, [vehicle])
    
        useEffect(() => {
        if (alertMessage.msg) {
            const timer = setTimeout(() => {
                setAlertMessage({})
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [alertMessage.msg])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ([brand, model, vin, licensePlate, purchaseDate, cost, entryDate].includes('')) {
            setAlertMessage({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        saveVehicle({
            brand,
            model,
            vin,
            "license_plate": licensePlate,
            "purchase_date": purchaseDate,
            cost,
            "entry_date":entryDate, 
            id
        })

        setAlertMessage({msg: 'Vehículo guardado correctamente'})
        setBrand('')
        setModel('')
        setVin('')
        setLicensePlate('')
        setPurchaseDate('')
        setCost('')
        setEntryDate('')
        setId(null)
    }

    const { msg } = alertMessage

    return (
        <>
            <h2 className="font-black text-3xl text-center">Administrador de Vehículos</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Registrar {''}
                <span className="text-indigo-600 font-bold">Vehículo</span>
            </p>

            {msg && <Alert alertMessage={alertMessage} />}
            <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-xl" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="brand" className="text-gray-500 uppercase font-bold">Marca</label>
                    <input 
                        type="text"
                        id="brand"
                        placeholder="Marca del vehículo"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="model" className="text-gray-500 uppercase font-bold">Modelo</label>
                    <input 
                        type="text"
                        id="model"
                        placeholder="Modelo del vehículo"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="vin" className="text-gray-500 uppercase font-bold">VIN</label>
                    <input 
                        type="text"
                        id="vin"
                        placeholder="Número de serie (VIN)"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={vin}
                        onChange={e => setVin(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="license_plate" className="text-gray-500 uppercase font-bold">Placa</label>
                    <input 
                        type="text"
                        id="license_plate"
                        placeholder="Placa del vehículo"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={licensePlate}
                        onChange={e => setLicensePlate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="purchase_date" className="text-gray-500 uppercase font-bold">Fecha de compra</label>
                    <input 
                        type="date"
                        id="purchase_date"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={purchaseDate}
                        onChange={e => setPurchaseDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="cost" className="text-gray-500 uppercase font-bold">Costo</label>
                    <input 
                        type="number"
                        id="cost"
                        placeholder="Costo del vehículo"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="entry_date" className="text-gray-500 uppercase font-bold">Fecha de ingreso</label>
                    <input 
                        type="date"
                        id="entry_date"
                        className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
                        value={entryDate}
                        onChange={e => setEntryDate(e.target.value)}
                    />
                </div>

                <input type="submit" value={id? 'Guardar Cambios' : "Agregar Vehículo"} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-colors"/>
            </form>
        </>
    )
}

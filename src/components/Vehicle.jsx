import useVehicles from "../hooks/useVehicles"


export const Vehicle = ({vehicle}) => {

    const {updateVehicle, deleteVehicle} = useVehicles()

    const {brand, model, cost, entry_date, purchase_date, license_plate, vin, id} = vehicle

    const modifiedDate = (date) => {
        const newDate = new Date(date)
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(newDate);
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-700 my-2">Marca: {''}
                <span className="font-normal normal-case text-black">{brand}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Modelo: {''}
                <span className="font-normal normal-case text-black">{model}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Vin: {''}
                <span className="font-normal normal-case text-black">{vin}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Licencia: {''}
                <span className="font-normal normal-case text-black">{license_plate}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Fecha de Compra: {''}
                <span className="font-normal normal-case text-black">{modifiedDate(purchase_date)}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Costo: {''}
                <span className="font-normal normal-case text-black">{cost}</span>
            </p>
            <p className="font-bold uppercase text-indigo-700 my-2">Fecha de registro: {''}
                <span className="font-normal normal-case text-black">{modifiedDate(entry_date)}</span>
            </p>


            <div className="flex justify-between my-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => updateVehicle(vehicle)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
                    onClick={() => deleteVehicle(id)}
                >Eliminar</button>
            </div>

        </div>
    )
}

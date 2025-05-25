import {useContext} from "react";
import VehiclesContext from "../context/VehicleProvider";

const useVehicles = () => {
    return useContext(VehiclesContext)
}

export default useVehicles;
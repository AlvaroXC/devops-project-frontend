import { useContext } from "react";
import DriversContext from "../context/DriverProvider";

const useDrivers = () => {
  return useContext(DriversContext);
};

export default useDrivers;

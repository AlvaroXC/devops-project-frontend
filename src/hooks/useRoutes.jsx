import { useContext } from "react";
import RoutesContext from "../context/RouteProvider";

const useRoutes = () => {
    return useContext(RoutesContext)
}

export default useRoutes; 
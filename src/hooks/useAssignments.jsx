import {useContext} from "react";
import AssignmentsContext from "../context/AssignmentProvider";

const useAssignments = () => {
    return useContext(AssignmentsContext)
}

export default useAssignments;
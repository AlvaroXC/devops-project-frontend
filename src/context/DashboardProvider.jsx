import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const getCounts = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios(
          "http://127.0.0.1:5000/dashboard/",
          config
        );
        setCounts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCounts();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        counts,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider };

export default DashboardContext;

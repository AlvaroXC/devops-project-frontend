import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DriversContext = createContext();

const DriversProvider = ({ children }) => {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({});

  useEffect(() => {
    const getDrivers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios("http://127.0.0.1:5001/drivers/", config);
        setDrivers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDrivers();
  }, []);

  const saveDriver = async (driver) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (driver.id) {
      try {
        console.log(driver.id);
        const { id, ...payload } = driver;

        const { data } = await axios.put(
          `http://127.0.0.1:5001/drivers/${driver.id}`,
          payload,
          config
        );

        setDrivers((prevDrivers) =>
          prevDrivers.map((d) => (d.id === data.id ? data : d))
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:5001/drivers/",
          driver,
          config
        );
        setDrivers((prevDrivers) => [...prevDrivers, data.driver]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateDriver = (driver) => {
    setDriver(driver);
  };

  const deleteDriver = async (id) => {
    const confirmDeleteDriver = confirm("¿Deseas eliminar este vehículo?");
    if (confirmDeleteDriver) {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        axios.delete(`http://127.0.0.1:5001/drivers/${id}`, config);
        setDrivers((prevDrivers) =>
          prevDrivers.filter((driver) => driver.id !== id)
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DriversContext.Provider
      value={{
        drivers,
        saveDriver,
        updateDriver,
        driver,
        deleteDriver,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
};

export { DriversProvider };

export default DriversContext;

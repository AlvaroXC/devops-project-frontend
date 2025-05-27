import { useState, useEffect } from "react";
import { Alert } from "./Alert";
import useDrivers from "../hooks/useDrivers";

const formatDateToYMD = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const DriverForm = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [curp, setCurp] = useState("");
  const [address, setAddress] = useState("");
  const [monthly_salary, setMonthlySalary] = useState("");
  const [hire_date, setHireDate] = useState("");
  const [license_number, setLicenseNumber] = useState("");
  const [id, setId] = useState(null);

  const [alertMessage, setAlertMessage] = useState({});

  const { saveDriver, driver } = useDrivers();

  useEffect(() => {
    if (driver?.name) {
      setName(driver.name);
      const parsedBirthday = formatDateToYMD(driver.birthday);
      setBirthday(parsedBirthday);
      setCurp(driver.curp);
      setAddress(driver.address);
      setMonthlySalary(driver.monthly_salary);
      const parsedHireDate = formatDateToYMD(driver.hire_date);
      setHireDate(parsedHireDate);
      setLicenseNumber(driver.license_number);
      setId(driver.id);
    }
  }, [driver]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        name,
        birthday,
        curp,
        address,
        monthly_salary,
        hire_date,
        license_number,
      ].includes("")
    ) {
      setAlertMessage({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    saveDriver({
      name,
      birthday,
      curp,
      address,
      monthly_salary,
      hire_date,
      license_number,
      id,
    });

    setAlertMessage({ msg: "Vehículo guardado correctamente" });
    setName("");
    setBirthday("");
    setCurp("");
    setAddress("");
    setMonthlySalary("");
    setHireDate("");
    setLicenseNumber("");
    setId(null);
  };

  const { msg } = alertMessage;

  return (
    <>
      <h2 className="font-black text-3xl text-center">
        Administrador de Conductores
      </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Registrar {""}
        <span className="text-indigo-600 font-bold">Conductor</span>
      </p>

      {msg && <Alert alertMessage={alertMessage} />}
      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-500 uppercase font-bold">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre del conductor"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="birthday"
            className="text-gray-500 uppercase font-bold"
          >
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="birthday"
            placeholder="Fecha de nacimiento"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="curp" className="text-gray-500 uppercase font-bold">
            CURP
          </label>
          <input
            type="text"
            id="curp"
            placeholder="CURP"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={curp}
            onChange={(e) => setCurp(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="address"
            className="text-gray-500 uppercase font-bold"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            placeholder="Dirección del conductor"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="monthly_salary"
            className="text-gray-500 uppercase font-bold"
          >
            Salario mensual
          </label>
          <input
            type="text"
            id="monthly_salary"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={monthly_salary}
            onChange={(e) => setMonthlySalary(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="hire_date"
            className="text-gray-500 uppercase font-bold"
          >
            Fecha de contratación
          </label>
          <input
            type="date"
            id="hire_date"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={hire_date}
            onChange={(e) => setHireDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="license_number"
            className="text-gray-500 uppercase font-bold"
          >
            Numero de licencia
          </label>
          <input
            type="text"
            id="license_number"
            className="border w-full p-2 mt-2 placeholder-grey-400 rounded-xl"
            value={license_number}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={id ? "Guardar Cambios" : "Agregar conductor"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-colors"
        />
      </form>
    </>
  );
};

import { useState } from "react";
import { ListDrivers } from "../components/ListDrivers";
import { DriverForm } from "../components/DriverForm";

export const RegisterDrivers = () => {
  const [showDriverForm, setShowDriverForm] = useState(true);

  return (
    <div className="flex flex-col md:flex-row mx-5">
      <button
        type="button"
        className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
        onClick={() => setShowDriverForm(!showDriverForm)}
      >
        {showDriverForm ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      <div
        className={` ${showDriverForm ? "block" : "hidden"} md:w-1/2 lg:w-2/5`}
      >
        <DriverForm />
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <ListDrivers />
      </div>
    </div>
  );
};

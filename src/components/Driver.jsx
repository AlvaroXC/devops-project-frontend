import useDrivers from "../hooks/useDrivers";

export const Driver = ({ driver }) => {
  const { updateDriver, deleteDriver } = useDrivers();
  const {
    id,
    name,
    birthday,
    curp,
    address,
    monthly_salary,
    hire_date,
    license_number,
  } = driver;

  const modifiedDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      newDate
    );
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Nombre: {""}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha de nacimiento: {""}
        <span className="font-normal normal-case text-black">
          {modifiedDate(birthday)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        CURP: {""}
        <span className="font-normal normal-case text-black">{curp}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Dirección: {""}
        <span className="font-normal normal-case text-black">{address}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Salario: {""}
        <span className="font-normal normal-case text-black">
          {monthly_salary}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Fecha de contratación: {""}
        <span className="font-normal normal-case text-black">
          {modifiedDate(hire_date)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Licencia: {""}
        <span className="font-normal normal-case text-black">
          {license_number}
        </span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
          onClick={() => updateDriver(driver)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
          onClick={() => deleteDriver(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

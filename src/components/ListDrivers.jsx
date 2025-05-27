import useDrivers from "../hooks/useDrivers";
import { Driver } from "./Driver";

export const ListDrivers = () => {
  const { drivers } = useDrivers();

  return (
    <>
      {drivers?.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de conductores
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Conductores</span>
          </p>

          {drivers.map((driver) => (
            <Driver key={driver.id} driver={driver} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No Hay Conductores
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando conductores {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </>
  );
};

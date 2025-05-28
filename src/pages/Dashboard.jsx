import { useContext } from "react";
import DashboardContext from "../context/DashboardProvider";

export const Dashboard = () => {
  const { counts } = useContext(DashboardContext);
  const { users, drivers, vehicles, trips } = counts;

  return (
    <>
      <section className="flex grow justify-center items-center h-5/6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 w-2/3">
          <div className="flex flex-col rounded-2xl bg-white shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center">
              <span className="material-symbols-outlined m-1">
                account_circle
              </span>
              <div className="text-sm text-gray-500">Usuarios creados</div>
            </div>
            <div className="text-3xl font-semibold  text-indigo-600 mt-1">
              {users || 0}
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center">
              <span className="material-symbols-outlined m-1">
                search_hands_free
              </span>
              <div className="text-sm text-gray-500">Conductores creados</div>
            </div>
            <div className="text-3xl font-semibold  text-indigo-600 mt-1">
              {drivers || 0}
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center">
              <span className="material-symbols-outlined m-1">
                directions_car
              </span>
              <div className="text-sm text-gray-500">Vehiculos creados</div>
            </div>
            <div className="text-3xl font-semibold  text-indigo-600 mt-1">
              {vehicles || 0}
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center">
              <span className="material-symbols-outlined m-1">route</span>
              <div className="text-sm text-gray-500">Viajes del día de hoy</div>
            </div>
            <div className="text-3xl font-semibold  text-indigo-600 mt-1">
              {trips || 0}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

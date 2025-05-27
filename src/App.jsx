import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
<<<<<<< Updated upstream
import { Drivers } from "./pages/Drivers";
import { Register } from "./pages/Register";
import { AuthProvider } from './context/AuthProvider'
import { VehiclesProvider } from './context/VehicleProvider'
import { Dashboard } from "./pages/Dashboard";
import RutaProtegida  from "./layout/RutaProtegida";
import { RegisterVehicle } from "./pages/RegisterVehicle";
=======
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import { VehiclesProvider } from "./context/VehicleProvider";
import { Dashboard } from "./pages/Dashboard";
import RutaProtegida from "./layout/RutaProtegida";
import { RegisterVehicle } from "./pages/RegisterVehicle";
import { RegisterDrivers } from "./pages/RegisterDrivers";
import { DriversProvider } from "./context/DriverProvider";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VehiclesProvider>
<<<<<<< Updated upstream
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<Dashboard />} />
              <Route path="drivers" element={<Drivers/>} />
              <Route path="vehicles" element={<RegisterVehicle/>} />
            </Route>
            {/* <Route path="/*" element={<MainRoutes />} /> */}
          </Routes>
=======
          <DriversProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route path="/admin" element={<RutaProtegida />}>
                <Route index element={<Dashboard />} />
                <Route path="drivers" element={<RegisterDrivers />} />
                <Route path="vehicles" element={<RegisterVehicle />} />
              </Route>
              {/* <Route path="/*" element={<MainRoutes />} /> */}
            </Routes>
          </DriversProvider>
>>>>>>> Stashed changes
        </VehiclesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

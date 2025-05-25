import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { Drivers } from "./pages/Drivers";
import { Register } from "./pages/Register";
import { AuthProvider } from './context/AuthProvider'
import { VehiclesProvider } from './context/VehicleProvider'
import { Dashboard } from "./pages/Dashboard";
import RutaProtegida  from "./layout/RutaProtegida";
import { RegisterVehicle } from "./pages/RegisterVehicle";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VehiclesProvider>
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
        </VehiclesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import { VehiclesProvider } from "./context/VehicleProvider";
import { Dashboard } from "./pages/Dashboard";
import RutaProtegida from "./layout/RutaProtegida";
import { RegisterVehicle } from "./pages/RegisterVehicle";
import { RegisterDrivers } from "./pages/RegisterDrivers";
import { DriversProvider } from "./context/DriverProvider";
import { DashboardProvider } from "./context/DashboardProvider";
import { RegisterRoute } from "./pages/RegisterRoute";
import { RoutesProvider } from './context/RouteProvider'
import { RegisterAssignment } from "./pages/RegisterAssignment";
import { AssignmentsProvider } from './context/AssignmentProvider'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <VehiclesProvider>
          <AssignmentsProvider>
            <RoutesProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/admin" element={<RutaProtegida />}>
                  <Route
                    index
                    element={
                      <DashboardProvider>
                        <Dashboard />
                      </DashboardProvider>
                    }
                  ></Route>
                  <Route
                    path="drivers"
                    element={
                      <DriversProvider>
                        <RegisterDrivers />
                      </DriversProvider>
                    }
                  />
                  <Route path="vehicles" element={<RegisterVehicle />} />
                  <Route path="assignments" element={<RegisterAssignment/>} />
                  <Route path="routes" element={<RegisterRoute/>} />
                </Route>
                {/* <Route path="/*" element={<MainRoutes />} /> */}
              </Routes>  
            </RoutesProvider>
          </AssignmentsProvider>
        </VehiclesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

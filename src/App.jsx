import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { Drivers } from "./pages/Drivers";
import { Register } from "./pages/Register";
import { AuthProvider } from './context/AuthProvider'
import { Dashboard } from "./pages/Dashboard";
import RutaProtegida  from "./layout/RutaProtegida";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/admin" element={<RutaProtegida />}>
            <Route index element={<Dashboard />} />
            <Route path="drivers" element={<Drivers/>} />
          </Route>
          {/* <Route path="/*" element={<MainRoutes />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

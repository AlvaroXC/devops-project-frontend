import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Footer } from "../pages/Footer";

const RutaProtegida = () => {
  const { auth, loading } = useAuth();

  if (loading) return "Cargando...";

  return (
    <>
      <div className="h-full flex flex-col">
        {auth?.id ? <Outlet /> : <Navigate to="/" />}
        <Footer />
      </div>
    </>
  );
};

export default RutaProtegida;

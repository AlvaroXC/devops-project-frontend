import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const RutaProtegida = () => {
  const { auth, loading } = useAuth();

  if (loading) return "Cargando...";

  return (
    <>
      <Header/>
          {auth?.id ? (
            <main className="container mx-auto mt-10"> 
              <Outlet />
            </main>
            ) : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default RutaProtegida;

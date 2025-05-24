import { Outlet } from "react-router-dom";
import { Footer } from "../pages/Footer";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

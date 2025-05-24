import { Dashboard } from "../pages/Dashboard";
import { Drivers } from "../pages/Drivers";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

export const MainRoutes = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/drivers" element={<Drivers />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

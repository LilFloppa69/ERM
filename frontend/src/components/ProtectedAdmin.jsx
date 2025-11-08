import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

export default function ProtectedAdmin() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  if (!user || user.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <div className="flex h-screen">
      <NavbarAdmin />
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

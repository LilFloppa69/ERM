import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen">
      {children}
      <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

import React from "react";
import Header from "./custom/Header"; // adjust path if needed
import { Outlet } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet /> {/* This renders the matched route's element */}
    </>
  );
};

export default RootLayout;

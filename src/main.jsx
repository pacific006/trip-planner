import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]";
import MyTrips from "./my-trips";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip></CreateTrip>,
  },
  {
    path: "/view-trip/:tripId",
    element: <Viewtrip></Viewtrip>,
  },
  {
    path: "/my-trips",
    element: <MyTrips></MyTrips>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
      {/* <App /> */}
    </GoogleOAuthProvider>
  </StrictMode>
);

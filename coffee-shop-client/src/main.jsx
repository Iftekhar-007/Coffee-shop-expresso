import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Components/Home.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/coffees"),
        Component: Home,
      },
      {
        path: `/coffees/:id`,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      { path: "/addcoffee", Component: AddCoffee },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

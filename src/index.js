import React from "react";
import App2 from './App2';
import Notas from './Component/Notas';
import About from './Component/About';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App2 />}/>
      <Route path="notas" element={<Notas />}/>
      <Route path="about" element={<About />}/>
    </>
  ));

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

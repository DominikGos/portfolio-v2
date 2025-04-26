import { JSX } from "react";
import Home from "./pages/Home";

export interface AppRoute {
    path: string;
    element: JSX.Element;
  }
  
export const routes: AppRoute[] = [
    { path : '/', element: <Home /> },
];
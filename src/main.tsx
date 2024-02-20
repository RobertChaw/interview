import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import Detail from "./detail";
import Index from "./index";
import Test from "./Test.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path={"/"}>
      <Route path={"/"} element={<Index/>}/>
      <Route path={"/detail"} element={<Detail/>}/>
      <Route path={"/test"} element={<Test/>}/>
  </Route>),
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

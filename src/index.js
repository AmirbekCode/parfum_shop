import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store"
import { Provider }  from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      closeOnClick
      theme="dark"
      draggable
      pauseOnHover
/>
      <App />      
    </Provider>   
    </BrowserRouter>
  </React.StrictMode>
);

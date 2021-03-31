import React from "react";
import Sidebar from "./components/Sidebar";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Sidebar />
      <span>&nbsp;&nbsp;</span>
      {/* REVIEW: Replace with margin or padding */}
      <Routes />
    </>
  );
}

export default App;

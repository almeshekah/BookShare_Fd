import React from "react";
import Navigation from "./components/Navigation";
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
      <Navigation />
      <span>&nbsp;&nbsp;</span>
      <Routes />
    </>
  );
}

export default App;

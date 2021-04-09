import React from "react";
import Sidebar from "./components/Sidebar";
import Routes from "./components/Routes";
import { GlobalStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledDivider } from "./styles";

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
        style={{ marginTop: "4.5rem" }}
      />
      <Sidebar />
      <StyledDivider>
        <Routes />
      </StyledDivider>
    </>
  );
}

export default App;

import styled, { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#413b89",
      secondary: "#c2a792",
    },
    secondary: {
      main: "#f3e7dd",
    },

    success: {
      main: "#57cc99",
      secondary: "#ABE5CB",
    },

    error: {
      main: "#e63946",
      secondary: "#F29CA2",
    },
  },
});

export const GlobalStyle = createGlobalStyle`
  html {
    --primary-color: #413b89;
    --secondary-color: #f3e7dd;
    --light-color:#ffffff
  --dark-color: #333333;
  /* --light-color: #f4f4f4; */
 
  }

  * {
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: #ffffff;
  color: #413b89;
height: 100%;
width: 100%;


}
`;

export const FormStyled = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  margin: 10px auto;
  padding: 20px;
  background: var(--secondary-color);
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
`;
export const FieldSetStyled = styled.fieldset`
  border: none;
`;
export const LegendStyled = styled.legend`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
`;

export const InputFieldStyled = styled.input`
  font-family: "Roboto", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 18px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #ffffff;
  /* background-color: var(--light-color); */
  color: var(--primary-color);
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`;

export const FormAddButtonStyled = styled.button`
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #fff;
  margin: 0 auto;
  background: var(--primary-color);
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid var(--primary-color);
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  &:hover {
    /* background: var(--light-color); */
    background: #c2a792;
  }
`;

export const AddButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: var(--primary-color);
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  // float: right;
  // display: flex;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  block {
    display: block;
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const StyledDivider = styled.div`
  margin-top: 1rem;
`;

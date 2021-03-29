import styled from "styled-components";

export const GoButtonStyled = styled.button`
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  background-color: #e63946;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  text-align: center;
  color: #1d3557;
  display: flex;
  flex-direction: column;
  background-color: #fafdf9;
  border: 1px solid grey;
  border-radius: 5px;
  width: 500px;
  height: 500px;
  padding: 25px;
`;

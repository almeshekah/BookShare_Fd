import styled from "styled-components";

export const Shadow = styled.div`
  /* align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px; */
  /* align-items: flex-end;
	display: flex;
	height: 831px;
	overflow: hidden;
	width: 861px; */
  border-radius: 50px;
  background: linear-gradient(145deg, #9ed2dd, #bcf9ff);
  box-shadow: 20px 20px 60px #96c6d0, -20px -20px 60px #caffff;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 15px;
  flex-direction: column;
  position: relative;
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;
  margin-bottom: 50px;
`;

export const HoverEff = styled.div`
  border-radius: 15px;
  border-radius: 50px;

  z-index: 1;
  &:hover {
    border-radius: 50px;
    background: linear-gradient(145deg, #a7bfe6, #c6e3ff);
    box-shadow: 30px 30px 60px #9db4d9, -30px -30px 60px #d5f4ff;
  }
`;

export const CardHeader = styled.div`
  flex-direction: column;
  color: $white;
  margin: 25px;
`;

export const ParentS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* display: flex;
  flex-direction: row; */
  /* flex-wrap: nowrap; */
  /* justify-content: center; */
  align-items: center;
  align-content: center;
  margin-left: 80%;
  padding: 10%;
`;

export const ChildS = styled.div`
  flex: 1 0 20%; /* explanation below */
  margin: 15px;
  /* height: 100px; */
  background-color: blue;
`;

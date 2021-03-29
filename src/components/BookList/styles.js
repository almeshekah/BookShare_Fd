import styled from "styled-components";

export const ListWrapper = styled.div`
  /* align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px; */
  align-items: flex-end;
  display: flex;
  height: 831px;
  overflow: hidden;
  width: 861px;
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

export const Img = styled.img`
  margin-top: -5vw;
  img {
    width: 200px;
  }
`;

export const CardHeader = styled.div`
  flex-direction: column;
  color: $white;
  margin: 25px 0;
`;

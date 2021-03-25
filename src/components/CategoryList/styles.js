import styled from "styled-components";

export const Image = styled.img`
   {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const Card = styled.div`
   {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 11%;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  &.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    margin-left: 25px;
    margin-right: 23px;
    margin-top: 15px;
    margin-down: 15px;
  }
`;
export const Title = styled.h6`
  text-align: center;
`;

export const CategoryTitle = styled.h3`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

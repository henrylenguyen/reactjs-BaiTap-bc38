import React from "react";
import styled from "styled-components";

const CardListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 30px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 200px 30px;
  }
`;
const CardList = (props) => {
  return <CardListStyle>{props.children}</CardListStyle>;
};

export default CardList;

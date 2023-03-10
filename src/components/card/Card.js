import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

/**
 * Viết hoa chữ cái đầu của mỗi từ
 * const StyledCard = styled.tag(div,a,p,h1,span,section,.)``
 *
 */
const StyledCard = styled.div`
  position: relative;
`;

const StyledImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: calc(100% - 36px);
  transform: translate(-50%, 50%);
  background: #fff;
  z-index: 99;
  border-radius: 15px;
  padding: 30px;
`;
const StyledImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const CardButton = styled.button`
  width: 150px;
  padding: 9px;
  ${(props) =>
    props.btnSecondary &&
    css`
      background: linear-gradient(to right top, #fc6c8f, #ffb86c);
    `};
  ${(props) =>
    !props.btnSecondary &&
    css`
      background: linear-gradient(to right top, #6a5af9, #d66efd);
    `};
  color: #fff;
  font-size: 15px;
  border-radius: 1rem;
  font-weight: bold;
  margin: 2px;
`;
const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  color: red;
  text-transform: uppercase;
`;
const CardButtonGroup = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Desc = styled.div`
  text-align: center;
  font-size: 13px;
  margin: 2rem 0;
`;
const Card = ({
  to,
  image,
  title,
  btnSecondary,
  href,
  hrefOthers,
  desc,
  use,
}) => {
  return (
    <StyledCard>
      <StyledImage>
        <StyledImg src={image} alt={title} />
      </StyledImage>
      <CardContent>
        <CardBottom>
          <CardTitle>{title}</CardTitle>
          <Desc>
            <p className="font-semibold italic mb-5">{desc}</p>
            <p className="italic">{use}</p>
          </Desc>
          <CardButtonGroup>
            {to === undefined ? (
              <a href={hrefOthers}>
                <CardButton>Live</CardButton>
              </a>
            ) : (
              <Link to={to}>
                <CardButton>Live</CardButton>
              </Link>
            )}
            <a href={href}>
              <CardButton btnSecondary={btnSecondary}>View Source</CardButton>
            </a>
          </CardButtonGroup>
        </CardBottom>
      </CardContent>
    </StyledCard>
  );
};

export default Card;

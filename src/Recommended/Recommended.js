import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const RecommendedContainer = styled.div`
  margin-left: 20rem;
`;

const RecommendedTitle = styled.h2`
  margin-left: 20rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
`;

const RecommendedFlex = styled.div`
  display: flex;
`;

const Recommended = ({ handleClick }) => {
  return (
    <RecommendedContainer>
      <RecommendedTitle>Recommended</RecommendedTitle>
      <RecommendedFlex>
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </RecommendedFlex>
    </RecommendedContainer>
  );
};

export default Recommended;

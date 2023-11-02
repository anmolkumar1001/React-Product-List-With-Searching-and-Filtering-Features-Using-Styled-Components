import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  border-bottom: 2px solid #f3f3f3;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  z-index: 999;
  margin-left: 2rem;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  margin-right: 20px;
  border-radius: 5px;
  position: relative;
  width: 14rem;
`;

const Nav = ({ handleInputChange, query }) => {
  return (
    <NavContainer>
      <div className="nav-container">
        <SearchInput
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </NavContainer>
  );
};

export default Nav;

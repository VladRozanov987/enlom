import { useState } from "react";
import styled from "styled-components";
import Links from "./Links.component";

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMobileNav>
      <Burger onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      {isOpen && (
        <Links isMobile={true} closeMobMenu={() => setIsOpen(false)} />
      )}
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Burger = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: absolute;
  right: 5%;
  z-index: 10;

  span {
    width: 100%;
    height: 3px;
    background: black;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &.open span:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: translateY(-13px) rotate(-45deg);
  }
`;

export default MobNav;

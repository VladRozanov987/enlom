// Styled
import styled from "styled-components";

// Components
import MobNav from "./MobNav.component";
import DeskNav from "./DeskNav.component";

// Icons
import enlom from "../../assets/icons/Logo.png";

// Router
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container d-flex">
        <div className="links">
          <Link to="/">
            <img className="logo-img" src={enlom} alt="logo" />
          </Link>
          <DeskNav />
          <LanguageSwitcher />

          <MobNav />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.5);

  .links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-img {
    max-width: 200px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    .logo-img {
      max-width: 100px;
    }
  }
`;

export default Header;

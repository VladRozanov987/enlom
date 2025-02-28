// Styled
import styled from "styled-components";

// Components
import MobNav from "./MobNav.component";
import DeskNav from "./DeskNav.component";

// Icons
import enlom from "../../assets/icons/ENLOM.png";

// Router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container d-flex">
        <Link to="/">
          <img className="logo-img" src={enlom} alt="logo" />
        </Link>
        <DeskNav />
        <MobNav />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.1);

  .logo-img {
    max-width: 200px;
  }
`;

export default Header;

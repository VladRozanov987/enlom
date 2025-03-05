// Styled
import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

const Links = (props) => {
  const { t } = useTranslation();

  return (
    <StyledLinks>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="/">{t("nav.home")}</Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="partners">{t("nav.partners")}</Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="contacts">{t("nav.contacts")}</Link>
        </li>
        <button>
          <a href="mailto:enlombg@gmail.com">{t("nav.contact_us")}</a>
        </button>
      </ul>
    </StyledLinks>
  );
};

const StyledLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    button {
      display: block;
      font-size: 24px;
      padding: 12px;
      margin: 25px 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #776355;
      backdrop-filter: blur(10px);
      li {
        margin: 25px 0;
        a {
          font-size: 32px;
        }
      }
    }
  }
`;

export default Links;

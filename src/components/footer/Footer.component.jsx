// Styled
import styled from "styled-components";

// Icons
import enlom from "../../assets/icons/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="d-flex">
          <div className="logo-wrapper">
            <img className="logo-img" src={enlom} alt="logo" />
            <h4 className="footer-text">© 2025 Enlom</h4>
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="partners">Партнери</Link>
              </li>
              <li>
                <Link to="contacts">Контакти</Link>
              </li>
              <li>
                {" "}
                <button className="footer-btn">Зв'яжіться з нами</button>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
  background: #2e2e2e;

  .d-flex {
    align-items: center;
  }

  .logo-img {
    max-width: 200px;
  }

  .footer-text {
    margin-top: 12px;
  }

  .links-wrapper {
    ul {
      display: flex;
      align-items: center;
      li:not(:last-child) {
        margin-right: 40px;
      }
    }
    .footer-btn {
      padding: 14px 35px;
    }
  }

  @media screen and (max-width: 928px) {
    .logo-img {
      max-width: 130px;
    }
    .links-wrapper {
      ul {
        li:not(:last-child) {
          margin-right: 20px;
        }
        a,
        button {
          font-size: 14px;
        }
      }
      .footer-btn {
        padding: 10px 24px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .logo-img {
      max-width: 130px;
    }
    .links-wrapper {
      ul {
        flex-direction: column;
        li {
          margin-right: 0;
          margin: 4px 0;
        }
        li:not(:last-child) {
          margin-right: 0;
        }
      }
    }
  }
`;

export default Footer;

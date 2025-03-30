// Styled
import styled from "styled-components";

// Icons
import enlom from "../../assets/icons/Logo.png";
import { Link } from "react-router-dom";

// Translation
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <div className="container">
        <div className="d-flex">
          <div className="logo-wrapper">
            <img className="logo-img" src={enlom} alt="logo" />
            <h4 className="footer-text">© 2025 Enlom</h4>
          </div>
          <div className="numbers-wrapper">
            <p>{t("contacts.our_numbers")}</p>
            <a href="tel:+359885028098">+359 88 502 8098</a>
            <a href="tel:+380505581181">+380 50 558 1181</a>
            <a href="tel:+380685836843">+380 68 583 6843</a>
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="/">{t("nav.home")}</Link>
              </li>
              <li>
                <Link to="partners">{t("nav.partners")}</Link>
              </li>
              <li>
                <Link to="contacts">{t("nav.contacts")}</Link>
              </li>
              <button className="footer-btn">
                <a href="mailto:enlombg@gmail.com">{t("nav.contact_us")}</a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
  background: #4b4b4b;

  .d-flex {
    align-items: center;
  }

  .logo-img {
    max-width: 200px;
  }

  .footer-text {
    margin-top: 12px;
  }

  .numbers-wrapper {
    display: flex;
    flex-direction: column;
    p,
    a {
      padding: 4px 0;
    }
  }

  .links-wrapper {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        padding: 4px 0;
      }
    }
  }
  .footer-btn {
    padding: 14px 35px;
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
    .d-flex {
      flex-direction: column-reverse;
    }
    .logo-img {
      max-width: 130px;
    }
    .links-wrapper {
      ul {
        li {
          margin-right: 0;
          margin: 4px 0;
        }
        li:not(:last-child) {
          margin-right: 0;
        }
      }
    }

    .logo-wrapper,
    .numbers-wrapper,
    .links-wrapper {
      padding: 12px;
      text-align: center;
    }
  }
`;

export default Footer;

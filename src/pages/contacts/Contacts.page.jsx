// Styled
import styled from "styled-components";

// IMG
import mainBg from "../../assets/img/main.jpg";

// Components
import ContactsInfo from "./ContactsInfo.component";

// Translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <StyledContacts>
        <div className="container">
          <div className="contacts-title">
            <h1 data-aos="fade-left">
              {" "}
              <span>{t("contacts.our")}</span> {t("contacts.title")}
            </h1>
          </div>
        </div>
      </StyledContacts>
      <ContactsInfo />
    </>
  );
};

const StyledContacts = styled.div`
  height: 100vh;
  padding-top: 120px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${mainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .contacts-title {
    position: absolute;
    top: 70%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }

  @media screen and (max-width: 928px) {
    .contacts-title {
      position: absolute;
      top: 80%;
      left: 50%;
      max-width: 500px;
      transform: translateX(-50%);
    }
    h1 {
      text-align: center;
      font-size: 44px;
    }
  }
`;

export default Contacts;

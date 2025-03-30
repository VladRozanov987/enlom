// Styled
import styled from "styled-components";

// IMG
import secBg from "../../assets/img/secBg.jpg";

// Translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledServices>
      <div className="container">
        <div className="list-wrapper">
          <div data-aos="fade-up" className="list-item">
            <h4 className="title">{t("services.title")}</h4>
            <ul className="list">
              <li className="text">⚙️ {t("services.items.0")}</li>
              <li className="text">⚙️ {t("services.items.1")}</li>
              <li className="text">⚙️ {t("services.items.2")}</li>
              <li className="text">⚙️ {t("services.items.3")}</li>
              <li className="text">⚙️ {t("services.items.4")}</li>
            </ul>
          </div>
          <div data-aos="fade-up" className="list-item">
            <h4 className="title">{t("services.why_us_title")}</h4>
            <ul className="list">
              <li className="text">⚙️ {t("services.why_us.0")}</li>
              <li className="text">⚙️ {t("services.why_us.1")}</li>
              <li className="text">⚙️ {t("services.why_us.2")}</li>
              <li className="text">⚙️ {t("services.why_us.3")}</li>
              <li className="text">⚙️ {t("services.why_us.4")}</li>
              <li className="text">⚙️ {t("services.why_us.5")}</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 300px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${secBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */

  .list-wrapper {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 42px;
  }

  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    max-width: 600px;
    width: 100%;
    border-radius: 14px;
    padding: 12px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.15);
  }

  .title {
    font-size: 40px;
    margin-bottom: 24px;
  }

  .text {
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 1328px) {
    padding: 250px 0;
    .title {
      font-size: 24px;
      margin-bottom: 24px;
    }

    .text {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }

  @media screen and (max-width: 928px) {
    padding: 150px 0;
    .list-wrapper {
      display: flex;
      flex-direction: column;
      gap: 34px;
      align-items: center;
      justify-content: space-between;
    }
    .title {
      font-size: 24px;
      margin-bottom: 24px;
    }

    .text {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }
`;

export default Services;

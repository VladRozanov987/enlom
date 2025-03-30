// Styled
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Secondary = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledSecondary>
      <div className="container">
        <p data-aos="fade-up" data-aos-duration="1000" className="text">
          <span>{t("secondary.we")}</span> {t("secondary.reputation")}
        </p>
        <p data-aos="fade-up" data-aos-duration="1000" className="text">
          {t("secondary.contact")}
        </p>
        <p data-aos="fade-up" data-aos-duration="1000" className="text">
          <span>{t("main.together")}</span> {t("main.reliability")}
        </p>
      </div>
    </StyledSecondary>
  );
};

const StyledSecondary = styled.section`
  padding: 80px 0;
  background: #2e2e2e;

  .text {
    font-size: 36px;
    text-align: center;

    span {
      font-size: 56px;
      color: #c9453b;
    }
  }

  .text:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 928px) {
    padding: 40px 0;
    .text {
      font-size: 24px;

      span {
        font-size: 32px;
      }
    }
  }
`;

export default Secondary;

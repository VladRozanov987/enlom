// Styled
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Description = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledDes>
      <div className="container">
        <h3 data-aos="fade-up" className="title">
          {t("description.title")}
        </h3>
        <p data-aos="fade-up" className="text">
          {t("description.text")}
        </p>
      </div>
    </StyledDes>
  );
};

const StyledDes = styled.section`
  padding: 80px 0;
  background: #2e2e2e;

  .title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 24px;
  }

  .text {
    text-align: center;
    font-size: 24px;
  }

  @media screen and (max-width: 928px) {
    padding: 40px 0;
    .title {
      font-size: 24px;
    }

    .text {
      font-size: 16px;
    }
  }
`;

export default Description;

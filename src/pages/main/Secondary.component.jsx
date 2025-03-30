// Styled
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

const Secondary = () => {
  const { t } = useTranslation();

  return (
    <StyledSecondary>
      <div className="container">
        <p className="text">
          <span>{t("secondary.we")}</span> {t("secondary.reputation")}
        </p>
        <p className="text">{t("secondary.contact")}</p>
        <p className="text">
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

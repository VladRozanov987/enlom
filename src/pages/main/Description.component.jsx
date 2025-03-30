// Styled
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();

  return (
    <StyledDes>
      <div className="container">
        <h3 className="title">{t("description.title")}</h3>
        <p className="text">{t("description.text")}</p>
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

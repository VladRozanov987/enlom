import styled from "styled-components";

const Description = () => {
  return (
    <StyledDes>
      <div className="container">
        <h3 className="title">Про компанію</h3>
        <p className="text">
          Ласкаво просимо до ENLOM — вашого надійного партнера у сфері продажу
          авіаційних деталей та техніки. Наша компанія базується в Болгарії, але
          ми відкриті до співпраці в міжнародному форматі, пропонуючи якісні
          рішення для авіаційної галузі по всьому світу.
        </p>
      </div>
    </StyledDes>
  );
};

const StyledDes = styled.section`
  padding: 80px 0;
  background: #2e2e2e;
  border-bottom: 2px solid #8f8f8f;

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

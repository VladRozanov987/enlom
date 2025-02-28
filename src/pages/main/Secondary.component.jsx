// Styled
import styled from "styled-components";

const Secondary = () => {
  return (
    <StyledSecondary>
      <div className="container">
        <p className="text">
          <span>Ми</span> пишаємося своєю репутацією надійного постачальника,
          який забезпечує високоякісні рішення для авіаційної галузі. Наш
          пріоритет — задоволення потреб клієнтів та надійність продукції.
        </p>
        <p className="text">
          Готові до співпраці? Зв'яжіться з нами для отримання детальної
          інформації про наші послуги.
        </p>
        <p className="text">
          {" "}
          <span>Разом</span> ми забезпечуємо надійність польотів!
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
`;

export default Secondary;

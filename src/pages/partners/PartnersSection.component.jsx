// Styled
import styled from "styled-components";

// IMG
import fed from "../../assets/icons/fed.svg";
import aviagrade from "../../assets/icons/aviagrade.svg";

const PartnersSection = () => {
  return (
    <StyledSection>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">
            <a href="https://www.fed.com.ua/ua/index.html">
              <img src={fed} alt="FED" className="card-img" />
              <h3>FED</h3>
              <p>
                Компанія ENLOM виступає офіційним представником компанії FED на
                території Болгарії, пропонуючи високоякісні рішення для
                промислових та авіаційних потреб. Наше партнерство ґрунтується
                на професійному підході, сучасних технологіях та довірчих
                відносинах.
              </p>
              <p>
                FED – провідний виробник прецизійного обладнання та компонентів,
                які використовуються в авіаційній, космічній та інших галузях
                промисловості. Завдяки нашій співпраці, клієнти у Болгарії
                отримують доступ до передових технологій, надійного обладнання
                та професійного супроводу.
              </p>
              <p>
                ENLOM гарантує високий рівень сервісу, своєчасну доставку та
                індивідуальний підхід до кожного замовника. Ми прагнемо сприяти
                розвитку бізнесу наших клієнтів, надаючи сучасні технологічні
                рішення для ефективної роботи.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://aviagrade.com/">
              <img src={aviagrade} alt="Aviagrade" className="card-img" />
              <h3>Avia Grade</h3>
              <p>
                Компанія ENLOM є офіційним представником компанії Avia Grade в
                Болгарії. Наша співпраця заснована на довірі, професіоналізмі та
                прагненні до найвищих стандартів якості.
              </p>
              <p>
                Avia Grade – це визнаний лідер у сфері авіаційного обладнання та
                технологічних рішень, що пропонує інноваційні продукти для
                авіаційної галузі. Завдяки нашому партнерству, ми забезпечуємо
                надійне постачання, технічну підтримку та консультаційні послуги
                для клієнтів на території Болгарії.
              </p>
              <p>
                ENLOM гарантує високу якість обслуговування, оперативність у
                виконанні замовлень та індивідуальний підхід до кожного клієнта.
                Наша місія – сприяти розвитку авіаційної галузі, надаючи сучасні
                рішення та підтримку для наших партнерів.
              </p>
            </a>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 80px 0;
  background: #f3f3f3;

  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    gap: 50px;
  }

  .card {
    padding: 24px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    transition: all, 0.5s;

    .card-img {
      max-width: 100%;
      height: 300px;
      background: #fff;
      margin-bottom: 24px;
      border-radius: 8px;
    }

    p:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .card:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 928px) {
    padding: 40px 0;
    .card-wrapper {
      flex-direction: column;
      gap: 24px;
    }
    .card {
      padding: 12px;
      p {
        margin-bottom: 8px;
        font-size: 16px;
      }
      p:not(:last-child) {
        margin-bottom: 8px;
      }
      .card-img {
        height: 150px;
      }
    }
  }
`;

export default PartnersSection;

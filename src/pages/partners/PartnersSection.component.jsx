// Styled
import styled from "styled-components";

// IMG
import fed from "../../assets/icons/fed.svg";
import aviagrade from "../../assets/icons/aviagrade.svg";
import aviabaltika from "../../assets/icons/AviaBaltika.png";
import fortop from "../../assets/icons/fortop.png";
import h3o from "../../assets/icons/h3o.jpeg";
import LOTN from "../../assets/icons/LOTN.jpg";
import spivdruzh from "../../assets/icons/spivdruzh.png";
import terem from "../../assets/icons/terem.jpeg";
import haspet from "../../assets/icons/haspet.jpeg";

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
                FED – провідний виробник прецизійного обладнання та компонентів,
                які використовуються в авіаційній, космічній та інших галузях
                промисловості. Завдяки нашій співпраці, клієнти у Болгарії
                отримують доступ до передових технологій, надійного обладнання
                та професійного супроводу.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://aviagrade.com/">
              <img src={aviagrade} alt="Aviagrade" className="card-img" />
              <h3>Avia Grade</h3>
              <p>
                Avia Grade – це визнаний лідер у сфері авіаційного обладнання та
                технологічних рішень, що пропонує інноваційні продукти для
                авіаційної галузі. Завдяки нашому партнерству, ми забезпечуємо
                надійне постачання, технічну підтримку та консультаційні послуги
                для клієнтів на території Болгарії.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://terem.bg/en/">
              <img src={terem} alt="«TEREM-HOLDING» EAD" className="card-img" />
              <h3>«TEREM-HOLDING» EAD</h3>
              <p>
                Державна компанія Міністерства оборони Болгарії, яка
                спеціалізується на ремонті, модернізації та
                матеріально-технічному забезпеченні авіаційної техніки, кораблів
                і суден, бронетехніки, стрілецької зброї, артилерійського та
                ракетного озброєння, боєприпасів, засобів радіолокації та
                зв’язку.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://lotn.sk/">
              <img
                src={LOTN}
                alt="Letecké opravovne Trenčín, a.s. (LOTN)"
                className="card-img"
              />
              <h3>Letecké opravovne Trenčín, a.s. (LOTN)</h3>
              <p>
                Компанія з технічного обслуговування, ремонту та модернізації як
                літаків, так і вертольотів державної та цивільної авіації.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="http://www.aviabaltika.com/">
              <img
                src={aviabaltika}
                alt="Aviabaltika Aviation Ltd."
                className="card-img"
              />
              <h3>Aviabaltika Aviation Ltd.</h3>
              <p>
                Компанія з технічного обслуговування, ремонту та модернізації
                вертольотів державної та цивільної авіації.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://sodraviastroy.com/en/">
              <img
                src={spivdruzh}
                alt="Spivdruzhnist Avia Bud LTD"
                className="card-img"
              />
              <h3>Spivdruzhnist Avia Bud LTD</h3>
              <p>
                Компанія, яка спеціалізуєьтся на проектуванні, інжинірінгу та
                віртуальному моделюванні, виробництві виробів із скло- та
                вуглецевого волокна, виготовленні виробів за ескізами та
                кресленнями замовника, ремонтом виробів з композитних матеріалів
                та склопластику, фарбуванні тощо.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://h3ops.com/ua">
              <img src={h3o} alt="H3Operations" className="card-img" />
              <h3>H3Operations</h3>
              <p>
                Компанія, яка спеціалізується на Hot/High/Heavy перевезеннях,
                приділяючи особливу увагу міжнародним миротворчим, гуманітарним
                та спеціальним місіям, а також будівельно-монтажним роботам.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="http://fortop.pl/?page_id=173&lang=en">
              <img src={fortop} alt="FORTOP Sp. z o. o." className="card-img" />
              <h3>FORTOP Sp. z o. o.</h3>
              <p>
                Компанія, яка спеціалізується на закупівлі та продажі товарів на
                замовлення, логістичній підтримці, а також комплексній
                реалізації зовнішньоекономічних контрактів щодо постачання
                товарів.
              </p>
            </a>
          </div>
          <div className="card">
            <a href="https://haspet.ae/">
              <img src={haspet} alt="Haspet (FZE)" className="card-img" />
              <h3>Haspet (FZE)</h3>
              <p>
                Компанія з постачання запчастин для авіаційної техніки з
                багаторічним досвідом.
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

    h3 {
      margin-bottom: 12px;
    }

    .card-img {
      max-width: 100%;
      height: 200px;
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

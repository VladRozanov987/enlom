// Styled
import styled from "styled-components";

// IMG
import secBg from "../../assets/img/secBg.jpg";

const Services = () => {
  return (
    <StyledServices>
      <div className="container">
        <div className="list-wrapper">
          <div className="list-item">
            <h4 className="title">Наші Послуги</h4>
            <ul className="list">
              <li className="text">⚙️ Продаж авіаційних запасних частин</li>
              <li className="text">⚙️ Постачання авіаційного обладнання</li>
              <li className="text">⚙️ Консультації щодо вибору деталей</li>
              <li className="text">⚙️ Логістика та доставка</li>
              <li className="text">⚙️ Гарантійне обслуговування</li>
            </ul>
          </div>
          <div className="list-item">
            <h4 className="title">Чому обирають нас</h4>
            <ul className="list">
              <li className="text">
                ⚙️ Широкий асортимент сертифікованих деталей
              </li>
              <li className="text">⚙️ Партнерство з провідними виробниками</li>
              <li className="text">⚙️ Конкурентні ціни</li>
              <li className="text">
                ⚙️ Індивідуальний підхід до кожного клієнта
              </li>
              <li className="text">⚙️ Оперативна доставка по всьому світу</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  padding: 300px 80px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${secBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .list-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 8px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.15);
  }

  .title {
    font-size: 40px;
    margin-bottom: 24px;
  }

  .text {
    font-size: 24px;
    /* color: #bebebe; */
  }
`;

export default Services;

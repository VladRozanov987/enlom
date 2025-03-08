// Styled
import styled from "styled-components";

const ContactsInfo = () => {
  return (
    <>
      <StyledContactsInfo>
        <div className="container">
          <p className="text">
            <span>Адреса:</span>
          </p>
          <p className="text">
            Країна: БОЛГАРІЯ, Область: Бургас, Громада: Несебр, Населений пункт:
            м. Несебр
          </p>
          <p className="text">Поштовий індекс 8240</p>
          <p className="text">
            Район: ЖК Сонячний Берег-Захід, Вулиця/бульвар: комплекс Віла
            Валенсія, поверх 3, <span>квартира А45</span>
          </p>
          <p className="text">
            <span>Електронна пошта:</span>{" "}
            <a href="mailto:enlombg@gmail.com">enlombg@gmail.com</a>
          </p>
          <div className="numbers-wrapper">
            <p className="text">
              {" "}
              <span>Наші Номера</span>
            </p>
            <a href="tel:+359885028098">+359 88 502 8098</a>
            <a href="tel:+380505581181">+380 50 558 1181</a>
            <a href="tel:+380685836843">+380 68 583 6843</a>
          </div>
        </div>
      </StyledContactsInfo>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.592349033835!2d27.701933688837993!3d42.6891361306777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69e54fae529dd%3A0x2ff119e7c3af75bc!2sVilla%20Valencia!5e0!3m2!1sen!2sua!4v1740843836057!5m2!1sen!2sua"
        width="100%"
        height="500"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Villa Valencia"
      ></iframe>
    </>
  );
};

const StyledContactsInfo = styled.section`
  padding: 80px 0;
  background: #2e2e2e;

  .text {
    font-size: 24px;
    text-align: center;

    span {
      font-size: 32px;
      color: #c9453b;
    }
  }

  .numbers-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .text:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 928px) {
    padding: 40px 0;
  }
`;

export default ContactsInfo;

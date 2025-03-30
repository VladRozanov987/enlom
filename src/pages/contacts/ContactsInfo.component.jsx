// Styled
import styled from "styled-components";

// Translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactsInfo = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <StyledContactsInfo>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="1000" className="text">
            <span>{t("contacts.addresses")}</span>
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text">
            {t("contacts.country")}, {t("contacts.region")},{" "}
            {t("contacts.municipality")}, {t("contacts.city")}
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text">
            {t("contacts.postal_code")}
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text">
            {t("contacts.district")}, {t("contacts.street")}
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" className="text">
            <span>{t("contacts.email")}</span>{" "}
            <a href="mailto:enlombg@gmail.com">enlombg@gmail.com</a>
          </p>
          <div className="numbers-wrapper">
            <p data-aos="fade-up" data-aos-duration="1000" className="text">
              {" "}
              <span>{t("contacts.our_numbers")}</span>
            </p>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="tel:+359885028098"
            >
              {t("contacts.phone_1")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="tel:+380505581181"
            >
              {t("contacts.phone_2")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              up
              href="tel:+380685836843"
            >
              {t("contacts.phone_3")}
            </a>
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

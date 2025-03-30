import AOS from "aos";
import "aos/dist/aos.css"; // подключаем стили AOS
import { useEffect } from "react";

// Модифицированный код
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
import aeroPartner from "../../assets/icons/aeroPartner.jpg";

// Translation
import { useTranslation } from "react-i18next";

const PartnersSection = () => {
  const { t } = useTranslation();

  const partners = [
    { key: "fed", img: fed, link: "https://www.fed.com.ua/ua/index.html" },
    { key: "aviagrade", img: aviagrade, link: "https://aviagrade.com/" },
    { key: "terem", img: terem, link: "https://terem.bg/en/" },
    { key: "lotn", img: LOTN, link: "https://lotn.sk/" },
    {
      key: "aviabaltika",
      img: aviabaltika,
      link: "http://www.aviabaltika.com/",
    },
    { key: "spivdruzh", img: spivdruzh, link: "https://sodraviastroy.com/en/" },
    { key: "h3o", img: h3o, link: "https://h3ops.com/ua" },
    {
      key: "fortop",
      img: fortop,
      link: "http://fortop.pl/?page_id=173&lang=en",
    },
    { key: "haspet", img: haspet, link: "https://haspet.ae/" },
    {
      key: "aeroPartner",
      img: aeroPartner,
      link: "https://www.aeropartner.hr/",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <StyledSection>
      <div className="container">
        <div className="card-wrapper">
          {partners.map((partner) => (
            <div className="card" key={partner.key} data-aos="fade-up">
              <a href={partner.link}>
                <img
                  src={partner.img}
                  alt={t(`partners_section.${partner.key}.title`)}
                  className="card-img"
                />
                <h3>{t(`partners_section.${partner.key}.title`)}</h3>
                <p>{t(`partners_section.${partner.key}.description`)}</p>
              </a>
            </div>
          ))}
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
    gap: 48px;
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

  @media screen and (max-width: 1256px) {
    .card-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
  }

  @media screen and (max-width: 928px) {
    padding: 40px 0;
    .card-wrapper {
      grid-template-columns: repeat(1, 1fr);
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

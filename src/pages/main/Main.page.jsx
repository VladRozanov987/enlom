// Styled
import styled from "styled-components";

// IMG
import mainBg from "../../assets/img/main.jpg";

// Components
import Description from "./Description.component";
import Services from "./Services.component";
import Secondary from "./Secondary.component";

//translation
import { useTranslation } from "react-i18next";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <StyledMain>
        <div className="container">
          <div className="main-title">
            <h1 data-aos="fade-left">
              {" "}
              <span>{t("main.together")}</span> {t("main.reliability")}
            </h1>
          </div>
        </div>
      </StyledMain>
      <Description />
      <Services />
      <Secondary />
    </>
  );
};

const StyledMain = styled.div`
  height: 100vh;
  padding-top: 120px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${mainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .main-title {
    position: absolute;
    top: 60%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }

  @media screen and (max-width: 928px) {
    h1 {
      font-size: 44px;
    }
    .main-title {
      top: 75%;
    }
  }
`;

export default Main;

// Styled
import styled from "styled-components";

// IMG
import mainBg from "../../assets/img/main.jpg";

// Components
import PartnersSection from "./PartnersSection.component";

const Partners = () => {
  return (
    <>
      <StyledPartners>
        <div className="container">
          <div className="partners-title">
            <h1>
              {" "}
              <span>Наші</span> партнери
            </h1>
          </div>
        </div>
      </StyledPartners>
      <PartnersSection />
    </>
  );
};

const StyledPartners = styled.div`
  height: 100vh;
  padding-top: 120px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${mainBg});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;

  .partners-title {
    position: absolute;
    top: 70%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }

  @media screen and (max-width: 928px) {
    .partners-title {
      position: absolute;
      top: 80%;
      left: 50%;
      max-width: 500px;
      transform: translateX(-50%);
    }
    h1 {
      text-align: center;
      font-size: 44px;
    }
  }
`;

export default Partners;

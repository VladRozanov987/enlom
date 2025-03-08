import styled from "styled-components";
import mainBg from "../../assets/img/MainBg.jpg";
import Description from "./Description.component";
import Services from "./Services.component";
import Secondary from "./Secondary.component";

const Main = () => {
  return (
    <>
      <StyledMain>
        <div className="container">
          <div className="main-title">
            <h1>
              {" "}
              <span>Разом</span> ми забезпечуємо надійність польотів!
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .main-title {
    position: absolute;
    top: 65%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }

  @media screen and (max-width: 928px) {
    h1 {
      font-size: 44px;
    }
  }
`;

export default Main;

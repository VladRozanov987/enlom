import styled from "styled-components";
import mainBg from "../../assets/img/MainBg.jpg";

const Partners = () => {
  return (
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
  );
};

const StyledPartners = styled.div`
  height: 100vh;
  padding-top: 120px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${mainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    justify-content: center;
  }

  .partners-title {
    position: absolute;
    top: 70%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }
`;

export default Partners;

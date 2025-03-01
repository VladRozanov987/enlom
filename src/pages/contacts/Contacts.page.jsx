import styled from "styled-components";
import mainBg from "../../assets/img/MainBg.jpg";
import ContactsInfo from "./ContactsInfo.component";

const Contacts = () => {
  return (
    <>
      <StyledContacts>
        <div className="container">
          <div className="contacts-title">
            <h1>
              {" "}
              <span>Наші</span> контакти
            </h1>
          </div>
        </div>
      </StyledContacts>
      <ContactsInfo />
    </>
  );
};

const StyledContacts = styled.div`
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

  .contacts-title {
    position: absolute;
    top: 70%;
    max-width: 500px;

    span {
      color: #c9453b;
    }
  }
`;

export default Contacts;

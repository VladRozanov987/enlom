// Styled
import styled from "styled-components";

// i18n
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select onChange={changeLanguage} value={i18n.language}>
      <option value="ua">🇺🇦</option>
      <option value="en">🇬🇧</option>
      <option value="bg">🇧🇬</option>
    </Select>
  );
};

const Select = styled.select`
  padding: 5px 10px;
  font-size: 24px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  margin-left: 12px;

  &:hover {
    border-color: #666;
  }

  option {
    background-color: black;
    color: white;
  }
`;

export default LanguageSwitcher;

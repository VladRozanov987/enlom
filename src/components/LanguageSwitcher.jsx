// Styled
import styled from "styled-components";

// i18n
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <Dropdown
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <CurrentLanguage>{getFlag(i18n.language)}</CurrentLanguage>
      {isOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => changeLanguage("ua")}>
            🇺🇦 Українська
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage("en")}>
            🇬🇧 English
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage("bg")}>
            🇧🇬 Български
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

const getFlag = (lang) => {
  const flags = { ua: "🇺🇦", en: "🇬🇧", bg: "🇧🇬" };
  return flags[lang] || "🌍";
};

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const CurrentLanguage = styled.div`
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  color: white;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default LanguageSwitcher;

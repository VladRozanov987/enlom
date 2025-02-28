// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from "./components/GlobalStyle.component";

// Pages
import Main from "./pages/main/Main.page";
import Partners from "./pages/partners/Partners.page";
import Contacts from "./pages/contacts/Contacts.page";
import Header from "./components/header/Header.component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;

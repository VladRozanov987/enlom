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
import Footer from "./components/footer/Footer.component";
import ScrollToTop from "./hooks/ScrollToTop";

// i18n
import "./i18n";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Jeans from "./components/pages/Jeans";
// import Shorts from "./components/pages/Shorts";
// import Camperas from "./components/pages/Camperas";
// import Ofertas from "./components/pages/Ofertas";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <footer className="App">
      {/* <Router> */}
      <Footer />
      <Header />
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/camperas" element={<Camperas />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes> */}
      

      {/* </Router> */}
    </footer>
  );
}

export default App;

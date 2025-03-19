import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Work from "./Work/Work";
import Explore from "./Explore/Explore";
import Clients from "./Clients/Clients";
import Articles from "./Articles/Articles";
import Account from "./Account/Account";
import Footer from "./Footer/Footer";
import AutoCad from "./ReadMore/AutoCad";
import Figma from "./ReadMore/Figma";
import Webdev from "./ReadMore/Webdev";
// import Categories from './Categories/Categories'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />}>
            <Route path="autocad" element={<AutoCad />} />
            <Route path="figma" element={<Figma />} />
            <Route path="webdev" element={<Webdev />} />
          </Route>
          <Route path="/explore" element={<Explore />} />
          <Route path="/reviews" element={<Clients />} />
          <Route path="/blog" element={<Articles />} />
          <Route path="/contact" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
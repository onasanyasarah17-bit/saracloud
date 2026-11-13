import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import LinuxServerHealthAuditor from "./pages/linux-server-health-auditor";
import EduSafe from "./pages/education-web-app";
import FreshBasket from "./pages/fresh-basket";
import Blog from "./pages/Blog";

import "./index.css";
import "./App.css";

function AppLayout() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/";

  return (
    <>
      {!isWelcomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
    

        <Route
          path="/projects/linux-server-health-auditor"
          element={<LinuxServerHealthAuditor />}
        />
        <Route
          path="/projects/education-web-app"
          element={<EduSafe />}
        />
        <Route
          path="/projects/fresh-basket"
          element={<FreshBasket />}
        />



        <Route
          path="*"
          element={<h1 className="page-placeholder">Page not found</h1>}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
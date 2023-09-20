import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sounds from "./pages/Sounds/Sounds";
import Pricing from "./pages/Pricing/Pricing";
import Subscribe from "./components/Subscribe/Subscribe";
import Login from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SoundAudioForm from "./pages/Sounds/SoundsAuidioForm/SoundAudioForm";

function App() {
  const location = useLocation();
  const excludedFooterPaths = ["/subscribe", "/sounds"];
  const shouldExcludeFooter = excludedFooterPaths.includes(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sounds" element={<Sounds />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/loginPage" element={<Login />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/soundAudioForm" element={<SoundAudioForm />} />
        <Route path="/" to="/loginPage" exact />

      </Routes>
      {!shouldExcludeFooter && <Footer />}
    </>
  );


}

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default MainApp;

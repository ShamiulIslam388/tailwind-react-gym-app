import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import ImageGallery from "./pages/ImageGallery";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<ImageGallery />} />
      </Routes>
    </Layout>
  );
};

export default App;

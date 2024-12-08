import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import MenuPage from "./pages/MenuPage";
import MenuDetailPage from "./pages/MenuDetailPage";

const NotFoundPage = () => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">404 - Page Not Found</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-136px)]" aria-label="Main Content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:id" element={<MenuDetailPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

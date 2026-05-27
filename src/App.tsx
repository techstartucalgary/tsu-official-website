import HomePage from "pages/HomePage";
import DocsPage from "pages/DocsPage";
import SparkPage from "pages/SparkPage";
import ApplyPage from "pages/ApplyPage";
import TeamPage from "pages/TeamPage";
import ProjectsPage from "pages/ProjectsPage";
import MerchPage from "pages/MerchPage";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer/Footer";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "components/ScrollToTop";
import GalleryPage from "pages/GalleryPage";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function App() {
  //
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Init AOS. Sets AOS default duration as 1s
  }, []);
  // Use React Router to switch between different pages
  return (
    <Router>
      <ScrollToHash />
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/team">
              <TeamPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/merch">
              <MerchPage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/resources">
              <DocsPage />
            </Route>
            <Route path="/community">
              <SparkPage />
            </Route>
            <Route path="/apply">
              <ApplyPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

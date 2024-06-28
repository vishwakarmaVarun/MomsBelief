import React from "react";
import Home from "./components/Home";
import Header from './components/Header'
import Programs from "./components/Programs";
import Work from "./components/Work";
import FindPrograms from "./components/FindPrograms";
import PlansPackages from "./components/PlansPackages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Programs />
      <Work />
      <FindPrograms />
      <div className="hidden sm:block">
        <PlansPackages />
      </div>
      <Footer />
    </div>
  );
};

export default App;

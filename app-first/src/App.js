import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import About from "./About";
import Contect from "./Contect";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Portfolio1 from "./PortfolioModal1";
import Portfolio2 from "./PortfolioModal2";
import Portfolio3 from "./PortfolioModal3";
import Portfolio4 from "./PortfolioModal4";
import Portfolio5 from "./PortfolioModal5";
import Portfolio6 from "./PortfolioModal6";


const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Portfolio />
            <About />
            <Contect />
            <Footer />
            <Copyright />
            <Portfolio1 />
            <Portfolio2 />
            <Portfolio3 />
            <Portfolio4 />
            <Portfolio5 />
            <Portfolio6 />
        </div>
    )
};


export default App;
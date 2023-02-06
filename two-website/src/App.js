import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';

const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Footer />
        </div>
    )
}

export default App;
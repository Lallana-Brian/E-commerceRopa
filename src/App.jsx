import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSwiper from "./components/Home/homeSwiper"; 
import DiscountSection from "./components/Discount/DiscountSection"; 
import SearchBar from "./components/CodePromo/SearchBar";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import "./App.css"; 
import DarkModeProvider from "./components/DarkMode/DarkModeProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <DarkModeProvider/>

      <main>
        <HomeSwiper />
        <DiscountSection />
        <SearchBar />
        <NewArrivals />
      </main>

      <Footer />
    </div>
  );
}

export default App;

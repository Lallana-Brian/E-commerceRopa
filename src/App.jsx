import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSwiper from "./components/Home/homeSwiper"; 
import DiscountSection from "./components/Discount/DiscountSection"; 
import NewArrivals from "./components/NewArrivals/NewArrivals";
import DarkModeToggle from "./components/DarkMode/DarkModeProvider";
import "./App.css"; 
import DarkModeProvider from "./components/DarkMode/DarkModeProvider";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <DarkModeProvider/>

      <main>
        <HomeSwiper />
        <DiscountSection />
        <NewArrivals />
        
      </main>
    </div>
  );
}

export default App;

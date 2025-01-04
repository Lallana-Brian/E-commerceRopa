import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeSwiper from "./components/Home/homeSwiper"; 
import DiscountSection from "./components/Discount/DiscountSection"; 
import NewArrivals from "./components/NewArrivals/NewArrivals";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <main>
        <HomeSwiper />
        <DiscountSection />
        <NewArrivals />
        
      </main>
    </div>
  );
}

export default App;

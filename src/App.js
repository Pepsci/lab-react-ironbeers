import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import AllBeers from "./pages/AllBeers";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beer" element={<AllBeers />} />
        <Route path="/all-beer/:_id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

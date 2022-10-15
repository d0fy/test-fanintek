import { queries } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/search-item/Navbar";
import DetailPokemon from "./pages/detail-pokemon/DetailPokemon";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:pokeId" element={<DetailPokemon />}>
          <Route path=":pokeId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Lists from "../../components/pokemon-list/Lists";
import Navbar from "../../components/search-item/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [urlApi, setUrlApi] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [load, setLoad] = useState(true);
  const [nextPages, setNextPages] = useState();
  const [prevPages, setPrevPages] = useState();

  const getData = async () => {
    setLoad(true);
    const res = await axios.get(urlApi);
    setNextPages(res.data.next);
    setPrevPages(res.data.previous);
    getPokemon(res.data.results);
    setLoad(false);
  };

  const getPokemon = async (res) => {
    res.map(async (items) => {
      const getres = await axios.get(items.url);
      console.log(getres);
      setPokemon((state) => {
        state = [...state, getres.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getData();
  }, [urlApi]);
  return (
    <div>
      <Lists pokemon={pokemon} loading={load} />
      <div className="d-flex gap-2 mb-3 mx-auto w-100 justify-content-center">
        {prevPages && (
          <button
            onClick={() => {
              setPokemon([]);
              setUrlApi(prevPages);
            }}
            className="btn btn-danger"
          >
            Previous
          </button>
        )}

        {nextPages && (
          <button
            onClick={() => {
              setPokemon([]);
              setUrlApi(nextPages);
            }}
            className="px-3 py-2 border rounded text-white btn-pages__styled"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

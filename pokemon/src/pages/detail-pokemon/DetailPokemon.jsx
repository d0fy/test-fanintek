import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

// assets
import { Avatar, LinearProgress } from "@mui/material";
import Tippy from "@tippyjs/react";
import "./detail.css";
import { ProgressBar } from "react-bootstrap";

const DetailPokemon = () => {
  const [detailPokemon, setDetailPokemon] = useState({});

  const params = useParams();

  const urlAPI = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}/`;

  useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setDetailPokemon(res.data);
      console.log(res.data);
    });
  }, [urlAPI]);

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      {/* {detailPokemon.map((data) => ( */}
      <div className="card">
        <div className="card-header ability__styled fw-bolder bg-transparent">
          Detail Information
        </div>
        <div className="card-body">
          {/* detail ava, name, species */}
          <div className="d-flex gap-2 align-items-center mb-3">
            {/* avatar / image */}
            <Avatar
              src={detailPokemon.sprites?.front_default}
              alt=""
              className="p-1"
              sx={{
                height: 60,
                width: 60,
                backgroundColor: "rgba(177, 44, 255, 0.6) !important",
              }}
            />

            {/* name & species */}
            <div>
              <h4 className="text-capitalize mb-0">{detailPokemon.name}</h4>
              <Tippy
                content="Species"
                interactive={true}
                placement="right"
                interactiveBorder={20}
                delay={100}
              >
                <p
                  className="badge rounded-pill mb-0 styled__badge"
                  style={{ cursor: "pointer" }}
                >
                  #{detailPokemon.species?.name}
                </p>
              </Tippy>
            </div>
          </div>

          {/* ability */}
          <div className="px-2 py-2 border rounded shadow-sm mb-3">
            <p className="mb-0 ability__styled">Ability:</p>
            {detailPokemon.abilities?.map((poke, idx) => (
              <p className="mb-0 badge rounded-pill styled__badges text-capitalize me-1">
                {poke.ability.name}
              </p>
            ))}
          </div>

          {/* stats */}
          <div className="px-2 py-2 border rounded shadow-sm">
            <div>
              <div className="d-flex gap-2 mb-2">
                <p className="ability__styled mb-0">Height: </p>
                <p className="styled__badges text-capitalize mb-0 rounded px-2">
                  {detailPokemon.height}
                </p>
              </div>
            </div>
            {detailPokemon.stats?.map((poke, idx) => (
              <div
                className="d-flex align-items-center gap-2 mb-1 py-1"
                key={idx}
              >
                <p className="mb-0 text-capitalize ability__styled">
                  {poke.stat.name} :
                </p>

                <ProgressBar
                  now={poke.base_stat}
                  max={200}
                  label={poke.base_stat}
                  className="w-50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ))} */}
    </div>
  );
};

export default DetailPokemon;

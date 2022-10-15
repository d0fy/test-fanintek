import React, { useState } from "react";
import Card from "../card/Card";
import "./lists.css";

const Lists = ({ pokemon, loading }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mb-3">
        <div className="py-1 d-flex gap-2 align-items-center rounded px-2 wrap__search">
          <i className="bi bi-search"></i>
          <form>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className=" search__styled"
              placeholder="Search your pokemon"
            />
          </form>
        </div>
      </div>
      <div className="row mb-2">
        {pokemon
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((pokes) => (
            <div className="col-md-4 col-sm-6 col-12 mb-3">
              <Card key={pokes.id} pokes={pokes} loading={loading} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Lists;

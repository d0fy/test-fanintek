import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./card.css";

const Card = ({ pokes, loading }) => {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <h1>Loading Data Pokemon...</h1>
      ) : (
        <div className="card shadow-sm">
          <div className="card-body d-flex gap-2 align-items-center">
            <div>
              {pokes ? (
                <Avatar
                  src={pokes.sprites.front_default}
                  sx={{
                    height: 60,
                    width: 60,
                    backgroundColor: "rgba(177, 44, 255, 0.6) !important;",
                  }}
                  className="p-1"
                />
              ) : (
                <h1>Image Not Found</h1>
              )}
            </div>
            <div className="d-flex align-items-center">
              <div>
                <div className="d-flex gap-1">
                  <h5 className="text-capitalize">{pokes.name}</h5>
                  <p className="text-mute mb-0">{pokes.id}</p>
                </div>
                <div>
                  <p
                    className="px-2 py-1 rounded mb-0 btn__styled"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/detail/${pokes.id}`)}
                  >
                    Detail Pokemon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

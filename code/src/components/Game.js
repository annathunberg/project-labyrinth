import React from "react";
import { useSelector } from "react-redux";
import { Start } from "./Start";
import { Labyrinth } from "./Labyrinth";
import { LoadingIndicator } from "./LoadingIndicator";

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return (
    <>
      <div className="loading-container">
        <div className="loader">
          <LoadingIndicator />
        </div>
      </div>
      {currentPosition ? <Labyrinth /> : <Start />}
    </>
  );
};

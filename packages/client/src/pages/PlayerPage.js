import React from "react";

import Player from "../components/Player";

const style = {
  display: "block",
  textAlign: "center"
};

export default function PlayerPage() {
  return (
    <div style={style}>
      <Player />
    </div>
  );
}

import React from "react";

import usePlayer from "../hooks/usePlayer";
import useMeta from "../hooks/useMeta";

import "./styles/player.css";

export default function Player(props) {
  const [isPlaying, toggle] = usePlayer();
  const meta = useMeta();

  const state = isPlaying ? "pause" : "play";
  const actionIcon = `/images/${state}.svg`;

  const t1 = meta ? meta.customName || meta.trackName : "";
  const t2 = meta ? meta.location : "";

  const t1Color = meta.t1Color || "";
  const t1Background = meta.t1Background || "";
  const t2Color = meta.t2Color || "";
  const t2Background = meta.t2Background || "";

  return (
    <div id="player">
      <img alt={"Action Icon"} src={actionIcon} onClick={toggle} />
      <div id="player-meta">
        <div
          className="t t1"
          style={{ color: t1Color, backgroundColor: t1Background }}
        >
          <div className="m m1">{t1}</div>
        </div>
        <div
          className="t t2"
          style={{ color: t2Color, backgroundColor: t2Background }}
        >
          <div>{t2}</div>
        </div>
      </div>
    </div>
  );
}

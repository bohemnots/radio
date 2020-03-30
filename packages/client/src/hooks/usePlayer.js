import React from "react";

import * as config from "../config";

const audio = new Audio(config.streamUrl);

export default function usePlayer() {
  const [firstTime, setFirstTime] = React.useState(true);
  const [state, setState] = React.useState(false)
  const pause = () => audio.pause();
  const toggle = () => {
    audio.paused ? play() : pause()
    setState(!state) // to update view
  }
  const play = React.useCallback(() => {
    if (!audio.paused) {
      return;
    }
    window.focus();
    audio.play().catch(() => {});
  }, []);


  React.useEffect(() => {
    window.addEventListener("online", play);
    return () => window.removeEventListener("online", play);
  });

  React.useEffect(() => {
    if (firstTime) {
      play();
      setFirstTime(false);
    }
  }, [firstTime, play]);

  return [!audio.paused, toggle];
}

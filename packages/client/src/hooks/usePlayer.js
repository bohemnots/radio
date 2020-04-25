import React, { useCallback } from "react";

import * as config from "../config";


export default function usePlayer() {
  const audio = React.useRef(new Audio(config.streamUrl));

  const [firstTime, setFirstTime] = React.useState(true);
  const [state, setState] = React.useState(false);

  const pause = useCallback(() => audio.current.pause(), [audio]);
  const play = useCallback(() => audio.current.play(), [audio]);

  const toggle = () => {
    audio.current.paused ? play() : pause()
    setState(!state) // to update view
  }

  const online = React.useCallback(() => {
    if (!audio.current.paused) {
      return;
    }
    audio.current.load();
    window.focus();
    audio.current.play().catch(() => { });
  }, []);

  const offline = React.useCallback(() => {
    setState(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => window.removeEventListener("online", online);
  });

  React.useEffect(() => {
    if (firstTime) {
      play().catch(console.error)
      setFirstTime(false);
    }
  }, [firstTime, play]);

  return [!audio.current.paused, toggle, play, pause];
}

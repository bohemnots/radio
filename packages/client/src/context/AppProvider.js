import React, { useState } from "react";

import { metadataUrl, metadataUpdateInterval } from "../config";
import { AppContext, defaultAppContext } from "../context";

export const AppProvider = (props) => {
  const [art, setArt] = React.useState(null);
  const [showFooter, setShowFooter] = useState(false);
  const isLoading = React.useRef(false);

  const [meta, setMeta] = React.useState({
    text1: "",
    text2: "",
    trackName: "",
    imgUrl: null,
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      if (isLoading.current) return;
      isLoading.current = true;
      fetch(metadataUrl)
        .then((response) => {
          return response.json().then((data) => {
            const newMeta = sortObj(data);
            if (JSON.stringify(newMeta) !== JSON.stringify(meta)) {
              setMeta(newMeta);
            }
          });
        })
        .catch((err) => {})
        .finally(() => (isLoading.current = false));
    }, metadataUpdateInterval);

    return () => clearInterval(id);
  }, [isLoading, meta]);

  const body = document.getElementsByTagName("body")[0];

  function updateBackground(imgUrl) {
    const newUrl = `url("${imgUrl}")`;
    if (body.style.backgroundImage !== newUrl) {
      body.style.backgroundImage = newUrl;
    } else if (!imgUrl) {
      body.style.backgroundImage = null;
    }
  }

  if (meta.imgUrl !== art) {
    setArt(meta.imgUrl);
    updateBackground(meta.imgUrl);
    setShowFooter(true);
  }

  if (!meta.streamUrl) {
    return null;
  }

  return (
    <AppContext.Provider value={{ ...defaultAppContext, meta, showFooter }}>
      {props.children}
    </AppContext.Provider>
  );
};

const sortObj = (obj) => {
  return Object.keys(obj || {})
    .sort()
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
};

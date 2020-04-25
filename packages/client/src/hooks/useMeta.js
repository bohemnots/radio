import React from "react";

import { metadataUrl, metadataUpdateInterval } from "../config";

export default function useMeta() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [meta, setMeta] = React.useState({
    theme: "dark",
    customName: '',
    trackName: '',
    location: '',
    imgUrl: null
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      if (isLoading) return;
      fetch(metadataUrl)
        .then(response => {
          return response.json().then(data => {
            const newMeta = sortObj(data);
            if (JSON.stringify(newMeta) !== JSON.stringify(meta)) {
              setMeta(newMeta);
            }
          });
        })
        .catch(err => { })
        .finally(() => setIsLoading(false));
    }, metadataUpdateInterval);

    return () => clearInterval(id);
  }, [isLoading, meta]);

  return meta;
}

const sortObj = obj => {
  return Object.keys(obj || {})
    .sort()
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {});
};

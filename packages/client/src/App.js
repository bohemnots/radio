import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import EditPage from "./pages/EditPage";
import PlayerPage from "./pages/PlayerPage";

import useMeta from "./hooks/useMeta";

import { defaultTheme } from "./config";

function App() {
  const [art, setArt] = React.useState(null);
  const meta = useMeta();
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
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={meta.theme || defaultTheme}>
        <Header />
        <Switch>
          <Route exact path="/" component={PlayerPage} />
          <Route exact path="/edit" component={EditPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

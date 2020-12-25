import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import EditPage from "./components/Edit";
import PlayerPage from "./components/Player";

import { useMeta } from "./hooks";

import { defaultTheme } from "./config";
import Layout from "./components/Layout";
import { AppContext, defaultAppContext } from "./context";

function App() {
  const [art, setArt] = React.useState(null);
  const [shotFooter, setShowFooter] = React.useState(false);
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
    setShowFooter(true);
  }

  return (
    <AppContext.Provider value={defaultAppContext}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={meta.theme || defaultTheme}>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/edit" component={EditPage} />
              <Route exact path="/:stream" component={PlayerPage} />
              <Route>
                <Redirect to="/a"></Redirect>
              </Route>
            </Switch>
          </Layout>
          {shotFooter ? <Footer /> : null}
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

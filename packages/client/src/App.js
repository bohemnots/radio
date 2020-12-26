import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import EditPage from "./components/Edit";
import PlayerPage from "./components/Player";

import { defaultTheme } from "./config";
import Layout from "./components/Layout";
import { AppProvider } from "./context/AppProvider";
import { AppContext } from "./context";

function App() {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ meta, showFooter }) => {
          return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <div className={meta.theme || defaultTheme}>
                <Header />
                <Layout>
                  <Switch>
                    <Route exact path="/edit" component={EditPage} />
                    <Route exact path="/" component={PlayerPage} />
                    <Route>
                      <Redirect to="/"></Redirect>
                    </Route>
                  </Switch>
                </Layout>
                {showFooter ? <Footer /> : null}
              </div>
            </BrowserRouter>
          );
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
}

export default App;

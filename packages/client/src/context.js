import React from "react";

export const defaultAppContext = {
  isLoading: false,
  setLoading(value) {
    this.isLoading = value;
  },
}

export const AppContext = React.createContext(defaultAppContext);

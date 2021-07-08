import React from "react";

export const defaultAppContext = {
  isLoading: false,
  setLoading(value) {
    this.isLoading = value;
  },
  setShowFooter: () => {},
  setShowHeader: () => {},
  meta: {},
};

export const AppContext = React.createContext(defaultAppContext);

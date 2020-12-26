const { REACT_APP_HOST } = process.env;

const host = REACT_APP_HOST || "";

export const metadataUrl = `${host}/metadata`;

export const metadataUpdateInterval = 1000;

export const defaultTheme = "dark";

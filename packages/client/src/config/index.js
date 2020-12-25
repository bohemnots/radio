const { REACT_APP_HOST } = process.env;

const host = REACT_APP_HOST || "";

export const streamA = "https://bhmnts.out.airtime.pro/bhmnts_a";
export const streamB = "https://bhmnts.out.airtime.pro/bhmnts_b";

export const metadataUrl = `${host}/metadata`;

export const metadataUpdateInterval = 1000;

export const defaultTheme = "dark";

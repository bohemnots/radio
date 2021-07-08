const axios = require("axios");

module.exports = async function liveInfo(fn) {
  try {
    const response = await axios.get(
      "https://bhmnts.airtime.pro/api/live-info-v2"
    );
    const data = response.data;
    if (!data) return;
    const tracks = data.tracks;
    fn(tracks);
  } catch (err) {
    console.log(`failed to fetch live info ${err.message}`);
  } finally {
    setTimeout(() => {
      liveInfo(fn);
    }, 1000);
  }
};

const path = require("path");

const { MongoClient } = require("mongodb");

const metadataId = "metadata";
const systemId = "system";
const mongoUri = process.env.MONGODB_URI;
const dbName = path.basename(process.env.MONGODB_URI);

let last = null;

if (!mongoUri) {
  throw Error('missing "MONGO_URI" environment variable');
}

const client = new MongoClient(mongoUri, {
  useUnifiedTopology: true,
});

async function updateMetadata(update) {
  await client
    .db(dbName)
    .collection("settings")
    .updateOne({ _id: metadataId }, { $set: update }, { upsert: true });

  last = null;

  return getMetadata();
}

const getMetadata = async () => {
  if (last) return last;

  last = await client
    .db(dbName)
    .collection("settings")
    .findOne({ _id: metadataId });

  return last;
};

const fromInfo = (tracks) => {
  let trackName = null;
  if (tracks && tracks.current && tracks.current.name) {
    trackName = tracks.current.name;
  }

  const lastTrack = last && last.trackName;
  if (lastTrack !== trackName) {
    const update = { trackName };

    updateMetadata(update)
      .then(() => console.log(`updated track name to "${trackName}"`))
      .catch((err) => console.error(`failed to set name: ${err.message}`));
  }
};

const checkPassword = async (password) => {
  const system = await client
    .db(dbName)
    .collection("settings")
    .findOne({ _id: systemId });

  if (system && system.password) {
    if (password !== system.password) {
      throw Error("invalid password");
    }
  }
};

module.exports = {
  checkPassword,
  client,
  fromInfo,
  getMetadata,
  updateMetadata,
};

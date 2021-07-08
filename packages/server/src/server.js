const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const { client, fromInfo, getMetadata } = require("./mongo");
const live = require("./watch");
const router = require("./routes");
const installStatic = require("./middleware/static");

const port = process.env.PORT || 3000;

app.set("views", path.join(process.cwd(), "src/views"));
app.set("view engine", "pug");

const init = async () => {
  await client.connect();
  const meta = await getMetadata();

  app.set("meta", meta);
  if (process.env.NODE_ENV === "development") {
    app.use(cors({ origin: "*" }));
  } else {
    app.use(cors());
  }
  app.use(bodyParser.json());
  app.use(router);

  installStatic(app);

  app.use((err, req, res, next) => {
    if (err !== null) {
      res.status(500).send({ status: "error", message: err.message });
    }
  });

  live(fromInfo).then(() => {
    app.listen(port, () => {
      console.log(`Running server on http://localhost:${port}`);
    });
  });
};

init();

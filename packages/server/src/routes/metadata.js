const { Router } = require("express");

const router = (module.exports = Router());
const { getMetadata, checkPassword, updateMetadata } = require("../mongo");

const password = process.env.PASSWORD;

router.get("/", (req, res, next) => {
  getMetadata()
    .then((doc) => res.json(doc))
    .catch(next);
});

router.patch("/", (req, res, next) => {
  const update = req.body;
  if (password) {
    if (req.body.password !== password) {
      return res.status(403).send("forbidden");
    }
  }
  delete req.body.password;
  update.updatedAt = new Date().toISOString();
  checkPassword(update)
    .then(() => {
      return updateMetadata(update).then((newData) => {
        req.app.set("meta", newData);
        return res.json(newData);
      });
    })
    .catch(next);
});

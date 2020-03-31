const isBot = require('isbot');
const { Router } = require('express');

const router = (module.exports = Router());
const botRouter = Router();

router.use('/', (req, res, next) => {
  if (isBot(req.headers['user-agent'])) {
    botRouter(req, res, next);
  } else {
    next();
  }
});

botRouter.get('/', (req, res) => {
  const meta = req.app.get('meta');
  res.render('index', {
    meta
  });
});

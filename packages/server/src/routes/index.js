const { Router } = require('express');

const metadata = require('./metadata');
const robots = require('./robots');

const router = (module.exports = Router());

router.use('/metadata', metadata).use(robots);

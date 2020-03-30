const path = require('path');
const fs = require('fs');

const express = require('express');

const buildDir = path.join(process.cwd(), '../client/build');

const indexHtml = path.join(buildDir, 'index.html');

/**
 *
 * @param {import('express').Express} app
 */
module.exports = async app => {
  await fs.promises.access(indexHtml, fs.constants.R_OK);

  app.use(express.static(buildDir));
  app.use((req, res, next) => {
    res.sendFile(indexHtml);
  });
};

const express = require('express');

const app = express();

const PORT = 1245;

/**
 * Sends "Hello Holberton School!" response.
 * @name GET /
 * @function
 * @memberof module:4-http-express
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {undefined}
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * The HTTP server listening on port 1245.
 * @type {Object}
 * @memberof module:4-http-express
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;

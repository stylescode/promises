/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, text) => {
      if (error) {
        reject(error);
      } else {
        var firstLine = text.split('\n')[0];
        resolve(firstLine);
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) => {
    request.get(url, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.statusCode);
      }
    });
  });
  // request('get', url)
  //   .then(function(response) {
  //     resolve(response.statusCode);
  //   })
  //   .catch(function(error) {
  //     reject(error);
  //   });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

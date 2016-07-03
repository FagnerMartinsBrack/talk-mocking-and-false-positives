const Promise = require(  "bluebird" );

module.exports = {
  post: function( path, token ) {
    return Promise.resolve().then(function() {
      console.log( `Sent request with path: ${path}` );
      console.log( `Sent request with token: ${token}` );
    });
  }
};
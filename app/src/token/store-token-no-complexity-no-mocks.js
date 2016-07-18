"use strict";

const Promise = require( "bluebird" );

module.exports = function storeToken( token, apiRequest ) {
  return Promise.try(function() {
    return apiRequest.post( "/store-token", token );
  });
};
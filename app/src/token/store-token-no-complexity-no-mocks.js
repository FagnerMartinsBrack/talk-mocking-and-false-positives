"use strict";

const Promise = require( "bluebird" );
const apiRequest = require( "./api-request" );

module.exports = function storeToken( token ) {
  return Promise.try(function() {
    return apiRequest.post( "/store-token", token );
  });
};
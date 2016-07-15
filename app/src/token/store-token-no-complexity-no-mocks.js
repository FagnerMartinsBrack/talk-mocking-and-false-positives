"use strict";

const Promise = require( "bluebird" );
const apiRequest = require( "./api-request" );

module.exports = function( token ) {
  return Promise.try(function() {
    return apiRequest.post( "/store-token", token );
  });
};
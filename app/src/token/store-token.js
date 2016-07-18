"use strict";

const Promise = require( "bluebird" );

const isValid = require( "./validation/is-valid" );
const shouldMarkAsInvalid = require( "./invalidation/should-mark-as-invalid" );

module.exports = function storeToken( token, apiRequest ) {
  return Promise.try(function() {
    if ( !isValid( token ) ) {
      return Promise.reject( new Error( "Token is not valid" ) );
    }

    // complexity

    if ( shouldMarkAsInvalid( token ) ) {
      token = "INVALID";
    }

    // complexity

    return apiRequest.post( "/store-token", token );
  });
};
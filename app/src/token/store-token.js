"use strict";

const Promise = require( "bluebird" );

const isValid = require( "./validation/is-valid" );
const shouldMarkAsEmpty = require( "./invalidation/should-mark-as-empty" );

module.exports = function storeToken( token, apiRequest ) {
  return Promise.try(function() {
    if ( !isValid( token ) ) {
      return Promise.reject( new Error( "Token is not valid" ) );
    }

    // complexity

    if ( shouldMarkAsEmpty( token ) ) {
      token = "000000";
    }

    // complexity

    return apiRequest.post( "/store-token", token );
  });
};
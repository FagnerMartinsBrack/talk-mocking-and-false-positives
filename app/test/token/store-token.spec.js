"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect.js" );
const sinonSandbox = require( "sinon" ).sandbox.create();

describe( "Given a token", function() {
  let fakeToken;

  beforeEach(function() {
    // fakeToken = new String( "INVALID" );
    fakeToken = "INVALID"
  });

  describe( "When storing", function() {
    let promiseToStoreToken;
    let mockedApiRequest;

    beforeEach(function() {
      mockedApiRequest = sinonSandbox
        .mock( apiRequest )
        .expects( "post" )
        .withExactArgs( "/store-token", fakeToken );
      promiseToStoreToken = storeToken( fakeToken, apiRequest );
    });

    afterEach(function() {
      sinonSandbox.restore();
    });

    it( "persists", function() {
      return Promise.try(function() {
        return promiseToStoreToken;
      }).then(function() {
        mockedApiRequest.verify();
      });
    });
  });
});
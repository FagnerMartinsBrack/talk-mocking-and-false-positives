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
    let apiPostRequestSpy;

    beforeEach(function() {
      apiPostRequestSpy = sinonSandbox.spy( apiRequest, "post" );
      promiseToStoreToken = storeToken( fakeToken );
    });

    afterEach(function() {
      sinonSandbox.restore();
    });

    it( "persists", function() {
      return Promise.try(function() {
        return promiseToStoreToken;
      }).then(function() {
        expect(apiPostRequestSpy.getCall(0).args[0]).to.be( "/store-token" );
        expect(apiPostRequestSpy.getCall(0).args[1]).to.be( fakeToken );
      });
    });
  });
});
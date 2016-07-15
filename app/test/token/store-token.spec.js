"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect.js" );
const sandbox = require( "sinon" ).sandbox.create();

describe( "Given any token", function() {
  let fakeToken;

  beforeEach(function() {
    // fakeToken = new String( "INVALID" );
    fakeToken = "INVALID"
  });

  describe( "When trying to store", function() {
    let promiseToStoreToken;
    let apiPostRequestSpy;

    beforeEach(function() {
      apiPostRequestSpy = sandbox.spy( apiRequest, "post" );
      promiseToStoreToken = storeToken( fakeToken );
    });

    afterEach(function() {
      sandbox.restore();
    });

    it( "pass the same token to the API request function", function() {
      return Promise.try(function() {
        return promiseToStoreToken;
      }).then(function() {
        expect(apiPostRequestSpy.getCall(0).args[0]).to.be( "/store-token" );
        expect(apiPostRequestSpy.getCall(0).args[1]).to.be( fakeToken );
      });
    });
  });
});
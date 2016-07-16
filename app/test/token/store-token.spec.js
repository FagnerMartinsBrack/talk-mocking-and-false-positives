"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect.js" );
const sandbox = require( "sinon" ).sandbox.create();

describe.only( "Given a fakeToken", function() {
  let fakeToken;

  beforeEach(function() {
    // fakeToken = new String( "INVALID" );
    fakeToken = "INVALID"
  });

  describe( "When storeToken(fakeToken)", function() {
    let promiseToStoreToken;
    let apiPostRequestSpy;

    beforeEach(function() {
      apiPostRequestSpy = sandbox.spy( apiRequest, "post" );
      promiseToStoreToken = storeToken( fakeToken );
    });

    afterEach(function() {
      sandbox.restore();
    });

    it( "calls apiRequest('/store-token', fakeToken)", function() {
      return Promise.try(function() {
        return promiseToStoreToken;
      }).then(function() {
        expect(apiPostRequestSpy.getCall(0).args[0]).to.be( "/store-token" );
        expect(apiPostRequestSpy.getCall(0).args[1]).to.be( fakeToken );
      });
    });
  });
});
"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect" );

describe( "Given any token", function() {
  let fakeToken;

  beforeEach(function() {
    fakeToken = "INVALID";
  });

  describe( "When trying to store", function() {
    let promiseToStoreToken;
    let apiPostRequestSpy;

    beforeEach(function() {
      apiPostRequestSpy = expect.spyOn( apiRequest, "post" );
      promiseToStoreToken = storeToken( fakeToken );
    });

    afterEach(function() {
      apiPostRequestSpy.restore();
    });

    it( "pass the same token to the API request function", function() {
      return Promise.try(function() {
        return promiseToStoreToken;
      }).then(function() {
        expect(apiPostRequestSpy).toHaveBeenCalledWith( "/store-token", fakeToken );
      });
    });
  });
});
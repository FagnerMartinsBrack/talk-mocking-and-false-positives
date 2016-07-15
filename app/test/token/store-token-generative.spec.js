"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect.js" );
const sandbox = require( "sinon" ).sandbox.create();

["A", "LOT", "OF", "RANDOM", "STRINGS"].forEach(function( randomString ) {
  describe( `Given '${randomString}'`, function() {
    let fakeToken;

    beforeEach(function() {
      fakeToken = randomString
    });

    describe( `When storeToken('${randomString}')`, function() {
      let promiseToStoreToken;
      let apiPostRequestSpy;

      beforeEach(function() {
        apiPostRequestSpy = sandbox.spy( apiRequest, "post" );
        promiseToStoreToken = storeToken( fakeToken );
      });

      afterEach(function() {
        sandbox.restore();
      });

      it( `calls apiRequest('${randomString}')`, function() {
        return Promise.try(function() {
          return promiseToStoreToken;
        }).then(function() {
          expect(apiPostRequestSpy.getCall(0).args[0]).to.be( "/store-token" );
          expect(apiPostRequestSpy.getCall(0).args[1]).to.be( fakeToken );
        });
      });
    });
  });
});
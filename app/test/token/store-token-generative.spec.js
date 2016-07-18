"use strict";

const apiRequest = require( "../../src/token/api-request" );
const storeToken = require( "../../src/token/store-token" );
const Promise = require( "bluebird" );
const expect = require( "expect.js" );
const sinonSandbox = require( "sinon" ).sandbox.create();

describe.only( "Generative testing", function() {
  ["SOME", "RANDOM", "STRINGS"].forEach(function( randomString ) {
    describe( `Given the token '${randomString}'`, function() {
      let fakeToken;

      beforeEach(function() {
        fakeToken = randomString
      });

      describe( `When storing '${randomString}'`, function() {
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
  });
});
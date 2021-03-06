define([
  '_marklogic/index.unit',
  'app/index.unit',
  'testHelper'
], function (
  marklogic,
  app,
  helper
) {
  describe('unit tests', function () {

    marklogic();
    app();


    after(function (done) {
      this.timeout = 8000;

      if (window.__coverage__) {
        helper.postCoverage(window.__coverage__, done);
      }
      else {
        done();
      }
    });
  });
});

/**
 * INTERCEPT IMAGES
 * Listen to all requests. If a request matches IMAGE_URL_RE
 * then stub the image with data from IMAGE_STUB_URL
 *
 * Use this in an onBefore script E.G.
  ```
  module.exports = async function(page, scenario) {
    require('./interceptImages')(page, scenario);
  }
  ```
 *
 */
  const IMAGE_URL_RE = /youtube\.com/i;
  const HEADERS_STUB = {};
  
  module.exports = async function (page, scenario) {
    page.route(IMAGE_URL_RE, route => {
      route.fulfill({
        body: 'movie',
        headers: HEADERS_STUB,
        status: 200
      });
    });
  };
  
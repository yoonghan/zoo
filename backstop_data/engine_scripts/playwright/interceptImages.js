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
const IMAGE_URL_RE = /\.gif|\.jpg|\.png/i;
const HEADERS_STUB = {};

module.exports = async function (page, scenario) {
  const loadNoImage = scenario.loadNoImage || false;

  if (loadNoImage) {
    page.route(IMAGE_URL_RE, (route) => {
      route.fulfill({
        body: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        headers: HEADERS_STUB,
        status: 200,
      });
    });
  }
};

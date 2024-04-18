module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  //await require('./loadCookies')(browserContext, scenario);
  //await require('./interceptImages')(page, scenario);
  await require('./interceptIframe')(page, scenario);
};

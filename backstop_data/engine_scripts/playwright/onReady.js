module.exports = async (page, scenario, vp) => {
  await page.evaluate((scrollToSelector) => {
    document.querySelectorAll(scrollToSelector).forEach(elem => {
      elem.loading = 'eager',
      elem.decoding = 'sync'
    })
  }, '[loading="lazy"]')
};

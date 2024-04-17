module.exports = async (page, scenario, vp) => {
  await page.waitFor(() => {
    return document.fonts.ready.then(() => {
      console.log('Fonts loaded');
      return true;
    });
  });
};

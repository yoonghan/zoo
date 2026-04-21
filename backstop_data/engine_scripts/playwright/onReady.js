module.exports = async (page, _scenario, _vp) => {
	await page.evaluate((scrollToSelector) => {
		document.querySelectorAll(scrollToSelector).forEach((elem) => {
			elem.loading = "eager"
			elem.decoding = "sync"
		})
	}, '[loading="lazy"]')
}
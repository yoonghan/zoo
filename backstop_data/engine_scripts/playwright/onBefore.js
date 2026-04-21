module.exports = async (page, scenario) => {
	// await require('./loadCookies')(browserContext, scenario);
	await require("./interceptImages")(page, scenario)
	await require("./interceptIframe")(page, scenario)
}
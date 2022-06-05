const { cci } = require("../../fixtures/globalvariables");
function Home_Page() {

	var BasePage = require("../BasePage.js");
// Navigate To URL
this.Open = function (baseURL) {
    BasePage.Open(baseURL);
}
	}

    module.exports = new Home_Page();
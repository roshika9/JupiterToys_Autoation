function Shop_Page() {

	var BasePage = require("../BasePage.js");

	var tabShop = '#nav-shop > a';


	var btnProduct1Buy = '#product-1 > div > p > .btn';
	var btnProduct2Buy = '#product-2 > div > p > .btn';
	var btnProduct3Buy = '#product-3 > div > p > .btn';
	var btnProduct4Buy = '#product-4 > div > p > .btn';
	var btnProduct5Buy = '#product-5 > div > p > .btn';
	var btnProduct6Buy = '#product-6 > div > p > .btn';
	var btnProduct7Buy = '#product-7 > div > p > .btn';
	var btnProduct8Buy = '#product-8 > div > p > .btn';

	//Navigate to Shop page

	this.NavigateShopPage = function () {
		BasePage.Click(tabShop);
	}

	//Add shop items to cart
	this.ClickOnShopItem = function (item, clicknumber) {
		for (let i = 1; clicknumber >= i; i++) {
			switch (item) {
				case 'Product-1':
					BasePage.Click(btnProduct1Buy);
					break;
				case 'Product-2':
					BasePage.Click(btnProduct2Buy);
					break;
				case 'Product-3':
					BasePage.Click(btnProduct3Buy);
					break;
				case 'Product-4':
					BasePage.Click(btnProduct4Buy);
					break;
				case 'Product-5':
					BasePage.Click(btnProduct5Buy);
					break;
				case 'Product-6':
					BasePage.Click(btnProduct6Buy);
					break;
				case 'Product-7':
					BasePage.Click(btnProduct7Buy);
					break;
				case 'Product-8':
					BasePage.Click(btnProduct8Buy);
			}
		}
	}



































}

module.exports = new Shop_Page();
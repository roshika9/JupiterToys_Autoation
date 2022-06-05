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
	this.ClickOnShopItem = function (item,clicknumber) {

		switch (item) {
			case 'Teddy Bear':
				BasePage.Click(btnProduct1Buy);
				break;
			case 'Stuffed Frog':
				BasePage.Click(btnProduct2Buy);
				break;
			case 'Handmade Doll':
				BasePage.Click(btnProduct3Buy);
				break;
			case 'Fluffy Bunny':
				BasePage.Click(btnProduct4Buy);
				break;
			case 'Smiley Bear':
				BasePage.Click(btnProduct5Buy);
				break;
			case 'Funny Cow':
				BasePage.Click(btnProduct6Buy);
				break;
			case 'Valentine Bear':
				BasePage.Click(btnProduct7Buy);
				break;
			case 'Smiley Face':
				BasePage.Click(btnProduct8Buy);
			}
	}

	

































}

module.exports = new Shop_Page();
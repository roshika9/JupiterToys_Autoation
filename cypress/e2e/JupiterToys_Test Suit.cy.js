const { VerifyCartTotal } = require("../support/pom/CartPage");
const HomePage = require("../support/POM/HomePage.js");
const ShopPage = require("../support/POM/ShopPage.js");

describe("Jupiter Toys Test suit", function () {
    var PageData = require("../fixtures/globalvariables.js");
    var SelectionValues = require("../fixtures/SelectionValues");
    var ContactPage = require("../support/pom/ContactPage");
    var CartPage = require("../support/pom/CartPage");


    beforeEach(function () {

        HomePage.Open(PageData.baseURL);

    });

    it("Testcase 1 - Validate Contact form", function () {
        ContactPage.NavigateContactPage();
        ContactPage.ClickOnSubmit();
        ContactPage.ValidateHeadereErrorMessage(SelectionValues.headererrormessage);
        ContactPage.ValidateForenameErrorMessage(SelectionValues.forenameerrormessage);
        ContactPage.ValidateEmailErrorMessage(SelectionValues.emailerrormessage);
        ContactPage.ValidateMessageErrorMessage(SelectionValues.messageerrormessage);
        ContactPage.AddMandatoryValues(SelectionValues.forenametxt, SelectionValues.emailtxt, SelectionValues.messagetxt);
        ContactPage.VerifyNoValidationErrors(SelectionValues.headermessage);
    });

    Cypress._.times(5, () => {
        it("Testcase 2 - Successfully submit contact details", function () {
            ContactPage.NavigateContactPage();

            ContactPage.AddMandatoryValues(SelectionValues.forenametxt, SelectionValues.emailtxt, SelectionValues.messagetxt);
            ContactPage.VerifyNoValidationErrors(SelectionValues.headermessage);
            ContactPage.ClickOnSubmit();
            ContactPage.FormSuccessfullySubmittedMessage(SelectionValues.headersuccessmessage);

        });
    });

    it("Testcase 3 - Verify items in the cart", function () {
        ShopPage.NavigateShopPage();
        ShopPage.ClickOnShopItem(SelectionValues.funnycow,2);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny,1);
        CartPage.NavigateCart();
        CartPage.ValidateProductNameandQuantity(SelectionValues.funnycowname, 1, 2);
        CartPage.ValidateProductNameandQuantity(SelectionValues.fluffybunnyname, 2, 1);
    });

    it("Testcase 4 - Verify the total of shopping items", function () {
        ShopPage.NavigateShopPage();
        ShopPage.ClickOnShopItem(SelectionValues.stuffedfrog,2);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny,5);
        ShopPage.ClickOnShopItem(SelectionValues.valentinebear,3);
        CartPage.NavigateCart();
        CartPage.ValidateProductNameandQuantity(SelectionValues.stuffedfrogname, 1, 2);
        CartPage.ValidateProductNameandQuantity(SelectionValues.fluffybunnyname, 2, 5);
        CartPage.ValidateProductNameandQuantity(SelectionValues.valentinebearname, 3, 3);
        CartPage.VerifyProductPrice(SelectionValues.stuffedfrogPrice, 1);
        CartPage.VerifyProductPrice(SelectionValues.fluffybunnyPrice, 2);
        CartPage.VerifyProductPrice(SelectionValues.valentinebearPrice, 3);
        CartPage.VerifyProductSubTotal(1);
        CartPage.VerifyProductSubTotal(2);
        CartPage.VerifyProductSubTotal(3);
        CartPage.VerifyCartTotal();
    });






});
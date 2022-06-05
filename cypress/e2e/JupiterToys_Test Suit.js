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

    afterEach(function () {
        //to be added     
    });

    it("Testcase 1 - Validate Contact form", function () {
        ContactPage.NavigateContactPage();
        ContactPage.ClickOnSubmit();
        ContactPage.ValidateHeadereErrorMessage(SelectionValues.headererrormessage);
        ContactPage.ValidateForenameErrorMessage(SelectionValues.forenamemessage);
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
            //  ContactPage.WaitForLoaderDismiss();
            ContactPage.FormSuccessfullySubmittedMessage(SelectionValues.FormSuccessfullySubmittedMessage);

        });
    });

    it("Testcase 3 - Verify items in the cart", function () {
        ShopPage.NavigateShopPage();
        //Update below methoud to add number of times
        ShopPage.ClickOnShopItem(SelectionValues.funnycow);
        ShopPage.ClickOnShopItem(SelectionValues.funnycow);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        CartPage.NavigateCart();
        CartPage.GetProductName(SelectionValues.funnycow, 1, 2);
        CartPage.GetProductName(SelectionValues.fluffybunny, 2, 1);
    });

    it("Testcase 4 - Verify the total of shopping items", function () {
        ShopPage.NavigateShopPage();
        ShopPage.ClickOnShopItem(SelectionValues.stuffedfrog);
        ShopPage.ClickOnShopItem(SelectionValues.stuffedfrog);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        ShopPage.ClickOnShopItem(SelectionValues.fluffybunny);
        ShopPage.ClickOnShopItem(SelectionValues.valentinebear);
        ShopPage.ClickOnShopItem(SelectionValues.valentinebear);
        ShopPage.ClickOnShopItem(SelectionValues.valentinebear);
        CartPage.NavigateCart();
        CartPage.ValidateProductNameandQuantity(SelectionValues.stuffedfrog, 1, 2);
        CartPage.ValidateProductNameandQuantity(SelectionValues.fluffybunny, 2, 5);
        CartPage.ValidateProductNameandQuantity(SelectionValues.valentinebear, 3, 3);
        CartPage.VerifyProductPrice(SelectionValues.stuffedfrogPrice, 1);
        CartPage.VerifyProductPrice(SelectionValues.fluffybunnyPrice, 2);
        CartPage.VerifyProductPrice(SelectionValues.valentinebearPrice, 3);
        CartPage.VerifyProductSubTotal(1);
        CartPage.VerifyProductSubTotal(2);
        CartPage.VerifyProductSubTotal(3);
        VerifyCartTotal();
    });






});
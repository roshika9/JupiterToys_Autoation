const { cci } = require("../../fixtures/globalvariables");
function Cart_Page() {
    var BasePage = require("../BasePage.js");

    var btnCart = '#nav-cart > a';
    var columnSubTotal = 'tbody td:nth-child(4)';
    var lblTotal = '.total';

    //Navigate to Cart
    this.NavigateCart = function () {
        BasePage.Click(btnCart);
    }

    //Validate the product name and quantity in the cart
    this.ValidateProductNameandQuantity = function (productname, order, quantity) {
        var lstproduct = 'tbody > :nth-child(' + order + ') > :nth-child(1)';
        cy.get(lstproduct).should("contain.text", productname);
        var productquantity = ':nth-child(' + order + ') > :nth-child(3) > .input-mini';
        BasePage.Click(productquantity);
        cy.get(productquantity).should("have.value", quantity);

    }

    //Verify the product price
    this.VerifyProductPrice = function (productprice, order) {
        var productPrice = 'tbody > :nth-child(' + order + ') > :nth-child(2)';
        cy.get(productPrice).should("contain.text", productprice);
    }

    //Verify the product sub total
    this.VerifyProductSubTotal = function (order) {
        var productSubTotal = 'tbody > :nth-child(' + order + ') > :nth-child(4)';
        var productPrice = 'tbody > :nth-child(' + order + ') > :nth-child(2)';
        var productquantity = ':nth-child(' + order + ') > :nth-child(3) > .input-mini';


        cy.get(productPrice)
            .invoke('text')
            .then(text => +text.replace('$', '').trim())
            .then(price => {
                cy.get(productquantity)
                    .invoke('val')
                    .then(quantity => {

                        cy.get(productSubTotal)
                            .invoke('text')
                            .then(text => +text.replace('$', '').trim())
                            .then(parseFloat)
                            .should('eq', (price * quantity));
                    });
            });
    }

    //Verify total
    this.VerifyCartTotal = function () {
        cy.get(columnSubTotal).then(($cells) => {
            const totals = $cells.toArray()
                .map((el) => el.innerText)
                .map((s) => s.replace('$', ''))
                .map(parseFloat)

            const sum = Cypress._.sum(totals)

            cy.get(lblTotal)
                .invoke('text')
                .then(text => text.replace('Total: ', '').trim())
                .then(parseFloat)
                .should('eq', sum)
                .then(cy.log)
        });
    }



}

module.exports = new Cart_Page();
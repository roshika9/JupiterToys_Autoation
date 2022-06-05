
const By = require('./By');
const ELEMENT_TIMEOUT = 30000;
let element;

class BasePage {


    /**
        * Navigate to given URL
        * @param {string} baseUrl 
        */
    Open = function (baseUrl) {
        cy.visit(baseUrl);

    }

    /**
        * Click on element
        * @param {string} uiElementPath 
        */
    Click = function (uiElementPath, nthElement) {
        const element = By.LocateElement(uiElementPath, ELEMENT_TIMEOUT);
        if (nthElement != null) {
            element.eq(nthElement).click({ force: true });
        } else {
            element.click({ force: true })
        }
    }

    /**
        * Wait for Element Visible 
        * @param {string} uiElementPath 
        */
    WaitForElementPresent = function (uiElementPath) {
        const element = By.LocateElement(uiElementPath, ELEMENT_TIMEOUT);
        element.should('be.visible');
    }

    /**
        * Type on element
        * @param {string} uiElementPath 
        * @param {string} userInput 
        */
    Type = function (uiElementPath, userInput) {
        //add clear text field
        const element = By.LocateElement(uiElementPath, ELEMENT_TIMEOUT);
        element.should('be.visible');
        element.should('be.enabled');
        element.clear();
        element.type(userInput);
    }

    /**
        * Check Element Present
        * @param {string} uiElementPath 
        */
    CheckElementNotPresent = function (uiElementPath) {
        const element = By.LocateElement(uiElementPath);
        element.should('not.exist');
    }

    /**
         * Wait to Dismiss Element
         * @param {string} uiElementPath 
         */
    WaitForDismissElement = function (uiElementPath) {
        cy.get('//*').then(function (body) {
            if (body.find(uiElementPath) > 0) {
                cy.waitUntil(function () {
                    return element.should('not.be.visible');
                });
            }
        });
    }





}
module.exports = new BasePage();
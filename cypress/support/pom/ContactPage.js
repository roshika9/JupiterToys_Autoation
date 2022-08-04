const SelectionValues = require("../../fixtures/SelectionValues.js");
const { forenameerrormessage, emailerrormessage, messageerrormessage, headererrormessage } = require("../../fixtures/SelectionValues.js");
const BasePage = require("../BasePage.js");

function Contact_Page() {

	var BasePage = require("../BasePage.js");

	var tabContact = 'a[href="#/contact"]';
	var btnSubmit = '.btn-contact';
	var loader = 'div[class="modal-header"] h1';

	//Validation messages
	var uielementHeaderMessage = '.alert';
	var uielementForenameMessage = '#forename-err';
	var uielementEmailMessage = '#email-err';
	var uielementMessageError = '#message-err';


	//textfields
	var txtForename = '#forename';
	var txtemail = '#email';
	var txtmessage = '#message';

	//Navigate to Contact page

	this.NavigateContactPage = function () {
		BasePage.Click(tabContact);
		BasePage.WaitForElementPresent(uielementHeaderMessage);
		cy.get(uielementHeaderMessage).should('contain.text', SelectionValues.headermessage);
	}

	//Click on Submit button
	this.ClickOnSubmit = function () {
		BasePage.Click(btnSubmit);
	}

	//Validate Contact page errors
	this.ValidateHeadereErrorMessage = function (headererrormessage) {

		BasePage.WaitForElementPresent(uielementHeaderMessage);
		cy.get(uielementHeaderMessage).should('contain.text',headererrormessage);
	}

	this.ValidateForenameErrorMessage = function (forenameerrormessage) {

		BasePage.WaitForElementPresent(uielementForenameMessage);
		cy.get(uielementForenameMessage).should('contain.text',forenameerrormessage);
	}

	this.ValidateEmailErrorMessage = function (emailerrormessage) {

		BasePage.WaitForElementPresent(uielementEmailMessage);
		cy.get(uielementEmailMessage).should('contain.text',emailerrormessage);
	}
	this.ValidateMessageErrorMessage = function (messageerror) {

		BasePage.WaitForElementPresent(uielementMessageError);
		cy.get(uielementMessageError).should('contain.text',messageerror);
	}

	this.AddMandatoryValues = function (forename, email, message) {
		BasePage.Click(txtForename);
		BasePage.Type(txtForename, forename);
		BasePage.Click(txtemail);
		BasePage.Type(txtemail, email);
		BasePage.Click(txtmessage);
		BasePage.Type(txtmessage, message);
	}


	this.VerifyNoValidationErrors = function (headermessage) {
		BasePage.WaitForElementPresent(uielementHeaderMessage)
		cy.get(uielementHeaderMessage).should('contain.text',headermessage);
		BasePage.CheckElementNotPresent(uielementForenameMessage);
		BasePage.CheckElementNotPresent(uielementEmailMessage);
		BasePage.CheckElementNotPresent(uielementMessageError);
	}

	this.WaitForLoaderDismiss = function () {
		BasePage.WaitForDismissElement(loader);
	}

	this.FormSuccessfullySubmittedMessage = function (headersuccessmessage) {
		BasePage.WaitForElementPresent(uielementHeaderMessage)
		cy.get(uielementHeaderMessage).should('contain.text',headersuccessmessage);
	}















}
module.exports = new Contact_Page();
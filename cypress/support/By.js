
class By {

    LocateElement = function (elementPath, elementTimeout) {
        try {
            if (elementPath.startsWith('.')) {
                return cy.get(elementPath, { timeout: elementTimeout });
            } else if (elementPath.startsWith('#')) {
                return cy.get(elementPath, { timeout: elementTimeout });
            } else if (elementPath.startsWith('//')) {
                return cy.xpath(elementPath, { timeout: elementTimeout });
            } else {
                return cy.get(elementPath, { timeout: elementTimeout });
            }
        } catch (error) {
            return false;
        }
    }
}
module.exports = new By();
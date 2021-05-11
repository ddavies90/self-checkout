const { TestScheduler } = require("@jest/core");
const { catalogue, pineapple, apple, orange, kiwi, banana } = require("../src/catalogue");
const { selfCheckout } = require("../src/selfCheckout");

let testBasket = [];

describe("selfCheckout", () => {

    beforeEach(() => {
        testBasket = [];
    }) 

    it("scans a barcode and returns the item details", () => {
        const PINEAPPLE_BARCODE = pineapple.barcode;

        expect(selfCheckout.scan(PINEAPPLE_BARCODE)).toBe(pineapple);
    });
    it("adds an item to the basket", () => {
        selfCheckout.addToBasket(apple);

        expect(selfCheckout.basket).toEqual([apple]);
    });

    it("calculates total price of all items in the basket", () => {
        selfCheckout.basket = [apple, banana, kiwi];

        expect(selfCheckout.calculateTotal()).toBe(36);
    });

    it("removes item from basket", () => {
        selfCheckout.basket = [apple, banana, kiwi];
        selfCheckout.removeItemFromBasket(banana);

        expect(selfCheckout.basket).toEqual([apple, kiwi])
    });
});
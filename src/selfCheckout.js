const { catalogue } = require("./catalogue");

const selfCheckout = {
    scan: function(barcode) {
        return catalogue.find(product => barcode === product.barcode);
    },
    basket: [],
    addToBasket: function(item) {
        this.basket.push(item);
    },
    calculateTotal: function() {
        return this.basket.reduce((total, item) => {
            return total + item.price;
        }, 0);
    },
    removeItemFromBasket: function(product) {
        this.basket = this.basket.filter(item => item != product);
    }
};

module.exports = { selfCheckout };
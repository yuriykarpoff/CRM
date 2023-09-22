'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice() {
        return this.totalPrice;
    },

    add(productName, productPrice, productCount = 1) {
        const item = {
            productName,
            productPrice,
            productCount
        }

        this.items.push(item);
        this.increaseCount(productCount);
        this.calculateItemPrice();
    },

    increaseCount(productCount) {
        this.count += productCount;
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((currentSum, item) => (currentSum + (item.productPrice * item.productCount)), 0);
    },

    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
    }
}

cart.add('Apple', 120000);
cart.add('Samsung', 75000, 2);
cart.add('Huawei', 30000, 5);

cart.print();
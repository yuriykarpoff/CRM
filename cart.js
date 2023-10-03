'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(productName, productPrice, productCount = 1) {
    const item = {
      productName,
      productPrice,
      productCount,
    };

    this.items.push(item);
    this.increaseCount(productCount);
  },

  increaseCount(productCount) {
    this.count += productCount;
  },

  calculateItemPrice() {
    return this.items.reduce((currentSum, item) =>
      (currentSum + (item.productPrice * item.productCount)), 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};


cart.add('Apple', 120000);
cart.add('Samsung', 75000, 2);
cart.add('Huawei', 30000, 5);

cart.print();

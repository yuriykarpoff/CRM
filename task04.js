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
      (currentSum + (item.productPrice * item.productCount)), 0) * (1 - this.discount);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },

  set applyDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 0.15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 0.21;
    }
  },
};

cart.add('Apple', 1000, 5);
cart.add('Samsung', 65000);
cart.add('Huawei', 15000, 2);
cart.applyDiscount = 'NEWYEAR';

cart.print();

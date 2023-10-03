'use strict';

const rectangle = {
    width: 5,
    height: 5,
    set rectangleWidth(value) {
        this.width;
    },
    set rectangleHeight(value) {
        this.height;
    },
    get perimeter() {
        return 2 * (this.width + this.height) + ' см.';
    },
    get square() {
        return this.width * this.height + ' см.';
    },
};

rectangle.width = 10;
rectangle.height = 15;

console.log(rectangle.perimeter);
console.log(rectangle.square);

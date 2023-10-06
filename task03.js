'use strict';

const rectangle = {
  _width: 5,
  _height: 5,
  set width(value) {
    this._width = value;
  },
  set height(value) {
    this._height = value;
  },
  get perimeter() {
    return 2 * (this._width + this._height) + ' см.';
  },
  get square() {
    return this._width * this._height + ' см.';
  },
};

rectangle.width = 10;
rectangle.height = 15;

console.log(rectangle.perimeter);
console.log(rectangle.square);

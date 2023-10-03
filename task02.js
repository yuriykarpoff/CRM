const array = [];

const generateArray = arr => {
    if (arr.reduce((sum, item) => sum + item, 0) >= 50) {
        return array
    }  else {
        generateArray([...arr, Math.round(Math.random() * 10)]);
        return array;
    }
}

console.log(generateArray(array));
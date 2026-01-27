/*
function newFunction() {
    let nums = [2, 3, 4, 5, 6];
    nums.forEach((num) => {
        console.log(num * num);
    });
}
newFunction();
*/
newFunction();
function newFunction() {
    let nums = [2, 3, 4, 5, 6];

    let calcSquare = (num) => {
        console.log(num ** 2);
    };

    nums.forEach(calcSquare);
}

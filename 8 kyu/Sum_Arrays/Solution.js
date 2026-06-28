function sum (numbers) {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res+= numbers[i]
    }
    return res
};

console.log(sum([2,4,6]))
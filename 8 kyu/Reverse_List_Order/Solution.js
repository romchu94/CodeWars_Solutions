const reverseListOrder = (list) => list.reduceRight((accumulator, currentItem) => {
    accumulator.push(currentItem)
    return accumulator
}, [])


console.log(reverseListOrder([1, 2, 3, 4]))
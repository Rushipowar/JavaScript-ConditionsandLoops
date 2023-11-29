function generateNumbers(start, end) {
    if (start > end) {
        console.log("Invalid input: 'start' should be less than or equal to 'end'");
        return [];
    }

    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

let AddNumbers = generateNumbers(10, 25);
console.log(AddNumbers);




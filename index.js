let myObj = {
    1: "joe",
    2: "eric",
    3: "bonnie"
}

let arr = [1, 2, 3, 4];

for (let key in myObj) {
    console.log(key);
}

let newArr = [];
for (let num of arr) {
    newArr.push(num);
}
console.log(newArr);
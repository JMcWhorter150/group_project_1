let myObj = {
    1: "joe",
    2: "eric",
    3: "bonnie"
}

let arr = [1, 2, 3, 4];

for (let key in myObj) {
    console.log(key);
}

for (let num of arr) {
    console.log(num);
}

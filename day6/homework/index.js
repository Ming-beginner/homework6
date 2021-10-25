//Bài 1:
let user = {
    name: "David",
    surname: "Xuan",
}
console.log(user);
console.log("Bài 1:");

user["name"] = "Cafedev";
console.log(user["name"]);
delete user["name"];
console.log(user);


//========================================================

//Bài 2:

let sumCalculator = function(a, b) {
    return a + b;
}
console.log("Bài 2:");
console.log("1 + 2 =" + String(sumCalculator(1, 2)));
console.log("198 + 287 = " + String(sumCalculator(198, 287)));
console.log("198 + 127 = " + String(sumCalculator(123, 345)));
console.log("456 + 789 = " + String(sumCalculator(456, 789)));
console.log("1237 + 265432 = " + String(sumCalculator(1237, 265432)));
console.log("100 + 200 = " + String(sumCalculator(100, 200)));
console.log("3 + 7 = " + String(sumCalculator(3, 7)));

//===============================================================

//Bài 3:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    salarySum: function() {
        return this.John + this.Ann + this.Pete;
    }
}

//cách 1:
console.log("Bài 3:")
console.log("Cách 1: Tính tổng số lương mà công ty phải chi " + String(sumCalculator(sumCalculator(salaries["John"], salaries["Ann"]), salaries["Pete"])));

//cách 2:

console.log("Cách 2: Tính tổng số lương mà công ty phải chi " + String(salaries.salarySum()));

//Cách 3:

let johnSalary = salaries["John"];
let annSalary = salaries["Ann"];
let peteSalary = salaries["Pete"];

console.log("Cách 3: " + String(johnSalary + annSalary + peteSalary));
// ************DATA TYPES***********
// int:Number: 212121
// string: "This is sample text"
// array : ["long description", "item2", "item3"]: arry[2]
// object: var a = {key: "value", key2: "value2"}; a.key2
// type of
// debugging: console.log("");
// print: alert("hello");

// student subject
var totalMarks = 300;
var a = 10;
var b = 10;
var c = 20;

var obtainedMarks = a+b+c;
console.log("The result is: " + obtainedMarks);

var prcntAge = (obtainedMarks/totalMarks) * 100;


console.log("The Percentage is: " + prcntAge.toFixed(2) + "%");


const showdata = () => {
     var a = document.getElementById("text1").value;
     if (a == "") {
        alert("Please enter value");
        return;
     }
     console.log(a);
}

const checkLeapYear = () => {
    var a = document.getElementById("year").value;
    if (a % 4 == 0) {
        console.log(`${a} is leap year`)
    } else {
        console.log(`${a} isn't leap year`)
    }
}
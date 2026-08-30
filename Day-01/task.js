(function() {
    alert("Welcome to my site")
})();

let name = prompt("What is your name?");
alert("Welcome " + name + "!");

let marks = [
    [1, [100, 90, 95 ]],
    [2, [85, 80, 88 ]],
    [3, [75, 70, 78 ]],
    [4, [95, 90, 92 ]]
]

for( let i = 0; i< marks.length; i++){
    let classId = marks[i][0];
    let studentMarks = marks[i][1];
    let totalMarks = 0; 



for( let i = 0; i<studentMarks.length; i++){
    totalMarks += studentMarks[i];
}


let averageMarks = totalMarks / studentMarks.length;
let grade = "";

switch(true) {
    case averageMarks >= 85:
        grade = "A";
        break;

    case averageMarks >= 70:
        grade = "B";
        break;  
    
    case averageMarks >= 50:
        grade = "C";
        break;

    default:
        grade = "F";
        break;
}

console.log("Class " + classId + " Average Marks: " + averageMarks + " Grade: " + grade);

}
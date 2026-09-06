// 1.
db = db.getSiblingDB("FacultySystemDB");
// use FacultySystemDB in mongo shell

//2.
db.createCollection("Students");

//3.1
db.Students.insertOne({
  FirstName: "Ahmed",
  LastName: "Ali",
  Age: 20,
  Faculty: {
    Name: "Engineering",
    Address: "123 Main St",
  },
  Grades: [
    { CourseName: "Math", Grade: 90, Passed: true },
    { CourseName: "Physics", Grade: 85, Passed: false },
  ],
  IsFired: false,
});

//3.2
db.Students.insertMany([
  {
    FirstName: "Mohamed",
    LastName: "Adel",
    Age: 22,
    Faculty: {
      Name: "Science",
      Address: "456 Elm St",
    },
    Grades: [
      { CourseName: "Biology", Grade: 88, Passed: true },
      { CourseName: "Chemistry", Grade: 92, Passed: true },
    ],
    IsFired: false,
  },
  {
    FirstName: "Mostafa",
    LastName: "Mahmoud",
    Age: 25,
    Faculty: {
      Name: "Arts",
      Address: "789 Oak St",
    },
    Grades: [
      { CourseName: "History", Grade: 75, Passed: true },
      { CourseName: "Literature", Grade: 80, Passed: true },
    ],
    IsFired: true,
  },
]);

//4.1
db.Students.find();

//4.2
db.Students.find({ FirstName: "Ahmed" });

//4.3
db.Students.find({
  $or: [{ FirstName: "Ahmed" }, { LastName: "Ali" }],
});

//4.4
db.Students.find({
  FirstName: { $ne: "Ahmed" },
});

//4.5
db.Students.find({
  Age: { $lt: 21 },
});

//4.6
db.Students.find({
  IsFired: true,
});

//4.7
db.Students.find({
  Age: { $gte: 21 },
  Faculty: { $ne: null },
});

//4.8
db.Students.find(
  { FirstName: "Ahmed" },
  { FirstName: 1, LastName: 1, Age: 1, _id: 0 },
);

//5.
db.Students.updateOne({ FirstName: "Ahmed" }, { $set: { LastName: "Mahmoud" } });

//6.
db.Students.createIndex({ FirstName: 1 });

//7.
db.Students.updateOne({
    "FirstName": "Ahmed"},
    {$unset: {"IsFired": "" }
})

//8.1
db.Students.deleteMany({
    IsFired: true
})

//8.2
db.Students.deleteMany({})

//9.
db.Students.drop()

//10.
db.students.drop()

//11.1
db2 = db.getSiblingDB("FacultySystemV2"); // use FacultySystemV2 in mongo shell

//11.2
db.createCollection("Students")

//11.3
db2.Students.insertOne({
    FirstName: "Ahmed",
    LastName: "Ali",
    IsFired: false,
    FacultyID: 101,
    courses: [
        {
            CourseID: 1,
            grade: 90
        },
        {
            CourseID: 2,
            grade: 85
        }
    ]
})

db2.Students.insertOne({
    FirstName: "Ahmed",
    LastName: "Ali",
    IsFired: false,
    FacultyID: 101,
    courses: [
        {
            CourseID: 1,
            grade: 90
        },
        {
            CourseID: 2,
            grade: 85
        }
    ]
})
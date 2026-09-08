db2 = db.getSiblingDB("FacultySystemV2"); 

// 1.
db2.Courses.aggregate([
    {
        $group: {
            _id: null,
            totalFinalMark: { $sum: "$grade" }
        }
    }
]);

//2.
db2.Students.aggregate([
    {
        $group: {
            _id: null,
            studentsCount: { $sum: 1 }
        }
    }
]);

//3.
db2.Students.updateOne(
    { FirstName: "Ahmed" },
    {
        $set: {
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
        }
    }
);


// Select courses of a specific student

db2.Students.find(
    { FirstName: "Ahmed" },
    {
        _id: 0,
        FirstName: 1,
        LastName: 1,
        courses: 1
    }
);

//4.
db2.Students.updateOne(
    { FirstName: "Ahmed" },
    {
        $set: {
            FacultyID: 101
        }
    }
);

db2.Students.findOne(
    { FirstName: "Ahmed" }
);

db2.Faculty.findOne(
    { FacultyID: 101 }
);

//5.
db2.Students.updateOne(
    { FirstName: "Ahmed" },
    {
        $unset: {
            FacultyID: ""
        },
        $set: {
            Faculty: {
                $ref: "Faculty",
                $id: 101
            }
        }
    }
);

// Select Ahmed
const student = db2.Students.findOne(
    { FirstName: "Ahmed" }
);

print("Student:");
printjson(student);


// Get his Faculty using DBRef $id
const faculty = db2.Faculty.findOne(
    { FacultyID: student.Faculty.$id }
);

print("Faculty:");
printjson(faculty);


// 6. Create unique index on FacultyName
db2.Faculty.createIndex(
    { FacultyName: 1 },
    { unique: true }
);

// Check indexes
db2.Faculty.getIndexes();


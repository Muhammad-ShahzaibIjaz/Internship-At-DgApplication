class Student{
    constructor(name,fatherName,age){
        this.name = name;
        this.fatherName = fatherName;
        this.age = age;
    }
}

class Classroom {
    constructor(id,teacher,maxStudents=50) {
        this.id = id;
        this.maxStudents = maxStudents;
        this.teacher = teacher;
        this.students = [];
    }

    admitStudent(student) {
        if (this.students.length < this.maxStudents) {
            this.students.push(student);
            return true;
        } else {
            return false;
        }
    }
}
const classes = [];



document.querySelector('#addClassBtn').addEventListener('click',()=>{
    document.querySelector('#classDiv').style.display = "flex";
    document.querySelector('#studentDiv').style.display = "none";
});

document.querySelector('#addStudentBtn').addEventListener('click',()=>{
    loadClassId();
    document.querySelector('#classDiv').style.display = "none";
    document.querySelector('#studentDiv').style.display = "flex";
});


function loadClassId(){
    classes.forEach(classroom => {
        document.querySelector('#selectclassId').innerHTML += `<option value='${classroom.id}'>${classroom.id}</option>`;
    });
}


function addClass() {
    const classId = document.getElementById("classId").value;
    const numStudents = document.getElementById("numStudents").value;
    const teacherName = document.getElementById("teacherName").value;

    if (isNaN(classId) || isNaN(numStudents) || Number(numStudents) <= 0 || Number(numStudents) > 51 || teacherName.trim() === "") {
        alert('Enter Valid Input');
        return;
    }

    let classFound = false;
    for (const classroom of classes) {
        if (classroom.id === classId) {
            classFound = true;
            alert('This Class ID Already Exist');
            break;
        }
    }

    if (!classFound) {
        const newClassroom = new Classroom(classId , teacherName , numStudents);
        classes.push(newClassroom);
        alert('Classroom Added Successfully');
    }
    displayClasses();
}

function addStudent(){
    const classId = document.getElementById('selectclassId').value;
    const studentName = document.getElementById('studentName').value;
    const studentFName = document.getElementById('studentFName').value;
    const studentAge = parseInt(document.getElementById('studentAge').value);

    if(isNaN(studentAge) || isNaN(classId) || studentName === "" || studentFName === ""){
        alert('Enter Valid Info')
        return;
    }
    else if(studentAge <= 6){
        alert('Student is Below Age. Take it Home');
        return;
    }

    const newStudent = new Student(studentName,studentFName,studentAge);

    for (const classroom of classes) {
        if (classroom.id === classId) {
            classroom.admitStudent(newStudent) ? alert('Student Added Successfully') : alert('Maximum limit reached. Come Next year');
            displayClassStudent(classroom.students);
            break;
        }
    }
}

function displayClassStudent(students){
    let classTable = '<table>';
    classTable += '<tr><th>Name</th><th>Father\'s Name</th><th>Age</th></tr>';
    students.forEach(student => {
        classTable += `<tr><td>${student.name}</td><td>${student.fatherName}</td><td>${student.age}</td></tr>`;
    });
    classTable += '</table>';
    document.getElementById("displayClass").innerHTML = classTable;
}


function displayClasses() {
    let classTable = '<table>';
    classTable += '<tr><th>ID</th><th>MAX STUDENT</th><th>TEACHER</th></tr>';
    classes.forEach(classroom => {
        classTable += `<tr><td>${classroom.id}</td><td>${classroom.maxStudents}</td><td>${classroom.teacher}</td></tr>`;
    });
    classTable += '</table>';
    document.getElementById("displayClass").innerHTML = classTable;
}

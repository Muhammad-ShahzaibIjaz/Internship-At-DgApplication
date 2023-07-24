function Student(name, fatherName){
    this.name = name;
    this.fatherName = fatherName;
}

function Class(id, noStudents, teacher){
    this.id = id;
    this.noStudents = noStudents;
    this.teacher = teacher;
    this.students = [];
    function addStudent(name, fatherName){
        if(noStudents < 51){
            const student = new Student(name, fatherName);
            this.students.push(student);
            return true;
        }
        return false;
    }
}



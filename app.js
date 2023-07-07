const student1 = new Student('Ares', 'Fiumicelli');
const student2 = new Student('Isabella', 'Ottonello');
const student3 = new Student('Francesca', 'Ercolani');
const student4 = new Student('Stefania', 'Ghergut');
const student5 = new Student('Manuela', 'Ariotti');
const student6 = new Student('Stefano', 'Florio');
const student7 = new Student('Luca', 'Verduci');
const student8 = new Student('Bryan', 'Rojas');
const student9 = new Student('Damiano', 'Di Lionardo');
const student10 = new Student('Cesare', 'Falzone');

console.log(student2.toString());


const classroom1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

classroom1.shuffleStudents();

console.log(classroom1.getSquads(2));


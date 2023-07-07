class Classroom{


    constructor(students = []){

        this.students = students;

    }

    addStudent(student){

        this.students = push(student);

    }

    getSquads(squadMembers){
        //printerà tutti gli studenti ciclando l'array
        let accumulator = '';

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            
            if(i % squadMembers === 0){
                                                                            //i/2 mi dice quante coppie ho. Aggiungo +1 per avere l'indice umano
                accumulator += 'Squadra ' + (i/squadMembers+1) + ':\n';               //se printo i pari, me li mette a coppie

            }

            accumulator += student.toString();
            if (i % squadMembers === squadMembers - 1) {
                accumulator += '\n';
            } else {

                accumulator += 'e ';
            }
        
        }
        return accumulator;
    }

    shuffleStudents(){

        const tempArray = [];
        const originalLength = this.students.length;
        for (let i = 0; i < originalLength; i++) {
            //come estraggo un indice a caso del mio array?
        const randomIndex = Math.floor(Math.random() * this.students.length);

        //la mia i va da 0 a 9 perché ho 10 elementi. Se per esempio prendo 0, lo arrotondiamo con floor. 
        //Poi viene applicato Math.random, che lo moltiplica per un numero tra 0 e 1 che non sarà mai 1

        const student = this.students[randomIndex];

        tempArray.push(student);
        this.students.splice(randomIndex, 1);

        }

        this.students = tempArray;
    }

}
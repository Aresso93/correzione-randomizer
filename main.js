const student1 = new Student('Ares', 'Fiumicelli', '1993', 'Aressy');
const student2 = new Student('Isabella', 'Ottonello', '1996', 'Isa');
const student3 = new Student('Francesca', 'Ercolani', '1989', 'Frenzy');
const student4 = new Student('Stefania', 'Ghergut', '1996', 'Steffy');
const student5 = new Student('Manuela', 'Ariotti', '1988', 'Manu');
const student6 = new Student('Stefano', 'Florio', '1998', 'Ste');
const student7 = new Student('Luca', 'Verduci', '1999', 'Verdu');
const student8 = new Student('Bryan', 'Rojas', '1994', 'Bry');
const student9 = new Student('Damiano', 'Di Lionardo', '1993', 'Damy');
const student10 = new Student('Cesare', 'Falzone', '2003', 'SHIZAAAAA');


const classroom1 = new Classroom([student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]);

//console.log(document);
//
//console.log(document.getElementById('main-container'));
//
////prendo l'elemento cui ho dato la classe, dico che ci voglio mettere dentro il toString dell'elemento che voglio infilarci e nella pagina web mi mette il nome dello student1
//
//const mainContainer = document.getElementById('main-container');             //il div cui ho dato la classe sta venendo recuperato da questa funzione
//
//const h2Element = document.createElement('h2');
//
//const textNode = document.createTextNode(student1.toString());
//
//h2Element.appendChild(textNode);
//
//
//
//mainContainer.appendChild(h2Element);


function renderPage(){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < classroom1.students.length; i++) {
        if (i % 2 === 0){
            const h3Element = document.createElement('h3');
            const node = document.createTextNode('Coppia: ' + (i/2+1) + ':');
            h3Element.appendChild(node);
            mainContainer.appendChild(h3Element);
        }

        const student = classroom1.students[i];

        const divElement = document.createElement('div');                           
        divElement.classList.add('student-div');
        const spanName = document.createElement('span');
        const textNodeName = document.createTextNode(student.toStringName());
        spanName.appendChild(textNodeName);  
        divElement.appendChild(spanName);
        const spanSurname = document.createElement('span');
        const textNodeSurname = document.createTextNode(student.toStringSurname());
        spanSurname.appendChild(textNodeSurname);  
        divElement.appendChild(spanSurname);
        const spanYob = document.createElement('span');
        const textNodeYob = document.createTextNode(student.toStringYob());
        spanYob.appendChild(textNodeYob);  
        divElement.appendChild(spanYob);
        const spanNickname = document.createElement('span');
        const textNodeNickname = document.createTextNode(student.toStringNickname());
        spanNickname.appendChild(textNodeNickname);  
        divElement.appendChild(spanNickname);
        
                                              
        mainContainer.appendChild(divElement);
    }

}

renderPage();

function shuffle(){

    console.log('Sto rimescolando');
    classroom1.shuffleStudents();
    renderPage();

}
class Student{

constructor(name, surname, yob, nickname){

    this.name = name;
    this.surname = surname;
    this.yob = yob;
    this.nickname = nickname;

}

toStringName(){

    return 'Nome: ' + this.name + '\n';
    
    }


toStringSurname(){

    return 'Cognome: ' + this.surname + '\n';
    

}

toStringYob(){

    return 'Anno di nascita: ' + this.yob + '\n';
   

}


toStringNickname(){

    return 'Soprannome: ' + this.nickname;


}

}
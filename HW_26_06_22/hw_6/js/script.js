function human (firstName, lastName, age, location){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
    human.scorer++;

    this.print = function (){
        if (Array.isArray(arrhuman)){
            for (let element of arrhuman){
                document.write(`<p> Name: ${element.firstName} <br>  Lastname: ${element.lastName} <br> Age: ${element.age} <br> Location: ${element.location} <br> </p>`)
            }
        }
    }
}
human.scorer = 0;
human.scorer.print = function (){
    document.write(`Registered: ${human.scorer} <br>`)
}
const arrhuman = [];
let a = prompt("how many people registered ", "0");
for (i=0; i<a; i++){
    let firstName = prompt("Введите имя " + (i+1) + "-го человека " , "first name");
    let lastName = prompt( "Введите фамилию " + (i+1) + "-го человека " , "last name");
    let age = prompt( "Введите возраст " + (i+1) + "-го человека " , "age");
    let location = prompt( "Введите город " + (i+1) + "-го человека " , "location");

    arrhuman[i] = new human ( firstName, lastName, age, location);
};
document.write(`Всего зарегестрировано`);
arrhuman.forEach(function (element){
    element.print()

})


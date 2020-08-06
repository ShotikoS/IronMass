//ფუნქციის გამოძახების მეთოდები
function Person(a, b, c){
    console.log(this)
}

Person.call({}, 1, 2, 3); //პირველ პარამეტრად this-ის მნიშვნელობა

let o = {
    p: Person
}

o.p(); //ფუნქციის გამოძახება ობიექტიდან. ამ შემთხვევაში this-ის მნიშვნელობა იქნება თვითონ ობიექტი

Person.apply({}, [1, 21, 2 ]) //პირველი პარამეტრი არის thisის მნიშვნელობა მეორე პარამეტრი არის ფუნცქციის პარამეტრების მასივი


function PersonOne(name, lastname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.getAge = function(){
        return this.age;
    }
}

let person = new PersonOne('test1', 'test2', 13);

console.log(person.age)



class Person {

    constructor() {
        
    }
}
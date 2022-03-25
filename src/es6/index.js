function nuevaFuncion(name, age, country){

    var name = name || "Joel"
    var age = age || 24
    var country = country || "Peru" 

    console.log(name, age, country)

}
nuevaFuncion();

function nuevaFuncion2(name = "Joel", age = 24 , country = "Peru"){
    console.log(name, age ,country)
}
nuevaFuncion2();
nuevaFuncion2("Wilson", 25 , "Colombia")

let hello = "Hello";
let world = "world";

let epicphrase = hello + ' ' + world;
console.log(epicphrase)

let epicphrase2  = `${hello} ${world}`
console.log(epicphrase2)

console.log("Hola Mundo" +" "+"Soy Joel Wilson\n"
+ "Tengo 25 años, y estoy meti do en el mundo de la programacion")


console.log(`Hola mundo soy Joel Wilson
tengo 25 años y estoy metido en el mundo de la programacion`)


let person = {
    'name' : 'Joel',
    'age' : 25,
    'country' : 'Perú'
}

console.log(person.age,person.country, person.name);

let { age } = person;
console.log(age);


let name = "joel"
let age = 25;

obj ={ name : name, age : age};

console.log(obj)

obj2 = {name ,age };
console.log(obj2)



const names = [
    { name : "Joel", age : 25},
    { name : "Wilson", age : 17}
]

let lista = names.map(function (a){
    console.log(a.age);
}) 

let lista1 = names.map(item => console.log(item.age))



const  cuadrado = numero => numero * numero;
console.log(cuadrado(25))










const promesa = () => {
    return new Promise( (resolve, reject) => {
        if (false){
            resolve("Hey");
        }else{
            reject("Ups");
        }
    });
}

 promesa ()
 .then(response => console.log(response))
 .catch(error => console.log(error));


class calculator{
    constructor (){
        this.valorA = 0;
        this.valorB = 0;
    }
    sum(valorA,valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const calc = new calculator();
console.log(calc.sum(4,5));
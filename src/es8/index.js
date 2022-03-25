const data = {
    fronted: "Joel",
    backend:  "wilson",
    design: "Ana"
}

const array = Object.entries(data);
console.log(array)

const data = {
    fronted: "Joel",
    backend:  "wilson",
    design: "Ana"
}

const values = Object.values(data);

console.log(values)


const string = "Hola";

console.log(string.padStart(7,'hi'))

console.log(string.padEnd(12,'----'))


const helloworld = () =>{
    return new Promise ((resolve,reject) => {
        (true)
        ? setTimeout(()=> resolve('HelloWorld'), 3000)
        : reject(new Error ('Test error'))
    })
};

const helloAsync = async() => {
    const hello  = await helloworld();

    console.log(hello);
}

helloAsync();

const otraFunction = async () =>{
    try {
        const hello  = await helloworld();
        console.log(hello);    
    }
    catch(error){
        console.log(error);
    }
};

otraFunction();
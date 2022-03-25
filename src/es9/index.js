const obj = {
    name: "Joel",
    age : 25,
    country : "Pe"
};

let {country, ...all} = obj;

console.log(all);

let b = 'a';
let b = 'b';

console.log(b)



const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (false)
        ? setTimeout(()=> resolve ("HelloWorld"),3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld ();
    console.log(hello);
}

helloAsync();

const otraFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

otraFunction();



const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error(`Menor a 5 ${number}`)),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));



const obj = {
    name: 'joel',
    age: 25,
    country : "PE"
};

let {name, ...all} = obj;
console.log(name,all);

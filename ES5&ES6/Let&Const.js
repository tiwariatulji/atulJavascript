console.log('jai mata di');
document.getElementById('demo').innerHTML = "<h1> Es6 practical<h1/>"

 const Check=()=> {  // let and const 
    let a = 10;
    if(true){
        let a= 20; console.log(a);}
        console.log(a);
    
    }
Check();

// Distructing method

const Biodata = { name:"Atul Tiwari",Age:25, Birthplace:"Azamgarh"};
console.log(Biodata);

let tiger = Biodata.Birthplace; // normal Acess karne k liye.
console.log(tiger);

const {name,Age,Birthplace} = Biodata; // Object Distrutring;
console.log(Age);

/// templete String 

let Show = "My name is " + name + "My Age is "+ Age + "I was born in" + Birthplace;
document.write(Show );   // normal

let ShowValue = `My name is ${name}. My Age is ${Age}. I was Born${Birthplace}`;
document.write(ShowValue);  // templete Sring
   
// Default Agrument

function FunAge (age) {
    return age;
}
FunAge(18);

function Funage (age=18) {  // Default Age jais hi hum finction ko call karenge to wo defaut value le lega.
    return age;       
    
}
Funage();

/// Object properties

const Short = {name:name, Age:Age, Birthplace:Birthplace};
console.log(Short);

const Shortzobj = {name,Age,Birthplace};
console.log(Shortzobj);

/// Es 7 Includes Properties
let party = ["Atul", "Anil", 'Vipul'];
let names = prompt("What is Your name");
const check =  party.includes(names);

if (check===true){
    alert ("Welcome Our Party")
}
else{
    alert('You Are Not invited')
}
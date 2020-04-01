console.log('hello India');
document.getElementById('demo').innerHTML = "<h2> hello Every one <h2/>";

function name(){
    document.write("Hello India");
}
name();

//  setTimeout(() => {                           ///// set Timout
//     document.write("jai Sai ram Ji");
// }, 3000);

name =()=> document.write('Hello user');  // Arrow Function
name();

let obj1 = {
    name: ['Atul', "Tiwari", 'Vipul'],
    speak(){
      this.name.forEach((element)=>{
            console.log('jai Ho '+ element)
      })
    }
}
obj1.speak();


let obj2 = {                // laxical this
greeting:'goog morning',
    name:['Atul','Tiwari', 'Vipul'],
    speak(){
const self =this; 
        this.name.forEach(function Sum(element) {
            console.log(self.greeting+"jai Ho"+element);
            
        })
    }
}
obj2.speak();


let obj3 = {                /// use of laxical this
    greeting:'goog morning',
    name:['Atul','Tiwari', 'Vipul'],
    speak(){
        this.name.forEach(function Sum(element) {
            console.log(this.greeting+"jai Ho"+element);
            
        })
    }
}
obj3.speak();

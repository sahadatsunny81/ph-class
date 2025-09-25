 // M24.2 traverse dom....



    
    // console.log("Hello World");
    // console.log("bye bye");
    // let info = {
    //     name:"dom",
    //     age:20,
    //     study: function student(about){
    //         console.log("I am studying: " + about); 
    //     }
    // }
    // const list = document.getElementsByTagName("li");
    // for(const li of list){
    //     console.log(li.innerText);
    // }


 // M24.3 ......

    // let keep = document.getElementsByClassName("can");
    // console.log(keep.innerText);
    // let keep2 = document.getElementById("first");
    // console.log(keep2.innerText="change dom");


// M24.4 query selector.....

    //  const find = document.querySelectorAll("#container ul ")
    //  console.log(find.innerText);




// M24.5,6 change style,get and set attribute....


// const v = document.getElementById('n');
// v.style.backgroundColor = 'red'
// v.style.borderRadius = '10px'
// v.style.textAlign = 'center'

// const c = document.getElementById('ct');
// c.classList;
// c.classList.add('bg-red');




// M24.7 create html element and append child...

    // //   step 1 create element for li...

    // let newChild = document.createElement("li");
    // newChild.innerText = "Ha Du Du";

    // //   step 2 find element for 

    // let gamelist = document.getElementById('play-list');

    // // step 3 append child to parent....

    // gamelist.appendChild(newChild);





// M25.1,2 onclick handler....

    // function makeYellow(){
    //     document.body.style.backgroundColor = "yellow";
    // }



// M25.3,4 addeventlistener event handler....

    // document.getElementById('event-listener')
    //  .addEventListener('click', function(){
    //     document.body.style.backgroundColor ='black';
    //     // console.log('hello');
    // })

    // write in input field and submit it to another....

    // step -1 

    // const catched = document.getElementById('text-catch')
    // const view = document.getElementById('hello')
    
    // // push in btn

    // document.getElementById('btn')
    //   .addEventListener('click', function(){
    //        const geted = catched.value
    //     //    console.log(geted)
    //     view.innerText = geted

    // })
    



// 25.5 create comment box....



//     // step 1 post button handler...

//     const clickbtn = document.getElementById('postBtn')
//     .addEventListener('click', function(){


//     // step 2 connect comment box....

//     const getbox = document.getElementsByClassName('comment-box');
//     // const newCommnet = getbox.value

    
//     // step 3 create new element and ....

//     const newelement = document.createElement('p')
//     getbox.value = newelement


//     const getcmnt = document.getElementById('div-box')

//     // step 5 append the new p tag to parent node....

//     getbox



// })


// M25.6 different type of event handler....


// document.getElementsByClassName('input-field')
// .addEventListener('mouseover', function(){
//     console.log('mouse over on input field')
// })
// document.getElementsByClassName('input-field2')
// .addEventListener('mouseout', function(){
//     console.log('mouse out on input field2')
// })
// document.getElementsByClassName('input-field3')
// .addEventListener('mouseout', function(){
//     console.log('mouse over on input field3')
// })






// M25.7 event bubbling and event propagation......



// document.getElementById('div1')
// .addEventListener('click', function(){
//     console.log('Div Clicked')
// })

// document.getElementById('ol1')
// .addEventListener('click', function(){
//     console.log('ol Clicked')
// })


// document.getElementById('1')
// .addEventListener('click', function(event){
//     console.log('1 Clicked')
//     // event.stopPropagation()
//     event.stopImmediatePropagation()

// })
//     document.getElementById('1')
//     .addEventListener('click', function(event){
//         console.log('1 2nd Clicked')
        
//     })
  
// document.getElementById('2')
// .addEventListener('click', function(){
//     console.log('2 Clicked')
// })
// document.getElementById('3')
// .addEventListener('click', function(){
//     console.log('3 Clicked')
// })
// document.getElementById('4')
// .addEventListener('click', function(){
//     console.log('4 Clicked')
// })
// document.getElementById('5')
// .addEventListener('click', function(){
//     console.log('5 Clicked')
// })
// document.getElementById('6')
// .addEventListener('click', function(){
//     console.log('6 Clicked')
// })



// 25.8 event delegation and benefits of event bubble....






// M29.2 function default parameter.....

// function numbers(sum1=0,sum2=10){

//     const total=sum1+sum2;
//     console.log(sum1,sum2,total)
    
// }

// numbers(10);  //its outout is - 10 undefined NaN;




// M29.3 Template string , multiple line string, dynamic string....

// const price = 15000;
// const totalPrice = `Product price is ${price} and 15% discount price is ${price-price/100*15}`;
// console.log(totalPrice);




// M29.4,5 Arrow function....


    // empty arrow function....

// const single = ()=>console.log(2+3);
// single()


// const add = (num1,num2)=>num1+num2

// const add1 = add(10,20);
// console.log(add1);

//     // multi line arrow function....

// const add2 = (x,y)=>{
//     const num3 = x*2;
//     const num4 = y*2;
//     const add2 = num3+num4;
//     console.log(add2);
// }

// add2(10,20)




// M29.6 spread operator, math max , copy arrays....


//spread (...) operator can spread array or objects element...

// const numbers =[10,20,30,40];
// console.log(...numbers);
// const sum1 = [...numbers,80,140,510,610];
// console.log(sum1);

// const str = ("serial")
// const marks ={
//     math:40,
//     english:50,
//     bangla:60

// }
// const ss = {class:1, ...marks, str }
// console.log(ss);

// // //spread an array....

// const digits = [10,20,30];
// const maxN = Math.max(...digits)   // Math.max not take       array. if i need max number of array i have to use spread.
// // console.log(Math.max(...digits));
// console.log(maxN)

// const total = (a,b,c) => a+b+c;
// total(...digits); //if use (...) it can output digits as spread in total other total can take digit as an argument. 




// M29.7 array and object destracturing.....

// const {price , brand, tax= "7%" }={price:200, brand:'apple'}

// console.log(price,brand,tax);

// const [a,b] = [10,20,30,40]
// console.log(a,b);



// M29.8 object data delete,seal,freeze,keys,values,entries.....


// const student ={

//     name:'sunny',
//     roll:1,
//     class:5,
//     friend:'sakib'

// }

// Object.seal(student)  // seal can not delete or add new property but can change value...
// Object.freeze(student) // freeze can not delete,add or change value...

// const keys = Object.keys(student);
// const values = Object.values(student);
// const entries = Object.entries(student);
// console.log(keys);
// console.log(values);
// console.log(entries);
// const deletes = delete student.friend
// console.log(student);



// M29.9 loop through object by for in....

// const student ={
//     name:"sunny",
//     roll:1,
//     class:5
// }

// for(const loops in student){
//     const chol = student[loops];
//     console.log(loops,chol);
// }





// M30.2 access value, nested object,optional chaining,dot and bracket notation.....


// const student ={
//     name:'sunny',
//     roll:1,
//     '2': 'no',
//     // mother :{
//     //     name:'salma',
//     //     age : ,
//     // }
// }

// // const outout1 = student.name // dot notation...
// // const outout = student["name"]; // bracket notation is more useable from dot notation...
// console.log(student[mother])
// // console.log(outout1);

// // for (const values in student){
// //     console.log(student[values]);
// // }
    // kono property er data missing thakle seita undefined dekhai tai missing data er pase eita (?) dite hobe... 




// M30.3 Array map to do one line loop....


// const num1 = [ 10, 20, 30, 50, 40];

// const numloop = num1.map(num => num*2)
// console.log(numloop);

    // by use of (.map) you can function a loop shortly and output be an array....



    
    
// M30.4,5 foreach,filter,find,reduce and difference between them....



// const number = [ 2,5,10,20,30,40,50 ]

// const big10 = number.filter(x => x>10)

// // (.find ) method find first equal element only with condition....

// const getFirst = number.find(x => x % 4 === 0);
// console.log(getFirst);

// const num1 =[1,2,3,4,5,6]

// const sum = num1.reduce((previous,current) => previous + current,0)
// console.log(sum);









// M14.7 js else if condition 

// var age = 20;
// var price = 1000;

// if (age>=50){
//     // 10% discount
//     var discount = price*10/100;
//     var pay = price-discount;
//     console.log(pay);
// }
// else if(age<18){
//     var discount = price*15/100;
//     var pay = price-discount;
//     console.log(pay);

// }
// else {
//     console.log("no discount");
// }


// M14.8 js ternary operator------

// var price= 900;
// var leader = true;

// if (leader=true){
//     console.log(price/2);
// }
// else{
//     console.log(price);
// }

// with tarnary

// price = leader === true ? price>1000? console.log(price/2): console.log("dhuur") : console.log(price+100);



// M15.1 Loop-----

// const fruits =['banana', 'apple', 'coconut', 'mango', 'jackfruit'];

// for(const fruit of fruits ){
//     console.log(fruit);
//     console.log('I want to eat')

// }




// M15.2,3 While Loop------

// let num = 0;

// while (num < 5){
//     console.log("looping", num);
//     num = num+1;
    
// }

// let num = 1;
// let sum = 0; ---loop variable----

// while (num <= 10){   ---loop condition-----
//     console.log("num:", num); ----loop statement----
//     sum=num+sum;
//     console.log("sum:", sum);
//     num++  ----loop incriment----
// }

// while (num <= 10){
//     console.log(num);

//     if(num % 2 === 0){
//         console.log('even number:', num);
//     }else{
//         console.log("odd number:", num);
//     }
//     num++
// }



// M15.4 for loop use------

// let num =0;

// for(let i=1; i<=20 ; i=i+2 ){
//     console.log(i);
// }


// M15.5 for loop practice------

// let sum = 0;

// for (let i = 1; i<=20; i++){
//     sum=sum+i;
//     // console.log(sum);
// }
// console.log(sum);



// M15.6 use loop------

// 

// for(let num = 0 ; num <= 10; num++ ){
//     if(num % 2 !== 0){
//         console.log("odd number:", num);
//     }
//     else{
//         console.log("even number:", num)
//     }
// }

// 0 to 50 number that are devesiable by 3 and 5

// for (let num =0; num <= 50; num++){
//     if(num % 3 === 0 && num % 5 === 0 ){
//         console.log(num);
//     }
// }




// M15.7 break and continue-----


// for (let n =15 ; n < 50; n++ ){
//      console.log(n);
//     if(n >= 35){
//         break;
//     }
// }



// M15.8 Do while loop------

// let n = 10;

// do{
//     console.log(n);
//     n++
// }
// while(n<10) //do while loop means that if condition are false loop will for run 1 time... 


// M15.5.5 array methods--------





// M16.2 lowercase and uppercase-------

// use .trim() to clear space of start and end of a string 


// var name1 = "aBcdf";
// var name2 = "ABCDF";

// if(name1.toLowerCase() === name2.toLowerCase()){
//     console.log("same!!");

// }
// else{
//     console.log("not same");
// }




// M16.3 js slice,join,concate-------


// js slice() cut a strings slicily...

// var name1 = "absdefghijkl";
// console.log(name1.slice(2,5))

// js string split().....

// var sentence = "I am a good boy";
// var friends = "rahim, karim, fahim, dahim";
// console.log(sentence.split());
// console.log(sentence.split(""));
// console.log(sentence.split(" "));  
// console.log(sentence.split("a"));
// console.log(friends.split(","));

// js string join()......

// var arraytoStr = [ 'rahim', ' karim', ' fahim', ' dahim' ];
// console.log(arraytoStr.join(''));

// js concating.....

// var first = "abid";
// var last = "nabid";

// var fullname = first+last;
// var fullname = first+" "+last;
// var fullname = first.concat(" ").concat(last);
// console.log(fullname);


// includes...search any word....

// console.log(last.includes('x'));



// M16.7 get object property-----

// var person = {
//     name: "ss",
//     roll : 1,
//     "places":['cp','dk','ctg'],
//     "food" :{
//         summer:"mango",
//         winter:"dim"
//     }

// }
// person["roll"]= 2
// console.log(person["places"]); //object property call by bracket
// console.log(person.roll) //dot notation




//M16.8 nested object- keys,values,delete......

// var property = Object.keys(person); //call objects property name
// var value = Object.values(person); //call objects property values
// console.log(property);
// console.log(value);
// console.log(person);
// console.log(person["places"])
// delete person.roll
// console.log(person);



// M16.9 loop an object------

// const mobile = {
//     brand: "iphone",
//     price: 80000,
//     color: "black",
//     isnew: true
// }
// const keys = Object.keys(mobile)
// console.log(keys);

// for (const key of keys){
//     console.log(key, ':', mobile[key] );
// }
// console.log(mobile)



// M18.2 loop array ------

// let fruits =['apple', 'mango','cocunat','jackfruit' ]

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i])
//     i++
// }


// M18.3 reverse an array-----

// let fruits =['apple', 'mango','cocunat','jackfruit']
// let reversed = []

// for (let i= 0; i<fruits.length; i++){
//     console.log(fruits[i]);
//     reversed.unshift(fruits[i])
// }

// for (let i=fruits.length-1;i >= 0; i--){
//     console.log(fruits[i]);
//     reversed.push(fruits[i])
// }

// console.log(reversed);

// M18.5 access object in an array

// let employee = [
//     {name:"abul", salary:40000, skill: "JS"},
//     {name:"babul", salary:60000, skill: "python"},
//     {name:"makbul", salary:30000, skill: "php"},
//     {name:"kabul", salary:50000, skill: "wordpress"}
    
// ]
// console.log(employee[2].salary);
// for(const emp of employee){
//     console.log(emp.name+ ':'+ emp.salary)
//     console.log(emp.name,emp.salary)
//     const personinfo=(emp.name,emp.skill)
//     console.log(personinfo);
// }

// M18.6 array of array, 2d array

// let num = [
//     [1,4,5,7,8],
//     [5,6,7,3,4],
//     [8,3,2,1,5]
// ]
// console.log(num[0][3]);
// num [0][3]=9;
// num[2].pop()
// console.log(num[0][3]);
// console.log(num)

// let 
// console.log(num)

// M18.7 copy array element to another array.....

// ekta array clone copy normally kora jai na...

// const numbers = [3,4,5,9,7];

// const new_number = Array.from(numbers); //array te value add korar system....
// const new_number = [...numbers]   
// new_number.push(9)
// console.log(numbers);
// console.log(new_number);




// M19.3 function...
// function add(num){
//     console.log('Value:', num);
//     const square = num * num;
//     console.log('Square:', square);
    
// }
// add(5);



// M19.4 function with parameter and argument...


// function add(num1, num2){
//     console.log('father:', num1);
//     console.log('son:', num2);
//     const diff = (num1-num2);
//     console.log('diff:', diff);     
// }
// add(30, 5);

// M19.7 different type of parameter....

// function diff(num, bool){
//     if(bool===true){
//         const output = num * 2;
//         return output;
//     }
//     else{
//         const output = num * 3;
//         return output;
//     }
// }

// console.log (diff(10, true));
// console.log (diff(42, false));
// console.log (diff(21, true));

// function number(writes){
//     const read = writes.length;    
//     return read;    
// }
// number([1,2,3,4,5,6]); 




// M20.2 Inchi to Feet,miles to KM.....  

// function inchToFeet(inch){   
       
//     const feetquantity = inch / 12;  
//     const feetfinal = parseInt(feetquantity);
//     const inchquantity = inch % 12;
//     const finalsize = feetfinal + " feet " + inchquantity + " inch";
//     return finalsize;

// }

// let shuvo = inchToFeet(62);
// console.log(shuvo);



// M20.3 leap year check.....

// function isLeapYear(year){

//     if ( year % 4 === 0 && year % 100 !== 0){
//         return true; 
//     }else if(year % 400 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const check = isLeapYear(2024);
// console.log(check); 



// M20.4 check odd number and avrage of odd number......

// function checkOdd (numbers){
//     const odd =[]
//     for( const number of numbers){
//         if(number % 2 !== 0){
//             console.log("Odd number:", number);
//             odd.push(number);
//         }
//     }

//     let sum = 0;
//     for(const oddcunt of odd){
//             sum = sum + oddcunt;
//             console.log('oddSum:', sum);
//     }

//      console.log(odd);
//      console.log(sum);

    
//     let avrage = sum/ odd.length;
//     console.log("Odd number avrage:", avrage);

// }

// checkOdd([1,2,3,4,5,6,7,8,9,10]);



// M20.5 remove duplicate number from an array-----


// function removeDuplicate(array){
//     const unique = [];

//     for(const number of array){
//         if(unique.includes(number) === false){
//             unique.push(number);
//         }
//     }
//     console.log("Unique array:", unique);

//     return unique;
        
// }

// const number = [1,2,3,4,1,5,6,4,7,8,6,9,10];
// const number2 = [12,13,14,15,16,12,17,13,18];
// removeDuplicate(number);
// removeDuplicate(number2);


// M20.6 js Math object-----

// console.log(Math.PI)
// console.log(Math.abs(-5)); // absolute value
// console.log(Math.ceil(3.4)); // round up
// console.log(Math.floor(3.4)); // round down
// console.log(Math.max(3,4,5,6,7,8)); // maximum value
// console.log(Math.min(3,4,5,6,7,8)); // minimum value
// console.log(Math.round(3.4));
// console.log(Math.round(Math.random()*10));



// M21.1 who will get prize....


// function getMax(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// const max1 = getMax(5, 10);
// const max2 = getMax(20, 15);
// const ultimateMax = getMax(max1, max2);
// console.log("Maximum value is:", ultimateMax);
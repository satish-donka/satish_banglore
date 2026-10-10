// // console.log("satish"); 
// var a=10;
// let c=20;
// const b=30;
// var a=20
// console.log(a);
// console.log(b);
// console.log(c);
// d=50
// e=50 
// console.log(d+e)

// let x=[1,2,3,4,5];
// let y=[1,2,3,4,5]
// console.log(x==y);
// console.log(x===y);

// let weekday=7;
// switch(weekday){
//     case 1 :
//         console.log('monday');
//         break;
//     case 2 :
//         console.log('tuesday');
//         break;
//     case 3 :
//         console.log('wednesday');
//         break;
//     case 4 :
//         console.log('thursday');
//         break;
//     case 5 :
//         console.log('friday');
//         break;
//     case 6 :
//         console.log('saturday');
//         break;
//     case 7 :
//         console.log('sunday');
//         break;
//     default :
//         console.log("HELLO")

// }

// let a=0;
// while(a>=(-100)){
//     console.log(a);
//     a--
// }

// i=1;
// while(i>=1){
//     console.log(i);
//     i++;
// }

// let i =10;
// do{
//     console.log(i);
//     i++
// } while(i>=100);

// let sat=[1,2,3,4,5];
// for(let ish in sat){
//     console.log(sat);
// }
// for (let ish of sat){
//     console.log(sat);
// }

// let obj={
//     name : "satish" ,
//     age : 22 ,
//     city : "banglore" 
// }
// // console.log(obj)
// for (let sat in obj){
//     console.log(obj[sat]);
// }
// for (let sat of obj) {
//     console.log(obj.sat);
// }

// functions:=

// function declaration:

// function test(){
//     return "hi"
// }
// test()

//function exression:=

//1)named function expression:-

// let a=function test(){
//     return "hi"
// }
// a()

//2)annonamous function:=

// let a=function (){
//     return "hi"
// }
// a()

//3)arrow function:-

// let b=()=>{
//     return "arrow"
// }
// b()

//parameters and arguments:==

// function test(name,age,...rest){
// console.log(name,age,rest)
// // console.log(arguments)
// }
// // test("satish")
// test("satya",30,"tcs","hiii")


//scope:=

//global
// var a = 1
// let b = 2
// const c = 3
// const d=4

// console.log(a)
// console.log(b)
// console.log(c)

// console.log("global",d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)


// function test() {
// console.log(a)
// console.log(b)
// console.log(c)

// var d=4
// let e=5
// const f=6

// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)


// return function test2() {
// console.log(a)
// console.log(b)
// console.log(c)
//     console.log(d)
// console.log(e)
// console.log(f)

// var g=7
// let h=8
// const i=9

// console.log(g)
// console.log(h)
// console.log(i)


// }
// }
// let satya=test()
// satya()

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(hello());

// var a="Nari";
// var b=20;
// var c= true;
// var d
// var e=null;
// var f= {name:"dhoni",
//     age:40
// }
// var g=[1,2,3,4,5];
// var h = function test(){
//     console.log("named functiion");
// }
// var i = function(){
//     console.log("anonymous function");
// }
// var j=()=>{
//     console.log("array function")
// }
// function hello(){
//     return "hello"
//     // console.log("function declaration");
// }
// console.log(name1)
// const name1="hello"


//clouser:=

// function test() {
//     let a = 10
//     return function test2() {
//         console.log(a);
//         return function test3(){
//             console.log(a)
//         }
//     }
// }
// let test2 = test()
// let test3 =test2()
// test3()

// function test1() {
//         console.log(a)

//     return function test2() {
//         var a = 20
        
//     }
// }
// let test2 = test1()
// test2()
// test3()

// practise.............

// function greet(){
//     console.log(10+20);
// }
// greet()

// function greet(name){
//     console.log("welcome to you "+ name + "..");
// }
// greet("satish");

// function square(num){
//     console.log(num**2);
// }
// square(5)

// let a=10;
// let b=3;

// console.log(a + b); 
// console.log(a - b); 
// console.log(a * b); 
// console.log(a / b); 
// console.log(a % b); 
// console.log(a ** b);

// let a =25;
// if (a>=25 || a<=10){
//     console.log("variable in range");
// }
// else{
//     console.log("variable not in range");
// }
// console.log(5==5);
// console.log(5===5);
// console.log(5=='5');
// // console.log(5==='5');
// let a=null;
// let b =20;
// console.log(a)
// console.log(b??=a);
// console.log(a);
// console.log(b)

let a = 2;
let vote=a>=18? "eligible for vote": "not eligible for vote";
console.log(vote);


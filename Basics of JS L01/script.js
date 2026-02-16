//BASIC LOOP QUESTIONS FOR PRACTICE

// // numbers from 1-10 using for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// //numbers from 10-1 using while loop
// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// //even number form 1 to 10 
// for(let i=0;i<=10;i+=2){
//     console.log(i);
// }

// //odd numbers form 1 to 15
// let j=1;
// while(j<=15){
//     console.log(j);
//     j+=2;
// }

// //table of 5
// for(let i=1; i<=10;i++){
//     //console.log(5*i);
//     Console.log(`5 x ${i} = ${5*i}`);
// }

// //sum of numbers form 1 to 100
// let sum=0;
// for(let i=1; i<=100; i++){
//     sum+=i;
// }
// console.log(i);

// //numbers from 1 to 50 which are divisible by 3
// for(let i=1; i<=50 ;i++){
//     if(i%3===0) console.log(i);
// }

// //input number is even or odd?
// let num = prompt("Give a number");
// if(num%2==0) console.log(`${num} is Even.`);
// else console.log(`${num} is Odd.`);

//count number which are divisible by both 3 and 5 from 1 to 100
// sum=0;
// for(let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         sum+=1;
//         console.log(`${i} is one of those nums.`);
//     }
// }
// console.log(`${sum} such numbers found.`)

// //loop stops at first multiple of 7
// for(let i=1;i<=100;i++){
//     if(i%7==0) break;
//     console.log(i);
// }

// //skip every multiple of 3
// for(i=1; i<=20; i++){
//     if(i%3 ===0 ) continue;
//     console.log(i);
// }

// //sum of the digits of a number
// let num=prompt("Enter value");
// let count=0;
// while(num>0){
//     count += (num%10);
//     num = Math.floor(num/10);
// }
// console.log(`${count} is the sum of the digits of ${num}`);
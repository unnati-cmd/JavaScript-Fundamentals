// Level-2 Questions

// // Q1 allow only 3 attempts to enter correct password.
// const passkey = "Abcdefghi";
// let i = 3;
// while(i){
//     let pass = prompt("Enter password: ");
//     if(pass === null){
//         console.warn('You canceled');
//         break;
//     }
//     else if(pass.trim() === passkey){
//         alert('Correct! Welcome.');
//         break;
//     }
//     else console.error('Wrong Password!');
//     i--;
// }
// if(i==0) alert('Account locked!');


// // Q2 Count the number of times YES comes in a statement.
// let stmt = prompt('Enter a statement: ');
// const newstr = stmt.split(' ');
// let count = 0;
// newstr.forEach((element) => {
//     if(element === 'yes') count++;
// });
// console.log(count);


// // Q3 count the number of times yes is enteres by the user.
// let count = 0;
// while(true){
//     let word = prompt('Enter Word:');
//     if(word === 'yes') count++;
//     if(word === 'stop') break;
// }
// console.log(count);

// // Q4 Print only first 3 odd number from 1 to 20
// let count = 0;
// for(let i =1; i < 21; i++){
//     if(i%2!=0){
//         console.log(i);
//         count++;
//     }
//     if(count == 3) break;
// }

// // Q5 count he number of positive and negative numbers entered by the user
// let i = 5, pos = 0, ne = 0;
// while(i){
//     let num = +prompt('Enter any number: ');
//     if(num>=0) pos++;
//     else ne++;
//     i--;
// }
// console.log(`Positive: ${pos} \nNegative: ${ne}`);

// Q6 ATM Simulator
let amt = 1000;
let i = 3;
while(i){
    let num = +prompt('Enter amt to be withdrawn: ');
    if(num<=amt){
        console.log(`Amt to be withdrawn: ${num} \nRemaining amt: ${amt-num}`);
        amt -= num;
    }
    else{ 
        alert('Insufficient Balance');
        break;
    }
    i--;
}
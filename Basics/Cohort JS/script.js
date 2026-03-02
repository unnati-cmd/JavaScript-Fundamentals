// Level-2 Questions

// // allow only 3 attempts to enter correct password.
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


// // Count the number of times YES comes in a statement.
// let stmt = prompt('Enter a statement: ');
// const newstr = stmt.split(' ');
// let count = 0;
// newstr.forEach((element) => {
//     if(element === 'yes') count++;
// });
// console.log(count);


// count the number of times yes is enteres by the user.
let count = 0;
while(true){
    let word = prompt('Enter Word:');
    if(word === 'yes') count++;
    if(word === 'stop') break;
}
console.log(count);
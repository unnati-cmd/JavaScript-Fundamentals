//Map, Filter, Reduce, Find, Some, Deconstruct, Spread Operations

//usage of map() to square every number of an array
let arr = [1,2,3,4,5];
let arr2 = arr.map(function(val){
    return val**2;
});
console.log(arr2);

//usage of filter() to keep nums less than 10
let arr3 = arr.filter((val) => {
    if(val<10) return true;
});
console.log(arr3);

//usage of reduce() to sum up all the elements of the array
console.log(arr.reduce( (accumulator, val) => {
    return accumulator + val;
}, 0));

//usage of find() to find the firt number les than 10
console.log(arr.find(function (val){
    return val<=10;
}));

//usage of some() to find out students who have score below 35
console.log(
    arr.some((val) => {
        return val<=35;
    })
);

//usage of every() to check if all the elements of an array are even or not.
console.log(
    arr.every(function(val){
        return val % 2 == 0;
    })
)

//destructure to get the first and the last name
let name = ["Unnati", "N/A", "Mishra"];
let [f, ,l] = name;
console.log(f,l);

//Merge two arrays using spread operator
let a = [1,2];
let b = [3,4];
let c = [...a, ...b];
console.log(c);

//Add India in the beginning of the countries array
countries = ["Afgnistan", "Pakistan", "Indonesia", "China", "Bhutan"];

countries = ["India", ...countries];
console.log(countries);
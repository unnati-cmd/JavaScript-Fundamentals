let obj = {
    name: "Unnati",
    age: 21,
    email: "test@test.com",
};

//one by one keys are accessed
for(let key in obj) {
    console.log(key);
}

//one by one values are accessed
for(let key in obj) {
    console.log(key, obj[key]);
}

//Destructure the key "first-name" as a variable called firsName.
const user = {
    "first-name": "Unnati",
};
//when we have such key names, we have to specify another name which can be used to refer to this value.
let {"first-name" : firstName} = user;

//use object.entries() to put all the key-value pairs as:
// title: JavaScript
// duration: 4 weeks
const course = {
    title: "JavaScrip",
    duration: "4 weeks",
};
Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]);
})
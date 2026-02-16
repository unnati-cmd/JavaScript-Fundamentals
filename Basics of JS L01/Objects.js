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


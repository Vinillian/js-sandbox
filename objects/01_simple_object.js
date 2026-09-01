let user = {
    name: "John",
    age: 30,
    
};


console.log( ` username is ${user.name} `);
console.log( ` userage is ${user.age} `);


user.isAdmin = true;

console.log( ` is user Admin? ${user.isAdmin} `);

console.log(user);

delete user.age;

console.log(user);
console.log(` user age is deleted `);


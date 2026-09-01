console.log(`Объект, объявленный через const, может быть изменён.`);

const user = {
  name: "John"
};

console.log(user); 

console.log(` user.name = "Pete"; `); 

user.name = "Pete"; // (*)

console.log(user); 
console.log(`now username is ${user.name} `); 


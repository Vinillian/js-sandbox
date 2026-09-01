let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
Object.assign(user, {name: "Pete"});
console.log(user); // "Pete"

let clone = Object.assign({}, user);
console.log(clone);


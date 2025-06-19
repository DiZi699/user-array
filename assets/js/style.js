function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5
    );
    users.push(user);
}
User.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

const notSubscribed = users.filter((u) => !u.isSubscribed);
console.log(notSubscribed);
const fullName = users.forEach((u) => console.log(u.fullName()));
const teenager = users.filter((u) => !u.isMale && u.age >= 6 && u.age <= 18);
const spliceIndex = users.findIndex((u) => u.email === "useremail5@gmail.com");
if (spliceIndex !== -1) {
    users.splice(spliceIndex, 1);
}
const changeEmail = users.find((u) => u.id === 2);
if (changeEmail) changeEmail.email = "newemail";
console.log(changeEmail);

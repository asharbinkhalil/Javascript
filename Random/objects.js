var profile =
{
    "name": "John",
    "age": 25,
    "likes": ["reading", "swimming", "travelling"]
}
console.log(profile.name); // John
console.log(profile.age); // 25
console.log(profile.likes); // ["reading", "swimming", "travelling"]
delete profile.age;
console.log(profile.age); // undefined
profile.age = 26;
console.log(profile.age); // 26
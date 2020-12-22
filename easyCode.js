function greeting(firstName){
    return function (lastName){
        return `Hello , ${firstName} ${lastName}`;
    };
}

const testGreeting = greeting('Sara');
console.log(testGreeting('Bernar'))

const lastName = testGreeting('Bernar');
console.log(lastName)

const lastName2 = greeting('Sara')('Bernar');
console.log(lastName2)

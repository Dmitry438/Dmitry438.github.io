let a

console.log(a)
console.log(a=5)
console.log(1 =='1')

if (true && (a=5)){

console.log((a=='5')&& (a=111))} else{
console.log(a==5 && (a=100))}

var someString = ""//"Not empty string"
var newString = someString || "Default string"
console.log(newString)


var obj = {}  // object

// console.log(obj)
//по зпятую интересно в конце 11го видео про условный оператор


console.log(Number('555'))
console.log(typeof (Number('555')))
console.log(String(555))
console.log(typeof (String(555)))
console.log (Boolean('555'))
console.log(typeof (Boolean('555')))
console.log(!!5)
console.log(typeof (!!5))
console.log (!!0)
console.log(typeof (!!0))

console.log(typeof (123+''))
console.log(typeof (+'123'))
console.log(typeof (+'123'))

let number = 33
console.log(number.toString())
console.log(55 .toString())
console.log(77 .toString(16))
console.log(3 .toString(2))
console.log(false .toString())
console.log(number.toString())
console.log( typeof false.toString());


let q = ("ooo","j;k'");
console.log((q,5))

//по запятую интересно в конце 11го видео про условный оператор




let i;
for (i = 10; i >0 ; i--) {
    console.log(i)
}

for (i = 10; i--;) {
    console.log(i)
}


i = 0;
while (i<10){
    console.log(i)
    i++
}

i = 0;
while (i<10){
    console.log(i++)

}


i= 10;
while (i--){
    console.log(i)
}


i = 0;
do console.log(i++)
while (i<5)

let greet = function (name){
    console.log(greet("Test"))
    return "Hello " +name
}

let func = function (callback) {
    var name = "Rev"
    callback(name)
}

func(function (m){
    console.log("Hi " + m)
})



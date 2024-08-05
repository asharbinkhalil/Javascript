var Variable1="Used in whole program"
let Variable2="This will only be used in scope"
const Variable3="Constant, cannot be changed"
// Variable3=3.14 error

console.log("Hello World",Variable3)


var a; //creating, unitialized
var b=7; //assigning and creating
a=b; //assigning
console.log(a+b)
console.log(b++,b--,--b) //7,8,6




var doubleQuotedVariable="Eat a \"Apple\" "
doubleQuotedVariable='Eat a \"Apple\" '
doubleQuotedVariable=`Eat a \"Apple\" `
console.log(doubleQuotedVariable)
console.log(doubleQuotedVariable.length)

var array=["stringData",12,0.1]
array.push("2ndstring")
array.pop();


console.log(array)
array.shift();  //removes first element
array.unshift("Something added by unshift function to the start of array")
console.log(array)

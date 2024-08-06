// // sychornous
// console.log('Start');
// console.log('End');

// // Asynchronous
// setTimeout(() => {

//     console.log('Middle');

// }, 3000);

// console.log('Start');
// console.log('End');




//----------------------------------------------
//Callback

function one(function_name) {
    function_name();

    console.log('one');


}
function two() {
    console.log('two');

}
// one(two);


async function order() {
    try {
        await abc;
    }
    catch (error) {

        console.log("Abc doesn't Exist", error);
    }

    finally {
        console.log("Run Code anyways");
    }
}
// order();



//--`-------------------------------------------
//Ice cream example
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let is_shop_open = true;

let topping_choice = () => {
    return new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(console.log("Which Topping will you like?"));
    },3000);
});

}
async function kitchen()
{
    console.log("A")
    console.log("B")
    await topping_choice()
    console.log("C")
}
kitchen()
console.log("Dishwashing")
console.log("Taking other orders")


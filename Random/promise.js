//--`-------------------------------------------
//Ice cream example
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time) 
        }
        else {
            reject(console.log("Shop is closed"));
        }
    }
    )
}
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))  //passing fucntion in argument

    .then(() => {
        return order(0, () => { console.log("Production has Started") })
    })
    .then(() => {
        return order(2000, () => { console.log("The Fruit Was chopped") })
    })
    .then(() => {
        return order(1000, () => { console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`); })
    })
    .then(() => {
        return order(1000, () => { console.log('The machine was started'); })
    })
    .then(() => {
        return order(1000, () => { console.log(`Ice cream was placed on ${stocks.holder[0]}`); })
    })
    .then(() => {
        return order(1000, () => { console.log(`${stocks.toppings[0]} was added as toppings`); })
    })
    .then(() => {
        return order(1000, () => { console.log('Serve Ice cream'); })
    })
    .catch(() => {  console.log("Customer Left!");  })

    .finally(() => { console.log("Day Ended, Shop is closed.") })



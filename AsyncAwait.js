// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });


// promiseWifeBringingTickets.then((t) =>{
//     console.log(`person3: shows ${t}`);
// });

// const getPopcorn = promiseWifeBringingTickets.then((t) =>{
//     console.log('Wife: I have tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     })
// });

// const getButter = getPopcorn.then((t) =>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`);
//     })
// });

// getButter.then((t) => {
//     console.log((t));
// })


/// Write that all commented code using async/await ...

// const preMovie = async () => {   // async function varible expression.Because we are saving in async function in a varible named preMovie. 
    // const promiseWifeBringingTickets = new Promise((resolve, reject) =>{
    //     setTimeout(() => resolve('ticket'), 3000);
    // });

    // const getPopcorn = new Promise((resolve, reject) => {
    //     resolve('popcorn');
    // });

    // const addButter = new Promise((resolve, reject) => {
    //     resolve('butter');
    // });

    // const getColdDrink = new Promise((resolve, reject) => {
    //     resolve('ColdDrinks');
    // });

    // let ticket = await promiseWifeBringingTickets;

    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry');
    
    // let popcorn = await getPopcorn;

    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await addButter;
    // let drink = await getColdDrink;

    // console.log(`husband: i got some ${butter} on popcorn`);
    // console.log('husband: anything else darling?');
    // console.log(`ohh yeah get ${drink} too.`);
    // console.log('wife: lets go we are getting late');
    // console.log('husband: thank you for the reminder *grins*');

    // handle all using Promise.all() method...
    // let[popcorn, butter, drink] = await Promise.all([getPopcorn, addButter, getColdDrink]);
    // console.log(`${popcorn}, ${butter}, ${drink}`); 

    // return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


// Let's Plan a trip to Manali

function buycar() {
    return new Promise((res, rej) => {
        setTimeout (() => {
            res('Buy a car')
        }, 5000)
    })
}

function planAtrip() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('lets go to manali')
        }, 2000)
    });
}

function reachManali() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('reached manali')
        }, 1000)
    });
    
}

buycar().then((msg) => {
    console.log(msg);
    planAtrip().then((msg2) => {
        console.log(msg2);
        reachManali().then((msg3) => {
            console.log(msg3);
        });
    });
})





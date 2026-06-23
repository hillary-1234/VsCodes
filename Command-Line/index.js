


// // A D V A N C E D -- J A V A S C R I P T ---- T E R N A R Y -- O P E R A T O R S  ///

// const exerciseTimeMins = 10

// // let message = ""

// // if (exerciseTimeMins < 30) {
// //     message ="You need to try harder "

// // } else {
// //     message = " Doing Good "
// // }

// // console.log(message)

// const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good !'

// console.log(message)



// const playerGuess = 69
// const correctAnswer = 69



// let message = playerGuess > correctAnswer ? 'too high' 
//                 :playerGuess < correctAnswer ? 'too low' 
//                     : 'equal!'

// // let message = ''

// // if (playerGuess === correctAnswer) {
// //     message = 'correct!'
// // } else {
// //     message = 'wrong!'
// // }

// console.log(message)




// // S W I T C H -- S T A T E M E N T //


// /** 
//  * Price List
//  * Coffee $2
//  * Sandwiches $5
//  * Salad $4
//  * Lemin Cake $3 
//  */


// function selectItem(item) {
//     let price = 0

//     switch(item) {
//         case 'coffee':
//             price = 2
//             break
//         case 'Sandwiches' :
//             price = 5
//             break
//         case 'Salad':
//             price = 4
//             break
//         case 'Lemin Cake':
//             price = 3
//             break
//         default:
//             return `Sorry, we dont sell ${item}`
//     }

//     return `you selected ${item}. That will be $${price}`

// }

// console.log(selectItem('Lemin Cake'))





// /** O B J E C T ---- D E S T R U C T I O N */

// const favouriteFilm = {
//     title: "Top Gun",
//     year: "1986",
//     genre: "action",
//     star:"Tom Cruise",
//     director: "Tony Scott"

// }

// const { title, year, genre, star, director } = favouriteFilm   


// // /** ITS A DRY code ---- DRY CODE ---- DO NOT REPEAT YOUR SELF  */


// // const title = favouriteFilm.title
// // const year = favouriteFilm.year
// // const genre = favouriteFilm.genre
// // const star = favouriteFilm.star
// // const director = favouriteFilm.director

// console.log(`my favourite file is ${title} starring ${star}. it's an ${genre} film that was directed by ${director} and released in ${year}`)


// //  C H A L L E N G E //


// const dreamHoliday = {
//     destination: 'Monaco ',
//     activity: 'Chilling',
//     accommodation: 'Pent Houses',
//     comapanion:'MySelf',
//     being:'A trillionaire'
// }

// const { destination, activity, accommodation, comapanion, being } = dreamHoliday

// console.log(` I would love to go to ${destination}and do some ${activity}. I'd sleep in my ${accommodation} as ${being}`)




// // U S I N G -- S E T - T I M E R() //


// function displayTracfficLight(light) {
//     console.log(light)
// }

// setTimeout(displayTracfficLight, 3000, "🔴")
//     setTimeout(displayTracfficLight, 6000, "🟡")
//         setTimeout(displayTracfficLight, 9000, "🟢")

// displayTracfficLight("🍎")


// // setTimeout(displayTracfficLight("🍎"), 5000) 


// const answer = {
//     Capital: 'Lima',
//     Point: '10'
// }

// const {Capital, Point} = answer

// function logAnswer() {

//     setTimeout(() => {
//         console.log(`The answer is ${Capital} of course! If you got that right, give yourself ${Point} points.`);
//     }, 3000);
// }

// console.log('What is the capital of peru')

// logAnswer()




// function logAnswer(capital,points) {

//     console.log(`The answer is ${capital} of course! If you got that right, give yourself ${points} points.`);

// }

// console.log('What is the capital of peru')


// // setTimeout(logAnswer, 3000, 'Lima', '10')




// ///  A D D I N G -- A---- B U T T O N

// const report = setTimeout(logAnswer, 3000, 'Lima', '20')


// document.getElementById('stop').addEventListener('click',function(){
//     clearTimeout(report)
//     console.log('Cancelling.....')
// })


// // understanding how JAVASCRIPT is single threaded but run multiple line of code at once ///

// const start = performance.now()

// setTimeout(() => {

//     const end = performance.now()
//     console.log(`Execution time: ${end - start} millisecond`)
// }, 1000)

// for (let i = 0; i < 1000000; i++) {
//     let answer = 1 * 2000000 / 67.8 * (45.7 / 3.2)
// }


// // IMPORT EXPORT NAMED ///


// import { interplanetaryDestinationsArr , shortSpaceTripArr } from "./data.js"
// import getMatchingTripsArr from "./searchFunction.js"


// // // RENAME YOUR EXPORT LIKE THIS //

// // import { interplanetaryDestinationsArr as destination, shortSpaceTripArr } from "./data.js"


// console.log( getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic'))

// // console.log( shortSpaceTripArr )






// //  D A T E () C O N S T R U C T O R S //


// const dateSnapshot = new Date()

// console.log( ` Copyright ${dateSnapshot.getFullYear()} all rights reserved `)




// /// E R R O R  --- C O N S T R U C T O R ///


// function checkUsername(userName) {
//     if (userName) {
//         console.log(userName)
//     } else {
//         console.log( new Error('No username provided'))
//     }
    
// }

// checkUsername()





// // SOME CONSTRUCTORS FOR THE COMMON DATA TYPES //

// String()
// Number()
// Array()
// Object()
// Boolean()


// // const person = {} // instead of using the data type

// const person = new Object()

// person.name = 'Hillary'
// person.age = 25

// console.log(person)






// // P R E --I N C R E M E N T //

// let currentTicketNumber = 0

// function getNextTicketNumber() {
//     return ++currentTicketNumber
// }


// console.log(` Guest 1, your ticket number is: ${getNextTicketNumber()}`)
// console.log(` Guest 2, your ticket number is: ${getNextTicketNumber()}`)
// console.log(` Guest 3, your ticket number is: ${getNextTicketNumber()}`)





// //  H O I S T I N G  / /




// function getWeather() {
//     return "Today's weather is warm and sunny"
// }


// console.log(getWeather())

// console.log(getNews())

// function getNews() {
//     return "A new swimming pool has opened in the town centre..."
// }


// console.log(trafficInfo)

// let trafficInfo = 'All road are busy right now'





// // YOU CAN NAME YOUR EXPORT AND CALL IT BY ITS NAME  //

// import { interplanetaryDestinationsArr as destination, shortSpaceTripArr } from "./data.js"



// console.log(destination)




import { interplanetaryDestinationsArr, shortSpaceTripArr } from "./data.js"

import getMatchingTripsArr from "./searchFunction.js"



console.log(interplanetaryDestinationsArr)















































































































































































































































































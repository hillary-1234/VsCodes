


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




// // IMPORTING A FUNCTION ALSO CAN USE DEFAULT FUNCTION BTU DONT SEE THE REASON WHY 


// import { interplanetaryDestinationsArr, shortSpaceTripArr } from "./data.js"

// import getMatchingTripsArr from "./searchFunction.js"



// console.log (getMatchingTripsArr(interplanetaryDestinationsArr, 'experience'))




// // DATE() CONSTRUCTOR 

// const dateSnapshot = new Date()
// console.log(dateSnapshot.getFullYear().toString()) /// ALMOST THE SAME THING 

// console.log(`you have been a fool since ${dateSnapshot.getFullYear()}`) /// ALMOST THE SAME THING 




// // ERROR CONSTRUCTOR 


// function checkUsername(userName) {
//     if(userName){
//     console.log(userName)
// }  else {
//     console.log(new Error('No username provided')) // EITHER CONSOLE OR throw 

//     throw new Error('No username provided')  // EITHER THIS OR CONSOLE BUT IF YOU USE THIS NOTHING RUNS AFTER IT 

// }
// }

// checkUsername('')




// // PRE -- INCREMENT 

// let currentTicket = 0

// function getNextTicket() {
//     return ++currentTicket

// }


// console.log(`Guest 1, your ticket number is: ${getNextTicket()}`)






// // HOISTING 

// function getWeather() {
//     return " Today's weather is warm and sunny"
// }

// console.log(getWeather())


// console.log(getNews())

// function getNews() {
//     return " you are mad"
// }

// console.log(trafficInfo)

// let trafficInfo = ' All road are busy right now '  // WONT WORK CAUSE IT IS A VARIABLE 




// ARROW FUNCTIONS


// const getSpendAlert = function(amount) {
//     return `Warning! You just spent $${amount}`
// // }


// // USING ARROW FUNCTIONS JUST LIKE REFACTORS  BUT ONLY WORKS FOR SIMPLE FUNCTIONS
// IF YOU HAVE MORE COMPLEX ENTRY YOU NEED TO USE THE " {} " BACK LIKE NEXT LINEEXAMPLE BELOW 

// const getSpendAlert = (name, amount) => {
//     return `Hey ${name}, Warning! You just spent $${amount}`
// }

// const getSpendAlert = (name, amount) => `Hey ${name}, Warning! You just spent $${amount}`


// console.log(getSpendAlert("Hillary", 150))


// const overSpeeding = (speed) => `Warning you are overspeeding at ${speed} MPH`

// console.log(overSpeeding(40))


// const overSpeedings = (speedLimit, carSpeed) => {
//     if (carSpeed > speedLimit) {
//         return `Warning you are overspeeding at ${carSpeed} MPH`
//     } else {
//         return 'Drive safe'
//     }
// }

// console.log(overSpeedings(30, 40))


// // INLINE ARROW FUNCTIONS CHALLENGE

// // THE .map FUNCTION THATS USED INSTED OF LOOPS IN AN ARRAY 



// const distanceTraveledMiles = [267, 345, 234, 190, 299]

// // const distanceTraveledKm = distanceTraveledMiles.map(function(distance) {
// //     return Math.round(distance * 1.6)
// // })


// // console.log(distanceTraveledKm)




// const distanceTraveledKm = distanceTraveledMiles.map( (distance) => Math.round(distance * 1.6))

// // const doubled = nums.map(num => num * 2)

// console.log(distanceTraveledKm)




// // THE .REDUCE FUNCTION 

// // INSTEAD OF CONSTANTLY ADD I JUST REDUCE TO A SINGLE RESULT CONSTANTLY INSTED OF LOOPS 



// import { itemsBoughtArr } from "./itemsBoughtArr.js"

// console.log(itemsBoughtArr)

// function calculateTotalCost(itemsBoughtArr) {

//     const total = itemsBoughtArr.reduce((acc, item) => acc + item.priceUSD, 0)

//     return(total)

// }
// console.log(calculateTotalCost(itemsBoughtArr))

// // POSITONS -- HOW TO DO IT  / /

// // array.reduce((accumulator, currentValue) => {
// //     return updatedValue
// // }, initialValue)





// // DEFAULT PARAMENTERS -- NaN VALUE WHICH IS A VARIABLE NOT ASSINGED WE COULD DO " = " NEXT TO THE VARIABLE DURING DECLEARING //


// import { itemsBoughtArr } from "./itemsBoughtArr.js"

// console.log(itemsBoughtArr)

// function calculateTotalCost(itemsBoughtArr, discount = 0) {

//     const total = itemsBoughtArr.reduce((acc, item) => acc + item.priceUSD, 0)

//     return total - discount

// }
// console.log(calculateTotalCost(itemsBoughtArr))





// // THE REST PARAMETER //  instead of always declaring plus incase of adding variables 

// function setPermisionLevel(permissionLevel, ...names) {

//     names.forEach((name) => console.log(` ${name} now has ${permissionLevel} level access.`))

//     // console.log(` ${name1} now has ${permissionLevel} level access.`)
//     // console.log(` ${name2} now has ${permissionLevel} level access.`)
//     // console.log(` ${name3} now has ${permissionLevel} level access.`)

// }




// // setPermisionLevel('admin', 'Dave', 'Sally','Mike')

// function getLabelsHtml(text, sender, ...id) {
//     const labelsHtml = id.map(name =>
        
//     `<div class="label-card">
//         <p>Dear ${name.name} </p>
//         <p>${text}text</p>
//         <p>Best wishes</p>
//         <p>${sender}</p>
//     </div>`
//     ).join()

//     return labelsHtml
// }


// // }

// // // OR REMOVE THE COST CAUSE WE DONT NEED TO NAME THE ARRAY CAUSE .MAP ALREADY 
// // // OUTPUTS AND ARRAY SO NO NEED TO DECLARE IT AGAIN 



// // function getLabelsHtml(text, sender, ...id) {
// //     return id.map(name =>
        
// //     `<div class="label-card">
// //         <p>Dear ${name.name} </p>
// //         <p>${text}text</p>
// //         <p>Best wishes</p>
// //         <p>${sender}</p>
// //     </div>`
// //     ).join()
// // )


// // }


// const text = 'Thank you for all the hard work throughout the year '
// const sender = 'Tom'

// document.getElementById('labels-container').innerHTML = getLabelsHtml(
//     text, sender,
//     {name: 'Sally'},
//     {name: 'Mike'},
//     {name: 'Rob'},
//     {name: 'Harriet'},
//     {name: 'Hillary'}
// )




// // OBJECT DESTRUCTURING 

// const person = {
//     name: "Sarah",
//     age: 20
// }

// const { name, age } = person

// console.log(name) // Sarah
// console.log(age) // 20






// SUPER CHALLENGES: REAL ESTATE // 



// import { propertyForSale } from "./Properties/PropertiesforSaleArr.js"
// import { placeholderPropertyObj } from "./Properties/placeholderProperties.js"

// // console.log(placeholderPropertyObj)
    


// const getProperty = propertyForSale
// const placeholderProperty = [placeholderPropertyObj]


// const [{propertyLocation, priceGBP, roomsM2, Comment, image}] = propertyForSale
// // const {propertyLocation, priceGBP, roomsM2, Comment, image} = placeholderProperty


// // placeholderProperty

// function getPropertyHtml( getProperty = placeholderProperty ) {

//     return getProperty.map(property => `

//         <section class="card">

//             <img src= ${property.image}>

//             <div class="card-right">
//                 <h2>${property.propertyLocation}</h2>

//                 <p>£${property.priceGBP}</p>

//                 <p>${property.Comment}</p>

//                 <h3>${property.roomsM2.reduce((total, room) => total + room, 0)} m&sup2; </h3>

//             </div>
//         </section>
// `).join()
// }
// document.getElementById('container').innerHTML = getPropertyHtml(getProperty)





// function getPropertyHtml( info ) {

//     return info.map(property => `

//         <section class="card">

//             <img src= ${property.image}>

//             <div class="card-right">
//                 <h2>${property.propertyLocation}</h2>

//                 <p>£${property.priceGBP}</p>

//                 <p>${property.Comment}</p>

//                 <h3>${property.roomsM2.reduce((total, room) => total + room, 0)} m&sup2; </h3>


//             </div>
//         </section>

//     </div>
// `).join('')



// }
// document.getElementById('container').innerHTML = getPropertyHtml(propertyForSale)




// A S Y N C H R O N O U S  J A V A -- S C R I P T  &  A P Is  I N T R O  ///

// A P I = APPLICATION PROGRAMMING INTERFACE -- HELPS YOU CONNECT TWO APPLICATION SERVERS 


// REQUEST AND RESPONSE

// FETCHING WITH .THEN()


// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         const imageElement = document.createElement('img')
//         imageElement.src = data.message
//         imageElement.alt = 'random dog picture'
//         document.getElementById('img-container').appendChild(imageElement)
//     })



// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(errgh => {
//         console.log(errgh)
//         // throw new Error(' you are mad ')
//     })
//     .finally(() => console.log('The operations completed.'))








// // TRYING OUT DISPLAYING IN DOM



// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => {
//                     const textElement = document.createElement('p')
//                     textElement.textContent = data.activity
//                     textElement.textContent = JSON.stringify(data, null, 2)
//                     document
//                             .getElementById('text-container')
//                             .appendChild(textElement)
// })
    







// fetch('https://apis.scrimba.com/bored/api/activity')
//     .then(response => response.json())
//     .then(data => {

//     })







// // USING ASYNC FUNCTION AND WAIT 

//     async function getData() {
//         const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//         const data = await response.json()

//         console.log(data)
//     }

//     getData()




// async function getData() { 
//     try {
//         const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//         if (!response.ok) {
//             throw new Error('There was a problem with the API')
//         }
//         const data = await response.json()

//         console.log(data)
// }

//     catch(error) {
//         console.log("can't get data back")

// }
// }

// getData()

// .finally(() => console.log('The Operations Complete.'))




// // USING ASYNC FUNVTIONS 



// async function getDatas() {
//     try {
//         const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'GET'})
//         if (!response.ok) {
//             throw new Error('Check Api')
//         }
//         const datas = await response.json()
//         console.log(datas)

//     }
//         // console.log(datas)
//     catch(err) {
//         console.log('New api has issues')
//     }
// }

// getDatas()


// fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
//     method: 'POST',

//         headers: {
//                 'Content-Type' : 'application/json'
//         },

//     body: JSON.stringify({
//         title: 'Holiday Nightmares ',
//         body: 'when i was kidnapped in Scotland',
//         userId: 101,
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(error))


// async function newDatass() {
    
// }





// // USING PROMISES  AND PROMISE.ALL


// function createPromise() {
// return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5
//         if (success) {
//             resolve('Operation sucess')
//         } else {
//             reject('Operations failed')
//         }
// })
// }

// try{
//     const promise1 = createPromise()
//     const promise2 = createPromise()
//     const promise3 = createPromise()
//     const result = await Promise.all([promise1, promise2, promise3])
//     console.log(result)
// } catch(err) {
//     console.log(err)
// }

// // promise.then(response => console.log(response))


// try{
//     const response = await promise
//     console.log(response)
// } catch(err) {
//     console.log(err)

// }



// /// FOR ARRAYS OF CONTENTS 


// function preLoading(url) {
//     return new Promise((resolve, reject) => {

//         const img = new Image()

//         img.src = url

//         img.addEventListener('load', () => resolve(img))

//         img.addEventListener('error', () => reject('image not loading'))

//     })
// }

// const imageUrls = [
//     'https://picsum.photos/200',
//     'https://picsum.photos/300',
//     'https://picsum.photos/400'
// ]

// try {

//     const results = await Promise.all(

//         imageUrls.map((url) => preLoading(url))

//     )

//     results.forEach((img) => {
//         document
//             .getElementById('img-container')
//             .appendChild(img)
//     })

// } catch (error) {

//     console.error(error)

// }




// // SINGLE ELEMENTS NOT ARRAYS 


// function preLoading(url){
//     return new Promise((resolve, reject) => {

//         const img = new Image()

//         img.src = url
//         img.alt = 'fine cartoon'

//         img.addEventListener('load', ()=> resolve(img))
//         img.addEventListener('error', ()=> reject('image not loading '))

        
//     })
// }

// try{
//     const results = await preLoading('https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png')
//     console.log(results)
//     document.getElementById('img-container').appendChild(results)
//     } catch (error) {
//         console.error(error)
//     }



// // PROMISES CLASSWORK //


// function uploadFile() {
//     return new Promise((resolve, reject) => {
//         console.log('Step 1: Uploading file...')
//         setTimeout(() =>{
//             resolve('Files have been uploaded')
//         },2000)
//     })
// }

// function processFile(callback) {
//     return new Promise ((resolve, reject) => {
//         console.log('Step 2: Processing file...')
//         setTimeout(() => {
//             resolve('Files have been Processed')
//         },4000)
//     })
// }

// function notifyUser(callback) {
//     return new Promise((resolve, reject) => {
//         console.log('Step 3: Notifying user...')
//         setTimeout(() => {
//             resolve('Users have been notified')
//         },6000)
//     })
// }

// const result = await Promise.all([

//     uploadFile(),

//     processFile(() => {
//         // console.log('File processed')
//     }),

//     notifyUser(() => {
//         // console.log('User notified')
//     })

// ])



// try{
//     const response = await uploadFile()
//     console.log()
// } catch(err) {
//     console.log(err)
// }



// try{
//     const response = await processFile()
//     console.log()
// } catch(err) {
//     console.log(err)
// }



// try{
//     const response = await notifyUser()
//     console.log()
// } catch(err) {
//     console.log(err)
// }
// finally{
//     console.log('All steps completed!')
// }

// // OR 

// try{
// await uploadFile()
// await processFile()
// await notifyUser()
// console.log('All steps are completed!')
// } catch(err) {
//     console.log(err)
// }


// function getImagePromise(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const img = new Image()
//             img.src = url
//             img.alt = 'scenic image'
//             img.addEventListener('load', () => resolve(img))
//             img.addEventListener('error', () => reject(new Error(`failed to load image: ${url}`)))
//         },500)
//     })
// }

// const images = [
//     'https://scrimba.com/links/advancedjs-resources-images-scenic1',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic2',
//     'https://scrimba.com/links/advancedjs-resources-images-scenic3'
// ]


// async function preloadImages(imageUrlsArr) {
//     const imgContainer = document.getElementById('img-container')
//     const uploadContainer = document.getElementById('upload-container')

    
// const promises = images.map((url) => {
//     return getImagePromise(url)
// })

// try{
//     const results = await Promise.all(promises)
//         console.log( 'all img shown')
//         uploadContainer.style.display = 'none'
//         results.forEach((img) => {imgContainer.appendChild(img)})
// }catch(err) {
//         console.log(err)
// }
// }

// document.getElementById('submit-img').addEventListener('click', () => preloadImages(images))






// Promise.all(results)
// .then((results)=> {

//     images.forEach((img) => {
//             uploadContainer.appendChild(img)
//         })
// })
// .catch((err) =>{
//     console.log(err)
// })


// } catch(err) {
//     // console.log('can not load')
// }


// const results = [ ]





// // AI ENGINEERING 


// import { data } from '/utils/dates'

// const tickersArr = []

// const generateReportBtn = document.querySelector('.generate-report-btn')

// generateReportBtn.addEventListener('click', fetchStockData)

// document.getElementById('ticker-input-form').addEventListener('submit', (e) =>{
//     e.preventDefault()

//     const tickerInput = document.getElementById('ticker-input')
//     if (tickerInput.value.length > 2) {
//         generateReportBtn.disabled = false
//         const newTickerStr = tickerInput.value
//         tickersArr.push(newTickerStr.toUpperCase())
//         tickerInput.value = ''
//         renderTicker()
//     }else {
//         const label = document.getElementsByTagName('label')[0]
//         label.style.color = 'red'
//         label.textContent = 'you must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
//     }
// })

// function renderTicker() {
//     const tickersDiv = document.querySelector('.ticker-choice-display')
//     tickersDiv.innerHTML = ''
//     tickersArr.forEach((ticker) => {
//         const newTickerSpan = document.createElement('span')
//         newTickerSpan.textContent = ticker
//         newTickerSpan.classList.add('ticker')
//         tickersDiv.appendChild(newTickerSpan)
//     })
// }

// const loadingArea = document.querySelector('.loading-panel')
// const apiMessage = document.getElementById('api-message')

// async function fetchStockData() {
//     document.querySelector('.action-panel').style.display = 'none'
//     loadingArea.style.display = 'flex'
//     try {
//         const stockData = await Promise.all(tickersArr.map(async(ticker) => {
//             const url = `https://api.polygon.io/v2/aggs/tickers/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`
//             const reponse = await fetch(url)
//             const data = await response.text()
//             const status = await response.status
//             if (status === 200) {
//                 apiMessage.innertext = 'Creating report'
//                 return data
//                     }else{
//                         loadingArea.innertext = 'There was an error fetching stock data.'
//                     }
//         }))
//         fetchReport(stockData.join(''))
//         } catch(err) {
//             loadingArea.innertext = 'There was an error fetching stock data'
//             console.log('error:', err)
//         }
    
// }

// async function fetchReport(data) {
//     // AI goes here
// }

// function renderReport(output) {
//     loadingArea.style.display = 'none'
//     const outputArea = document.quesrySelector('.output-panel')
//     const report = document.createElement('p')
//     outputArea.appendChild(report)
//     report.textContent = output
//     outputArea.style.display = 'flex'
// }




//BUILD UP














































































































































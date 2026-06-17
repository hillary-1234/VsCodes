

// document.querySelector("#Button").textContent = "Open the box"
// document.querySelector("button").id ="heading-Btn"

// let boxBtn = document.getElementById("box")

// THE ADD EVENT LISTENER FOR CLICKS

// boxBtn.addEventListener("click", function(){
// console.log("I want to open the box")    
// })

// DIFFERENCE BETWEEN " CONST " & " LET or VAR "

// let basePrice = 520
// let discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"


// shippingCost = 15
// shippingTime = "7-14 days"


// const fullPrice = basePrice - discount + shippingCost


// console.log("total cost: " + fullPrice + ". It will arrive in " + shippingTime)


// USINNG THE INNER HTML FUNCTION 


// const constainerEL = document.getElementById("container")

// // constainerEL.innerHTML = "<button>" + "Buy!" + "</button>"
// constainerEL.innerHTML = "<button onclick = 'buy()'> Buy! </button>"

// function buy() {
//     constainerEL.innerHTML += "<p> Thanks for buying! </p>"
// }


// // TEMPLATE STRING/LITERALS instead of the concatination use the dollar sign and back quote
// const recipient = "Henry"
// const sender = "Hillary"

// // const email = "Hey " + recipient + "! How is it going? Cheers Per"

// // console.log(email)


// const email = `Hey ${recipient}! 
// How is it going? Cheers 
// ${sender}`

// console.log(email)


// // CALCULATOR FUNCTION

// const form = document.getElementById("form")
// const numOneInput = document.getElementById("num1")
// const numTwoInput = document.getElementById("num2")
// const addNum = document.getElementById("btn-add")
// const resultText = document.getElementById("result")

// form.addEventListener('submit', function(e) {
//     e.preventDefault()
    
//     // EITHER ASSIGNING THEM AS NUMBERS 

//     const numOneVal = Number(numOneInput.value)
//     const numTwoVal = Number(numTwoInput.value)

//     // const numOneVal = numOneInput.value
//     // const numTwoVal = numTwoInput.value


//     console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`)
//     console.log(`numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`)

// resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`
// })

// const credits = 0

// if (credits > 0) {
//     console.log("lets us play ")

// }else {
//     console.log("sorry, you have no credits ")
// }

// // trusy or fasly values 

// console.log(Boolean("")) // false
// console .log(Boolean("0")) //true
// console .log(Boolean(100)) // true
// console .log(Boolean(null)) // false
// console .log(Boolean([0])) // true
// console .log(Boolean(-0)) // true // its the same as 0 so its false 

// // USING ARGUMENTS IN FUNCTIONS 

// const welcomeEL = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     welcomeEL.textContent = ` ${greeting} ${name} ${emoji}` 

// }

// greetUser("Welcome back,", " Hillary Nwangene .A.", "👌")


// const welcomeEL = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     welcomeEL.textContent = ` ${greeting} ${name} ${emoji}` 

// }

// greetUser("Welcome back,", " Hillary Nwangene .A.", "👌")


// // USING ARGUMENTS IN FUNCTION 

// function add( num1, num2) {
//     // let num1 = 5
//     // let num2 = 8


//     return num1 + num2

//     // console.log(sum)


// }

// console.log(add(3, 4))
// console.log(add(9, 102))

// // ARRAY ALIGNMENT

// function getFirst(arr) {
//     console.log(arr[3]) 
// }


// let arr = ["hillary","henry","john", "promise"]

// getFirst(arr)




// // [ [ [ [ [ [ [ [ [ [ [ [ [ [     R   E   C   A   P    ] ] ] ] ] ] ] ] ] ] ] ] 

// // DECIEDING BTW CONST & LET  / / A L S O / / USING TEMPLATE LITERALS 

// let player = "Hillary"
// let opponent = "Nick"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false

// points += 100
// hasWon = true

// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)
// }else {
//     console.log(` The winner is  ${opponent} ! ${player}  lost the game`)
// }




// // FUNCTIONS, ARGUMENTS && ARRAY 


// let myCourses = [ " Learn CSS Animation", " UI Design Fundamentals ", " Intro to Clean Code"]

// function myArray(skills) {

//     for(let i = 0; i< myCourses.length; i++ ) {
//         console.log(skills[i])

//     }

//     // console.log(skills[i])
// }

// myCourses.push("intro to arrays", "your mama")

// myArray(myCourses)





// // SAVING TO LOCAL STORAGE 

// let style = ["cars", "ships", "estate", "arts"]

// localStorage.setItem("Name", " Nwangene")

// localStorage.setItem("array", JSON.stringify(style))

// // localStorage.clear()


// let Name = localStorage.getItem("Name")

// console.log(Name)

// let leadStyle = JSON.parse(localStorage.getItem("array"))

// console.log(leadStyle)



// // addEventListenersand object in array


// let jscoreBtn = document.getElementById("jscore-Btn")


// let data = [{
//     player: "Jane",
//     score: 52
// },
// {
//     player:"Mark",
//     score: 41
// }]


// jscoreBtn.addEventListener("click", function(){
//     for (let i = 0; i < data.length; i++) {

//         console.log(data[0].score)

//     }
//     // console.log(data)
// })



// // GENERATE SENTENCE USING LOOP AND TEMPLATE LITERALS
//                 // PLAYING WITH LAST INDEX IN LOOPS 


// function generateSentence(desc, arr) {
//     let sentence = `The ${arr.length} ${desc} are: `
//     const lastIndex = arr.length - 1
// 0
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             sentence += arr[i]
//         } else {
//             sentence += arr[i] + ", "
//         }
//     }

//     console.log(sentence)

// }

// generateSentence("Largest Countries",["China","India","USA"])



// function generateSentence(desc, arr) {
//     let sentence = `The ${desc} are: `

//     for (let i = 0; i < arr.length; i++) {
//         sentence += arr[i] + " "
//     }

//     console.log(sentence)
// }


// generateSentence("fruits", ["apple", "banana", "grape"])


// // NO LOOP

// function generateSentence(desc, arr) {
//     let sentence = `The ${desc} are: ${arr}`

//     // for (let i = 0; i < arr.length; i++) {
//     //     sentence += arr[i] + " "
//     // }
//     console.log(sentence)
// }

// generateSentence("Largest Countries",["China","India","USA"])







// <iframe width="100%" height="286" src="https://widgets.sofascore.com/embed/attackMomentum?id=15186945&widgetTheme=light" frameborder="0" scrolling="no"></iframe>
//       <div style="font-size:12px;font-family:Arial,sans-serif"><a href="https://www.sofascore.com/football/match/japan-netherlands/fUbsvVb#id:15186945" target="_blank" rel="noreferrer">
//           Netherlands - Japan Live Score
//         </a></div>





// // RENDER IMAGES FROM JAVASCRIPT

// const containerEl = document.getElementById("container")


// const imgs = [
//     "img1.jpg",
//     "img2.jpg",
//     "img3.jpg"

// ]

// function img() {
//     let imgStore = ""

//     for (let i = 0; i < imgs.length; i++){

//         imgStore += `<img alt="employees" img class="team-img" src="${imgs[i]}">`
//     }
//         containerEl.innerHTML = imgStore
// }

// img()



// ROUNDING NUMBERS USING .toFixed()


// const totalPrice = 450.08234024720420934209203
// let rounded = totalPrice.toFixed(2)
// console.log(rounded)
// const btn = document.getElementById("purchase-btn")

// btn.textContent = `Buy &${rounded}`



// ROUNDING STRINGS WITH THE " + OR Number() "  THEN USING .toFixed() TO ROUND 


// const totalPrice = "450.08234024720420934209203"

// let numTotal = Number(totalPrice)

// // let numTotal = +totalPrice 

// let rounded = numTotal.toFixed(2)

// console.log(rounded)

// const btn = document.getElementById("purchase-btn")

// btn.textContent = `Buy &${rounded}`




















































































































































































































































































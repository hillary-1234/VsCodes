



const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const saveTabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

let myLeads = []

let tabBtn = saveTabBtn





// localStorage.clear()


// console.log(localStorage.getItem("myLeads"))


// // USING STRINGIFY to convert to a STRING and using PARSE to convert back to origin

// let myLead = JSON.parse(myLeads)


// console.log(typeof myLead)

// myLead.push("www.chrome.com")

// myleads = JSON.stringify(myLead)

// console.log(typeof myleads)


// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

// let myLeads = ["www.awesomelead.com", "www.epiclead.com","www.greatlead.com"]

// let myArray = []


// USING LOCAL STRORAGE

// localStorage.setItem("myLeads", "www.google.com")

// localStorage.setItem(" myLeads", "www.opera.com")

// console.log(localStorage.getItem("myLeads"))

// localStorage.clear()
// console.log(localStorage.getItem("myLeads"))



// // YOU CAN EITHER USE THIS TO RENDER IT STABLE IN THE BROWSER 
// if(leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage

//         renderLeads()
    
// }

// // OR THIS 

if(Boolean(leadsFromLocalStorage)) {
    myLeads = leadsFromLocalStorage

        render(myLeads)
    
} 

// console.log(leadsFromStorage)

// const tab = [
//     {url:"https://www.google.com"}

// ]

saveTabBtn.addEventListener("click", function() { 
    chrome.tabs.query( { active: true, currentWindow: true },function (tabs) {
        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

        // let activeTab = tabs[0]
        // let activeTabId = activeTab.id

    })
})

// console.log("url:"https://www.google.com ")


saveBtn.addEventListener("click", function() {

    // console.log("Clicked")
        // myLeads.push("www.awesomelead.com")
        myLeads.push(inputEl.value)
            // console.log(myLeads)
            // ulEl.innerHTML += "<li>" + inputEl.value + "</li>"

        inputEl.value = ""

        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)

        // console.log(localStorage.getItem("myLeads"))

    
    // inputEl.value = myArray

})  


deleteBtn.addEventListener("dblclick", function() {
    // console.log("ha ha ") 
    
        localStorage.clear()

        // // CLEARS THE DOM BUT RERENDERS IT IN YOU ADD INPUT 
        // ulEl.innerHTML = ""  
        myLeads =[]
        render(myLeads)




})



function render(leads) {
    
listItems = ""

    for (let i = 0; i < leads.length; i++) {
//     //     console.log(myLeads[i])
        // listItems += "<li>" + "<a href = '#' target = '_blank'>" + myLeads[i] + "</a>" + "</li>"
        
            // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        
            listItems += `<li><a target='_blank' href=' ${leads[i]}'> ${leads[i]} </a></li>`

            
        
            // listItems += `
        // <li>
        //     <a target='_blank' href="${myLeads[i]}"> 
        //         ${myLeads[i]}
        //     </a>
        // </li>
        // `
    }
        // listItems += "<li> <a href='" + myLeads[i] + "' target='_blank'> myLeads[i] </a></li>`
//             // BETTER, STANDARD & COMMON WAY OF WRITING ABOVE  ☝
//                     // create element
//                     // set.text content
//                     // append to tag " ul"

//             // const li = document.createElement("li")
//             // li.textContent = myLeads[i]
//             // ulEl.append(li)


ulEl.innerHTML = listItems

// }

// https://www.google.com
// www.google.com
// https://www.opera.com
// www.opera.com
// https://www.callofduty.com
// www.callofduty.com

// function renderLead() {
    
// // listItem = ""

//     // for (let i = 0; i < myLeads.length; i++) {
//     //     console.log(myLeads[i])
//         let listItem = "<li>" + inputEl.value + "</li>"
            
//             ulEl.innerHTML += listItem

//             // BETTER, STANDARD & COMMON WAY OF WRITING ABOVE  ☝
//                     // create element
//                     // set.text content
//                     // append to tag " ul"

//             // const li = document.createElement("li")
//             // li.textContent = myLeads[i]
//             // ulEl.append(li)
}

// // }




















































































































































































































































































































































































































































































































































































































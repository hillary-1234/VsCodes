




// const Box = (props) => {
// const { label, bgColor, textColor, large } = props

// console.log(large)

//   return <div style={{ backgroundColor: bgColor, fontSize: large ? '30px' : '12px', textColor: 'white' }}>
//     {label}
//   </div>
// }





// const App = () => {
//   return <div>
//       <Box label="My name is Hillary" large = {true} bgColor="CornflowerBlue" textColor="white" />
//       <Box label="Another one " large = {false} bgColor="lavender" textColor="purple" />
//       <Box label="Yet another one" bgColor = "Green" textColor="white" />
      
//     </div>
  
// }


// // USING TAILWIND FOR STYLING 

//  <div className="text-rose-100 bg-red-700">one</div>
//         <div className="text-slate-400 border-2 border-slate-600">two</div>
//         <div className="text-2xl bg-emerald-200 text-blue-600">three</div>

//         <div className="text-xl text-purple-500">

//         <div className=" border-4 border-sky-500">four</div>
//         <div className="text-xl text-purple-500 border-l-8 border-purple-800">five</div>
//         <div className="text-xl text-purple-700 m-40">six</div>


//         </div>





// USING MARGINS AND PADDING WITH HORIZONTALS AND VERTICAL AXIX 
//  
// 
// <div className="border-2 border-red-500 p-8 m-4"> hello </div>
//     <div className="border-2 border-blue-500 px-8 py-4 m-4"> bye </div>


// USING ROUNDED CORNERS AND HOVER EFFECTS

    // <button className="border-2 border-green-600 text-green-600 px-8 py-2 m-4 rounded">first</button>
    // <button className="rounded-lg bg-sky-400 m-4 text-white px-10 py-4 text-3xl hover:text-base">second</button>
    // <button className="bg-violet-100 text-violet-600 px-8 py-2 rounded-full">third</button>
    // <button className="m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg hover:bg-cyan-200 hover:text-cyan-700">fourth</button>




/// USING CONDITIONAL RENDERING WITH TERNARY OPERATORS 
    
// const App = () => {
//   const boolean = false
//     return <div className = {`${boolean ? 'bg-red-500' : 'bg-blue-500'} text-white p-4`}>
//     hillary
// </div>
  
// }


// // creating a reusable button component with props and conditional rendering

// <FancyButton >Click ME</FancyButton>
//     <FancyButton large >Submit</FancyButton>





// // using flex and styling content 


// import Cat from "./Cat"

// const App = () => {
//   return ( <div>
    
//     <div className="flex justify-center h-64 p-4 m-4 border-2 border-blue-400">
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//     <div className="flex justify-between h-64 p-4 m-4 border-2 border-red-400">
//       <Cat />
//       <Cat />
//       <Cat />
//     </div> <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-green-400">
//       <Cat />
//       <Cat />
//       <Cat />
//     </div> <div className="flex justify-between items-end h-64 p-4 m-4 border-2 border-purple-400">
//       <Cat />
//       <Cat />
//       <Cat />
//     </div> <div className="flex justify-between items-center h-64 p-4 m-4 border-2 border-orange-400">
//       <Cat />
//       <Cat />
//       <Cat />
//     </div> <div className="flex flex-col justify-between items-center h-100 p-4 m-4 border-2 border-white-400"> 
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
    

//   </div> )
// }
// export default App




// // using flex and styling content with multiple boxes flexed in a column



// import Box1 from "./Box1.jsx"
// import Box2 from "./Box2.jsx"
// import Box3 from "./Box3.jsx"
// import Box4 from "./Box4.jsx"



// const App = () => {
//   return ( <div>
//     <Box1 />
//     <Box2 />
//     <Box3 />
//     <Box4 />
//   </div>
//   )
// }
// export default App


// // USING TAILWIND TO STYLE CONTENT WITH SPECIFIC CUSTOMS WIDTHS AND HEIGHTS NOT SET BY TAILWIND


// const App = () => {
//   return ( <div >
//       <div className="bg-blue-300 w-[420px] mb-[20px]">
//         one
//       </div>
//       <div className="bg-blue-300 ">
//         two
//       </div>
//   </div>
//   )
// }
// export default App




// // CREATING  DIFFERENT DESIGNS WITH FLEX, FLEX-COL,JUSTIFY AND ITEMS




// import QuoteBox1 from "./QuoteBox1.jsx"
// import QuoteBox2 from "./QuoteBox2.jsx"
// import QuoteBox3 from "./QuoteBox3.jsx"


// const quote1 = {
//   text: "The best way to get started is to quit talking and begin doing.",
//   author: "Walt Disney",
//   bio: "An American entrepreneur.",
// }

// const quote2 = {
//   text: " A ship in harbor is safe, but that is not what ships are built for.",
//   author: "Admiral Grace Hopper",
//   bio: "An American computer scientist.",
// }

// const quote3 = {
//   text: "If you optimise for the long term, you will be rewarded.",
//   author: "Jeff Bezos",
//   bio: "An American entrepreneur.",
// }



// const App = () => {
//   return ( <div flex flex-col items-center justify-center >
//     <QuoteBox1 quote = {quote1} />
//     <QuoteBox2 quote = {quote2} />
//     <QuoteBox3 quote = {quote3} />
//   </div>
//   )
// }
// export default App





// //  USING TAILWIND TO CREATE A GOOGLE SEARCH PAGE CLONE WITH HEADER, SEARCH BAR AND FOOTER COMPONENTS



// import HeaderCompGoog from "./HeaderCompGoog"
// import SearchCompGoog from "./SearchCompGoog"
// import FooterCompGoog from "./FooterCompGoog"





// const App = () => {
//   return ( <div className="flex flex-col h-screen w-full ">
//     <HeaderCompGoog /> 
//     <SearchCompGoog />
//     <FooterCompGoog />
//   </div>
//   )
// }
// export default App




// // USING THE ONCLICK FUNCTION AND THE USE STATE HOOK




// import { useState } from "react";



// const App = () => {

//   const [message, setMessage] = useState("alvine was here");
//   console.log(message)

//   return ( <div className="flex flex-col items-center justify-center h-screen ">
//     <div className="text-3xl text-stone-400">{message}</div>
//     <div className="mt-4 ">
//       <button className=" m-2 px-4 text-white bg-green-400 round-md" onClick={() => { setMessage("bye") }} >one</button>
//       <button className=" m-2 px-4 text-white bg-blue-400 round-md" onClick={() => {setMessage("yay")}}>two</button>
//       <button className=" m-2 px-4 text-white bg-red-400 round-md" onClick={() => {setMessage("oops")}}>three</button>
//     </div>
//     </div>
//   )
// }
// export default App



// // using the useState hook to toggle between two colors on a button click


// import Widget1 from "./Widget1"
// import Widget2 from "./Widget2"
// import Widget3 from "./Widget3"






// const App = () => {



//   return ( <div className=" flex flex-col items-center ">
//     <Widget1 /> 
//     <Widget2 /> 
//     <Widget3 /> 
//     </div>
//   )
// }
// export default App



// // USING THE USESTATE HOOK TO CREATE A COUNTER WITH INCREMENT AND DECREMENT BUTTONS



// import {useState} from "react"


// const App = () => {
//   const [count, setCount] = useState(0);

//   return ( <div className=" text-4xl flex items-center justify-center border border-black-400 h-screen gap-4">
//     <button className=" text-white rounded-md w-8 text-4xl bg-red-400 " onClick={() => setCount(count + 1)} > + </button>
//     <div className=" m-4 text-neutral-400 " >{count}</div>
//     <button className=" text-white rounded-md w-8 text-4xl bg-emerald-400" onClick={() => setCount(count - 1)} > - </button>
//     </div>
//   )
// }
// export default App



// // CREATING  A TOGGLE BUTTON WITH USESTATE AND TENERAY OPERATION 



// import { useState } from "react";
// import clsx from "clsx";

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   const bgColor = isOn ? "bg-yellow-100 " : "bg-slate-600";
//   return (
//     <div
//       className={`flex flex items-center justify-center h-screen ${bgColor} `}
//     >
//       <button
//         onClick={() => {
//           setIsOn(!isOn);
//         }}
//       >
//         <div
//           className={` h-8 w-6 ${isOn ? "bg-slate-300" : "bg-slate-200"} `}
//         ></div>
//         <div
//           className={` h-8 w-6 ${isOn ? "bg-slate-200" : "bg-slate-300"} `}
//         ></div>
//       </button>
//     </div>
//   );
// };
// export default App;



































































































































































































































































































































































































































































































// export default App
























































































































































































































































































































// import OpenAI from "openai";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const ai = new GoogleGenAI({});

// const messages = [
//     {
//     model: "system",    
//     text: "You are a helpful general knowledge expert.",
// },
//     {
//     role: "user",    
//     text: "who invented the television",
// },
// ];

const messages =  [
        { type: 'user_input', content: [{ type: 'text', text: 'Hello' }] },
        { type: 'model_output', content: [{ type: 'text', text: 'Hi there! How can I help you today?' }] },
        { type: 'user_input', content: [{ type: 'text', text: 'What is the capital of France?' }] }
    ]

    
    const interaction = await ai.interactions.create({
        model: "gemini-2.5-flash",
    
    //     config: {
    //     systemInstruction: "You are a helpful general knowledge expert.",
    // },
    
        input: messages
    });
    
    
    console.log(interaction.output_text);


    

// const messages = [
//     {
//     role: "user",
//     parts: [
//         { text: "Who invented the television?" }
//     ]
//     }
// ]





















































// const apiKey = process.env.API_KEY;

// const openai = new OpenAI({
//     // baseURL: "https://openrouter.ai/api/v1",    
//     apiKey: apiKey,
// });


// const response = await openai.chat.completions.create({
//     model: "gpt-4.1",    
//     // model: "meta-llama/llama-3.3-70b-instruct:free",
//     messages: messages,
// });

// console.log(response.choices[0].message.content);


















































































































































































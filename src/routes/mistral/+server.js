import {env} from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import path from "path";
import { Mistral } from "@mistralai/mistralai";


const api_key = env.MISTRAL_API_KEY;
const instructions = env.MISTRAL_INSTRUCTIONS;

const client = new Mistral({
    apiKey: api_key
});

let conversationHistory = [
    { role: 'system', content: instructions }
];

// Håndterer POST-forespørsler fra frontend
/** @type {import('./$types').RequestHandler} */
// definerer en funksjon som håndterer POST-forespørsler

export async function POST(request) {
    try {
        const { message} = await request.request.json();
        console.log('Received message from frontend:', message);

        conversationHistory.push({ role: 'user', content: message});

        const response = await client.chat.complete({
            model: 'magistral-small-2509',
            messages: conversationHistory
        });
        const assistantMessage = response.choices[0].message.content;
        console.log('Assistant message:', assistantMessage);

        conversationHistory.push({ role: 'assistant', content: assistantMessage });

        return json({ response: assistantMessage});
     }catch (error) {
        console.error("Error:", error);
    }
};
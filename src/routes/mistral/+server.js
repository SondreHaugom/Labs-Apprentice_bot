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
            model: 'mistral-large-2512',
            messages: conversationHistory,
        });
        conversationHistory.push({ role: 'assistant', content: response.choices[0].message.content});
        return json({ response:  response.choices[0].message.content });
     }catch (error) {
        console.error("Error:", error);
        return json({ error: 'An error occurred while processing your request.' }, { status: 500 });
    }
};
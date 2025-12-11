import {env} from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import path from "path";
import OpenAI from "openai";


// Initialiserer OpenAI-klienten med API-nøkkelen fra miljøvariabler
const api_key = env.OPENAI_API_KEY;
// henter inn vector store ID fra miljøvariabler
const vector_store_id = env.VECTOR_STORE_ID;
// Initialiserer OpenAI-klienten

// henter inn instruksjoner fra miljøvariabler
const instructions = env.INSTRUCTIONS;

const client = new OpenAI({
    apiKey: env.OPENAI_API_KEY
});


let response_ID = null;

// Håndterer POST-forespørsler fra frontend
/** @type {import('./$types').RequestHandler} */
// definerer en funksjon som håndterer POST-forespørsler

export async function POST(request) {
    // tries to get the message from the request and generate a response
    try {
        const { message } = await request.request.json();
        console.log('Received message from frontend:', message);


        const response = await client.responses.create({
            model: "gpt-5.1-codex-max",
            instructions: instructions,
            input: [
                {
                    role: "user",
                    content: message
                }
            ],
            tools: [
                {
                    type: "file_search",
                    vector_store_ids: [vector_store_id]
                }
            ],
            previous_response_id: response_ID
        });
        return json({ response: request.output_text });
    } catch (error) {
        console.error("Error:", error);
        return json({ error: 'Failed to process request' }, { status: 500 });
    }
}

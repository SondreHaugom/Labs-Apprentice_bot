export const selectedAgent = async (user_message, agentType) => {
    let response;
    if (agentType === 'openai') {

        console.log('Using OpenAI agent');
        response = await fetch('/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: user_message })
        });
        const payload = await response.json();

        const raw = payload.response ??
        // eller fallback til choices-strukturen
            payload.choices?.[0]?.message?.content ?? '';

        return raw || 'Beklager, jeg har ingen svar.';


        
    } else if (agentType === 'codeGeneration') {
        console.log('Using Code Generation agent');
        response = await fetch('/codeGeneration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: user_message })
        });
        const payload = await response.json();

        const raw = payload.response ??
        // eller fallback til choices-strukturen
            payload.choices?.[0]?.message?.content ?? '';
        return raw || 'Beklager, jeg har ingen svar.'; 
    }
}
    
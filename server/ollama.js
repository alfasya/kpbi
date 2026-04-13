import ollama from 'ollama';

async function llmResponse(kata) {
    const PROMPT = `You are article writer. List three examples of sentence using this word: ${kata} in Indonesian language, without introduction, no english.`;
    const response = await ollama.chat({
        model: 'qwen3.5:0.8b',
        messages: [{ role: 'user', content: PROMPT }],
        stream: false
    });

    const resArr = response.message.content.split('\n');

    return resArr;
}

export { llmResponse };
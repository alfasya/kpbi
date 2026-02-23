import ollama from "ollama";

const SYSTEM_PROMPT = "You are an expert in Bahasa Indonesia language. You help user to give an accurate example of how to use word vocabulary in any context. Be accurate and concise in your writing.";

async function llmResponse(kata) {
    const response = await ollama.chat({
        model: "qwen2.5:3b",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `Make a list of three examples of one sentence without from reliable article by this word: ${kata}.`},
        ]
    });

    return response;
}

export { llmResponse }
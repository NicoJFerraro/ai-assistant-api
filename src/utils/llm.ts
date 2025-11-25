import { Message } from "../schemas/chat.schemas";

export async function askLLM(system: string, messages: Message[]): Promise<string> {
  const provider = process.env.LLM_PROVIDER || "ollama";

  switch (provider) {
    case "ollama":
      return await askOllama(system, messages);

    // Placeholder cases to demonstrate scalability
    case "openai":
      return "OpenAI provider not implemented yet.";

    case "gemini":
      return "Gemini provider not implemented yet.";

    default:
      return `Mock reply: You asked "${messages[messages.length - 1].content}"`;
  }
}

/* ------------------ OLLAMA ------------------ */
async function askOllama(system: string, messages: Message[]) {
  const model = process.env.OLLAMA_MODEL || "phi3";

  // Build conversation prompt
  let conversationPrompt = system + "\n\n";

  for (const msg of messages) {
    if (msg.role === "user") {
      conversationPrompt += `User: ${msg.content}\n`;
    } else {
      conversationPrompt += `Assistant: ${msg.content}\n`;
    }
  }

  conversationPrompt += "Assistant:";

  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt: conversationPrompt,
        stream: false
      })
    });

    const data = await res.json();

    return data?.response || "No response from Ollama";
  } catch (err) {
    console.error("Error communicating with Ollama:", err);
    return "Error: Could not connect to Ollama. Is it running?";
  }
}
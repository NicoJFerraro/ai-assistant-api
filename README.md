# AI Home Assistant

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

A full-stack AI-powered home assistant application built with Node.js, Express, React, and Vite. This project demonstrates conversation memory management and integration with local LLM providers.

## Features

- 🤖 **Conversational AI**: Chat with an AI assistant that remembers context
- 🏠 **Home Assistant Focus**: Helps with household tasks, cooking, cleaning, and provides companionship
- 💬 **Context Memory**: Maintains conversation history for coherent multi-turn dialogues
- 🔌 **Extensible LLM Support**: Currently supports Ollama with placeholders for OpenAI and Gemini
- ⚡ **Modern Stack**: TypeScript, React, Express, and Vite for fast development

## Tech Stack

### Backend
- **Node.js** + **Express**: REST API server
- **TypeScript**: Type-safe development
- **Zod**: Runtime schema validation
- **Ollama**: Local LLM provider

### Frontend
- **React**: UI framework
- **TypeScript**: Type-safe components
- **Vite**: Fast build tool and dev server
- **CSS**: Custom styling with dark theme

## Project Structure

```
ai-assistant-api/
├── src/                    # Backend source code
│   ├── controllers/        # Request handlers
│   ├── routes/            # API routes
│   ├── schemas/           # Zod validation schemas
│   ├── services/          # Business logic
│   ├── utils/             # LLM integration utilities
│   ├── app.ts             # Express app configuration
│   └── server.ts          # Server entry point
├── client/                # Frontend React app
│   ├── src/
│   │   ├── App.tsx        # Main app component
│   │   ├── types.ts       # TypeScript types
│   │   └── index.css      # Styles
│   └── vite.config.ts     # Vite configuration
└── package.json
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Ollama** (for local LLM) - [Install Ollama](https://ollama.ai)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-assistant-api.git
   cd ai-assistant-api
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   LLM_PROVIDER=ollama
   OLLAMA_MODEL=phi3
   ```

5. **Start Ollama** (if using local LLM)
   ```bash
   ollama serve
   ```
   
   Pull a model (if not already done):
   ```bash
   ollama pull phi3
   ```

## Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`

2. **Start the frontend dev server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Production Build

1. **Build the backend**
   ```bash
   npm run build
   ```

2. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

## API Endpoints

### `POST /chat`

Send a message to the AI assistant.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "How do I remove wine stains?"
    }
  ]
}
```

**Response:**
```json
{
  "reply": "To remove wine stains, blot the area immediately..."
}
```

### `GET /health`

Health check endpoint.

**Response:**
```json
{
  "ok": true
}
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | `3000` |
| `LLM_PROVIDER` | LLM provider to use (`ollama`, `openai`, `gemini`) | `ollama` |
| `OLLAMA_MODEL` | Ollama model name | `phi3` |

### Vite Proxy

The frontend is configured to proxy `/chat` requests to the backend during development. See `client/vite.config.ts`.

## How It Works

1. **User Input**: User types a message in the chat interface
2. **Frontend**: Sends the full conversation history to `/chat` endpoint
3. **Backend**: Validates the request and passes messages to the chat service
4. **LLM Integration**: Builds a conversation prompt and sends it to Ollama
5. **Response**: AI response is returned and displayed in the chat

## Development

### Key Concepts

- **Context Memory**: The frontend maintains conversation state and sends the full history with each request
- **Conversation Prompting**: The backend builds a formatted prompt with system instructions and conversation history
- **Type Safety**: Zod schemas ensure runtime validation matches TypeScript types

### Adding New LLM Providers

To add support for a new LLM provider:

1. Add a new case in `src/utils/llm.ts`
2. Implement the provider-specific function
3. Update the `.env` file with the provider name

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

Nicolas - Junior AI Engineer Portfolio Project

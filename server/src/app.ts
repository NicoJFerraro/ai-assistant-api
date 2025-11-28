import express from "express";
import chatRoutes from "./routes/chat.routes";

const app = express();
app.use(express.json());

// Health check
app.get("/health", (_, res) => res.json({ ok: true }));

app.use("/chat", chatRoutes);

export default app;
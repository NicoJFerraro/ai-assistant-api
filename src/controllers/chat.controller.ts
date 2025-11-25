import { Request, Response } from "express";
import { ChatSchema } from "../schemas/chat.schemas";
import { chatService } from "../services/chat.service";

export const chatController = async (req: Request, res: Response) => {
  try {
    const { messages } = ChatSchema.parse(req.body);
    const reply = await chatService(messages);
    res.json({ reply });
  } catch (err) {
    res.status(400).json({ error: "Invalid request", details: err });
  }
};
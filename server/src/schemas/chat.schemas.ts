import { z } from "zod";

export const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1, "Content is required")
});

export const ChatSchema = z.object({
  messages: z.array(MessageSchema).min(1, "At least one message is required")
});

export type Message = z.infer<typeof MessageSchema>;
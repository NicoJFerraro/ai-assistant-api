import request from 'supertest';
import app from '../../app';
import { chatService } from '../../services/chat.service';

// Mock the chatService
jest.mock('../../services/chat.service');

describe('Chat Routes', () => {
    it('POST /chat should return 200 and the reply', async () => {
        const mockChatService = chatService as jest.Mock;
        mockChatService.mockResolvedValue('Mock reply');

        const response = await request(app)
            .post('/chat')
            .send({
                messages: [{ role: 'user', content: 'Hello' }]
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ reply: 'Mock reply' });
        expect(mockChatService).toHaveBeenCalled();
    });

    it('POST /chat should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/chat')
            .send({
                messages: 'Not an array' // Invalid input
            });

        expect(response.status).toBe(400);
    });
});

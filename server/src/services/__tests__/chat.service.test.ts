import { chatService } from '../chat.service';
import * as llmUtils from '../../utils/llm';

// Mock the askLLM function
jest.mock('../../utils/llm');

describe('Chat Service', () => {
    it('should call askLLM with the correct arguments', async () => {
        const mockAskLLM = llmUtils.askLLM as jest.Mock;
        mockAskLLM.mockResolvedValue('Mock response');

        const messages = [{ role: 'user' as const, content: 'Hello' }];
        const response = await chatService(messages);

        expect(mockAskLLM).toHaveBeenCalledTimes(1);
        expect(mockAskLLM).toHaveBeenCalledWith(expect.stringContaining('You are a friendly and helpful home assistant'), messages);
        expect(response).toBe('Mock response');
    });
});

import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';

const app = express();
app.get('/', (req, res) => {
    res.send('Sudoku API is running!');
});

describe('GET /', () => {
    it('should return API running message', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Sudoku API is running!');
        expect(res.status).toBe(200);
    });
});

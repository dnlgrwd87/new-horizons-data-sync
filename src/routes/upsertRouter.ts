import express, { Request, Response } from 'express';
import { Category, isCategoryValid } from '../utils/categoryUtils';
import { UpsertService } from '../services/upsertService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const { category } = <any>req.query;

    if (!isCategoryValid(category)) {
        return res.status(400).json(`${category} is not a valid category`);
    }

    try {
        const upsertService = new UpsertService();
        const response = await upsertService.upsert(category);

        res.json(response);
    } catch (error) {
        res.json({ error: error.message || error });
    }
});

router.get('/all', async (req: Request, res: Response) => {
    try {
        const upsertService = new UpsertService();
        const responses = [];

        for (const category of Object.values(Category)) {
            const response = await upsertService.upsert(category);
            responses.push(response.message);
        }
        res.json(responses);
    } catch (e) {
        res.json(e.message || e);
    }
});

export { router };

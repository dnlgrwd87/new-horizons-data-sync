import express, { Request, Response } from 'express';
import { isCategoryValid } from '../utils/categoryUtils';
import { SpreadsheetService } from '../services/spreadsheetService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const { category } = <any>req.query;

    if (!isCategoryValid(category)) {
        return res.status(400).json(`${category} is not a valid category`);
    }

    try {
        const spreadsheetService = new SpreadsheetService();
        const response = await spreadsheetService.getCategoryData(category);

        res.json(response);
    } catch (e) {
        res.json({ e: e.message || e });
    }
});

export { router };

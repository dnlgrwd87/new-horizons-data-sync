import express from 'express';
import { spreadsheetRouter, upsertRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/spreadsheet', spreadsheetRouter);
app.use('/upsert', upsertRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

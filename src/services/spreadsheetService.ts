import { google } from 'googleapis';
import { parseImageUrl, convertKeyToCamelCase } from '../utils/spreadsheetUtils';

import * as dotenv from 'dotenv';

dotenv.config();

export class SpreadsheetService {
    private sheets = google.sheets({
        version: 'v4',
        auth: process.env.GOOGLE_SHEETS_API_KEY,
    });

    async getCategoryData(category: string) {
        const request = {
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: `'${category}'`,
            valueRenderOption: 'FORMULA',
        };
        
        const categoryData: any = [];

        const response = await this.sheets.spreadsheets.values.get(request);
        const rows = response.data.values;
        const headers: any[] = rows.shift().map(convertKeyToCamelCase);

        rows.forEach((row) => {
            const item: any = {};

            headers.forEach((header, index) => {
                const value = row[index];
                const isImageUrl = value
                    .toString()
                    .toLowerCase()
                    .includes('image');

                item[header] = isImageUrl ? parseImageUrl(value) : value;
            });

            categoryData.push(item);
        });

        return categoryData;
    }
}

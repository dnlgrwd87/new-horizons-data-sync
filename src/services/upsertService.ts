import { SpreadsheetService } from './spreadsheetService';
import { Category, categoryServices } from '../utils/categoryUtils';
import { DatabaseService } from './databaseService';

import { applyChange, diff, observableDiff } from 'deep-diff';

export class UpsertService {
    async upsert(category: Category) {
        const ssService = new SpreadsheetService();
        const dbService = new DatabaseService(category);
        const categoryService = new categoryServices[category]();

        const insertedList = [];
        const updatedList = [];
        const errors = [];

        const ssEntities = await ssService.getCategoryData(category);
        const dbEntities: any = await dbService.getAll();

        for (const ssEntity of ssEntities) {
            const entityName = ssEntity.name;

            try {
                const mappedEntity = categoryService.mapToDbFormat(ssEntity);
                const found = dbEntities.find(
                    (entity: any) =>
                        entity.spreadsheet_id === ssEntity.uniqueEntryID
                );

                if (!found) {
                    await dbService.insert(mappedEntity);
                    insertedList.push(mappedEntity.spreadsheet_id);
                } else {
                    const { id, created_at, updated_at, ...dbEntity } = found;
                    const differences = diff(dbEntity, mappedEntity);

                    if (differences) {
                        observableDiff(dbEntity, mappedEntity, (d) =>
                            applyChange(dbEntity, mappedEntity, d)
                        );

                        await dbService.update(dbEntity);
                        updatedList.push(dbEntity.spreadsheet_id);
                    }
                }
            } catch (e) {
                errors.push(`${entityName} - ${e.message || e}`);
            }
        }

        const message = `Inserted ${insertedList.length} ${category} and updated ${updatedList.length} ${category}`;
        return { message, insertedList, updatedList, errors };
    }
}

import { SpreadsheetVillager, Villager } from '../models/villager';

export const dbVillagers: Partial<Villager>[] = [
    {
        name: 'Admiral',
        spreadsheet_id: 'alreadyInTheDatabase',
    },
];

export const ssVillagers: Partial<SpreadsheetVillager>[] = [
    {
        name: 'Admiral 2.0',
        uniqueEntryID: 'alreadyInTheDatabase',
    },
    {
        name: 'New villager',
        uniqueEntryID: 'notInTheDatabase',
    },
];

export const expectedVillagerResponse: any = {
    message: 'Inserted 1 villagers and updated 1 villagers',
    insertedList: ['notInTheDatabase'],
    updatedList: ['alreadyInTheDatabase'],
    errors: [],
};

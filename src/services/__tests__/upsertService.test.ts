import { SpreadsheetService } from '../spreadsheetService';
import { DatabaseService } from '../databaseService';
import { UpsertService } from '../upsertService';
import { Category } from '../../utils/categoryUtils';
import {
    dbVillagers,
    ssVillagers,
    expectedVillagerResponse,
} from '../../testData/upsertData';

describe('UpsertService', () => {
    afterEach(() => jest.clearAllMocks());

    it('inserts one villager and updates one villager based on spreadsheet and db diff', async () => {
        const upsertService = new UpsertService();
        const getAllMock = jest
            .spyOn(DatabaseService.prototype, 'getAll')
            .mockResolvedValueOnce(dbVillagers);
        const insertMock = jest
            .spyOn(DatabaseService.prototype, 'insert')
            .mockResolvedValueOnce({ spreadsheet_id: ''});
        const updateMock = jest
            .spyOn(DatabaseService.prototype, 'update')
            .mockImplementationOnce((): any => null);
        const ssMock = jest
            .spyOn(SpreadsheetService.prototype, 'getCategoryData')
            .mockResolvedValueOnce(ssVillagers);

        const response = await upsertService.upsert(Category.Villagers);

        expect(getAllMock).toHaveBeenCalledTimes(1);
        expect(ssMock).toHaveBeenCalledTimes(1);
        expect(insertMock).toHaveBeenCalledTimes(1);
        expect(updateMock).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedVillagerResponse);
    });
});

import { buildInsertQuery, buildUpdateQuery } from '../queryUtils';

const tableName = 'cool_table';

const testEntity = {
    name: 'meren',
    species: 'tiger',
    spreadsheet_id: 'someId'
};

describe('buildInsertQuery', () => {
    it('should build insert query with fields and values', () => {
        const expectedText =
            'INSERT INTO cool_table(name, species, spreadsheet_id) VALUES($1, $2, $3) RETURNING *';
        const expectedValues = Object.values(testEntity);

        const { text, values } = buildInsertQuery(testEntity, tableName);

        expect(text).toEqual(expectedText);
        expect(values).toEqual(expectedValues);
    });
});

describe('buildUpdateQuery', () => {
    it('should build update query with fields and values', () => {
        const expectedText =
            'UPDATE cool_table SET name=$1, species=$2 WHERE spreadsheet_id=$3';
        const expectedValues = Object.values(testEntity);

        const { text, values } = buildUpdateQuery(testEntity, tableName);

        expect(text).toEqual(expectedText);
        expect(values).toEqual(expectedValues);
    });
});

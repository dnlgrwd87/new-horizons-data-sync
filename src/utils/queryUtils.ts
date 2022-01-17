export const buildInsertQuery = (dbEntity: any, tableName: string) => {
    const fields = Object.keys(dbEntity);
    const dbEntityFields = fields.join(', ');
    const dbEntityValueHolders = fields.map((_, i) => `$${i + 1}`).join(', ');

    const text = `INSERT INTO ${tableName}(${dbEntityFields}) VALUES(${dbEntityValueHolders}) RETURNING *`;
    const values = Object.keys(dbEntity).map(
        (field) => (dbEntity as any)[field]
    );

    return { text, values };
};

export const buildUpdateQuery = (dbEntity: any, tableName: string) => {
    const fields = Object.keys(dbEntity).filter(
        (key) => key !== 'spreadsheet_id'
    );
    const setFields = fields
        .map((field, index) => `${field}=$${index + 1}`)
        .join(', ');

    const spreadsheetIdIndex = fields.length + 1;
    const text = `UPDATE ${tableName} SET ${setFields} WHERE spreadsheet_id=$${spreadsheetIdIndex}`;
    const values = fields.map((field) => (dbEntity as any)[field]);

    values.push(dbEntity.spreadsheet_id);

    return { text, values };
};

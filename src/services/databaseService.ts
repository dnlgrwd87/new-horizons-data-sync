import { Category, categoryTables } from '../utils/categoryUtils';
import { buildInsertQuery, buildUpdateQuery } from '../utils/queryUtils';
import { db } from '../config/db';

export class DatabaseService {
    readonly tableName: string;

    constructor(category: Category) {
        this.tableName = `acnh_api_${categoryTables[category]}`;
    }

    async getAll(): Promise<any[]> {
        const query = ` SELECT * FROM ${this.tableName}`;
        const result = await db.query(query);

        return result.rows;
    }

    async insert(dbEntity: any): Promise<any> {
        const query = buildInsertQuery(dbEntity, this.tableName);
        const result = await db.query(query);

        return result.rows[0];
    }

    async update(dbEntity: any): Promise<any> {
        const query = buildUpdateQuery(dbEntity, this.tableName);

        return db.query(query);
    }
}

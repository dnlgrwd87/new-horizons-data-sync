import { Critter, SpreadsheetCritter } from './base-critter';

export interface Insect extends Critter {
    weather: string;
}

export interface SpreadsheetInsect extends SpreadsheetCritter {
    weather: string;
}

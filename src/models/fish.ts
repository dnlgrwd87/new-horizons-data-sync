import { Critter, SpreadsheetCritter } from './base-critter';

export interface Fish extends Critter {
    lighting_type: string;
    shadow: string;
    size: string;
}

export interface SpreadsheetFish extends SpreadsheetCritter {
    lightingType: string;
    shadow: string;
    size: string;
}

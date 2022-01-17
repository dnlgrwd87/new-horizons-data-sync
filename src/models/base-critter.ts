export interface Critter {
    name: string;
    critterpedia_image: string;
    icon_image: string;
    furniture_image: string;
    museum_description: string;
    catch_phrase: string;
    sell_price: number | string;
    source: string;
    color1: string;
    color2: string;
    spreadsheet_id: string;
}

export interface SpreadsheetCritter {
    name: string;
    iconImage: string;
    critterpediaImage: string;
    furnitureImage: string;
    sell: number;
    description: string;
    catchphrase: string;
    'where/How': string;
    color1: string;
    color2: string;
    uniqueEntryID: string;
    internalID?: number;
}

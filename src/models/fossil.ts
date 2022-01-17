export interface Fossil {
    name: string;
    image: string;
    buy_price: number | string;
    sell_price: number | string;
    size: string;
    source: string;
    interactive: boolean | string;
    in_catalog: boolean;
    can_reorder: boolean;
    color1: string;
    color2: string;
    museum_description: string;
    spreadsheet_id: string;
}

export interface SpreadsheetFossil {
    name: string;
    image: string;
    buy: number | string;
    sell: number;
    color1: string;
    color2: string;
    description: string;
    size: string;
    source: string;
    interact: string;
    catalog: string;
    uniqueEntryID: string;
    version?: string;
    internalID?: number;
}
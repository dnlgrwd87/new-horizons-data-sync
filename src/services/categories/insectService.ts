import { Insect, SpreadsheetInsect } from '../../models';
import { BaseService } from './base-service';

export class InsectService implements BaseService {
    mapToDbFormat(ssBug: SpreadsheetInsect): Insect {
        return {
            name: ssBug.name,
            critterpedia_image: ssBug.critterpediaImage,
            icon_image: ssBug.iconImage,
            furniture_image: ssBug.furnitureImage,
            museum_description: ssBug.description,
            catch_phrase: ssBug.catchphrase,
            sell_price: ssBug.sell,
            source: ssBug['where/How'],
            weather: ssBug.weather,
            color1: ssBug.color1,
            color2: ssBug.color2,
            spreadsheet_id: ssBug.uniqueEntryID,
        };
    }
}

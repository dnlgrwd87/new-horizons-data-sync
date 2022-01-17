import { Fish, SpreadsheetFish } from '../../models';
import { BaseService } from './base-service';

export class FishService implements BaseService {
    
    mapToDbFormat(ssFish: SpreadsheetFish): Fish {
        return {
            name: ssFish.name,
            critterpedia_image: ssFish.critterpediaImage,
            icon_image: ssFish.iconImage,
            furniture_image: ssFish.furnitureImage,
            museum_description: ssFish.description,
            catch_phrase: ssFish.catchphrase,
            sell_price: ssFish.sell,
            source: ssFish['where/How'],
            lighting_type: ssFish.lightingType,
            shadow: ssFish.shadow,
            size: ssFish.size,
            color1: ssFish.color1,
            color2: ssFish.color2,
            spreadsheet_id: ssFish.uniqueEntryID,
        };
    }
}

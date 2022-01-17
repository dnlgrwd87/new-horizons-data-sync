import { Villager, SpreadsheetVillager } from '../../models';
import { BaseService } from './base-service';

export class VillagerService implements BaseService {
    mapToDbFormat(ssVillager: SpreadsheetVillager): Villager {
        return {
            name: ssVillager.name,
            icon_image: ssVillager.iconImage,
            house_image: ssVillager.houseImage,
            birthday: ssVillager.birthday,
            catchphrase: ssVillager.catchphrase,
            gender: ssVillager.gender,
            species: ssVillager.species,
            personality: ssVillager.personality,
            style1: ssVillager.style1,
            style2: ssVillager.style2,
            color1: ssVillager.color1,
            color2: ssVillager.color2,
            spreadsheet_id: ssVillager.uniqueEntryID,
        };
    }
}

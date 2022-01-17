import { Fossil, SpreadsheetFossil } from '../../models';
import { BaseService } from './base-service';

export class FossilService implements BaseService {
    mapToDbFormat(ssFossil: SpreadsheetFossil): Fossil {
        const interactive = ssFossil.interact.toLowerCase() !== 'no';
        const inCatalog = ssFossil.catalog.toLowerCase() !== 'not in catalog';
        const canReorder = ssFossil.catalog.toLowerCase() === 'for sale';
        const buyPrice =
        typeof ssFossil.buy === 'string' &&
        ssFossil.buy.toLowerCase() === 'nfs'
            ? 0
            : ssFossil.buy;

        return {
            name: ssFossil.name,
            image: ssFossil.image,
            buy_price: buyPrice,
            sell_price: ssFossil.sell,
            size: ssFossil.size,
            source: ssFossil.source,
            interactive,
            in_catalog: inCatalog,
            can_reorder: canReorder,
            color1: ssFossil.color1,
            color2: ssFossil.color2,
            museum_description: ssFossil.description,
            spreadsheet_id: ssFossil.uniqueEntryID,
        };
    }
}

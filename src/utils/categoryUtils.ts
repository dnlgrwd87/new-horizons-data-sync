import {
    VillagerService,
    FossilService,
    InsectService,
    FishService,
} from '../services/categories';

export enum Category {
    Villagers = 'villagers',
    Fossils = 'fossils',
    Fish = 'fish',
    Insect = 'insects',
}

export const categoryServices = {
    [Category.Villagers]: VillagerService,
    [Category.Fossils]: FossilService,
    [Category.Fish]: FishService,
    [Category.Insect]: InsectService,
};

export const categoryTables = {
    [Category.Villagers]: 'villager',
    [Category.Fossils]: 'fossil',
    [Category.Fish]: 'fish',
    [Category.Insect]: 'insect',
};

export const isCategoryValid = (category: Category) => {
    return Object.values(Category).includes(category);
};

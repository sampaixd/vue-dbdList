export function SortByName(killers, reverseSort) {
    killers.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1 * reverseSort;
        }
        if (nameA > nameB) {
            return 1 * reverseSort;
        }

        return 0;
    });
    return killers;
}
export function SortByRating(killers, reverseSort) {
    killers.sort((a, b) => {
        if (a.rating.id < b.rating.id) {
            return -1 * reverseSort
        }
        else if (a.rating.id > b.rating.id) {
            return 1 * reverseSort;
        }

        return 0;
    });
    return killers;
}

export function SortByDifficulty(killers, reverseSort) {
    killers.sort((a, b) => {
        if (a.difficulty.id < b.difficulty.id) {
            return -1 * reverseSort;
        }
        else if (a.difficulty.id > b.difficulty.id) {
            return 1 * reverseSort;
        }
        return 0;
    });
    return killers;
}
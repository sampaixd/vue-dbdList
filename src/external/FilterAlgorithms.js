const allRanks = ["bad", "average", "good", "meta"];
const allDifficulties = ["easy", "medium", "hard", "challenging"];

export function FilterRanks(killerList, chosenRanks) {
    let filteredRanks = allRanks.filter((rank) => {chosenRanks.includes(rank);});
    let filteredList = killerList.filter((killer) => 
    { filteredRanks.includes(killer.rank.str); });
    console.log(filteredList);
    return filteredList;
}

export function FilterDifficulty(killerList, chosenDifficulties) {
    let filteredDifficulties = allDifficulties.filter((difficulty) => 
    {});
}
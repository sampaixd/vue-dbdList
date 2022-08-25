<template lang="">
    <div>
        <table class="killerTable">
            <tr class="column">
                <th @click="Sort($event, 'name')">
                    {{ nameHeader ? "Name⬇️" : "Name⬆️" }}
                </th>
                <th @click="Sort($event, 'rating')">
                {{ratingHeader ? "Rating⬇️" : "Rating⬆️"}}
                </th>
                <th @click="Sort($event, 'difficulty')">
                {{difficultyHeader ? "Difficulty⬇️" : "Difficulty⬆️"}}</th>
            </tr>
            <tr class="column" v-for="killer in killers">
                <td>{{killer.name}}</td>
                <td :class="killer.rating.str">{{killer.rating.str}}</td>
                <td :class="killer.difficulty.str">{{killer.difficulty.str}}</td>
            </tr>
        </table>
    </div>
</template>
<script>


export default {
    props: ["killers"],
    data() {
        return {
            sortOption: "",
            currentSort: "",
            reverseSort: 1,
        }
    },
    methods: {
        Sort(event, sortOption = this.sortOption) {
            this.sortOption = sortOption;
            if (this.currentSort !== sortOption) {
                this.reverseSort = 1;
                this.currentSort = sortOption;
            }
            else {
                this.reverseSort *= -1;
            }
            if (sortOption === "name") {
                this.killers = this.SortByName(this.killers, this.reverseSort);
            }
            else if (sortOption === "rating") {
                this.killers = this.SortByRating(this.killers, this.reverseSort);
            }
            else {
                this.killers = this.SortByDifficulty(this.killers, this.reverseSort);
            }
        },

        SortByName(killers, reverseSort) {
            killers.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1 * reverseSort;
                }
                if (nameA > nameB) {
                    return -1 * reverseSort;
                }

                return 0;
            });
            return killers;
        },

        SortByRating(killers, reverseSort) {
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
        },

        SortByDifficulty(killers, reverseSort) {
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

    },
    computed: {
        nameHeader() {
            return this.sortOption === "name" && 0 < this.reverseSort;
        },

        ratingHeader() {
            return this.sortOption === "rating" && 0 < this.reverseSort;
        },

        difficultyHeader() {
            return this.sortOption === "difficulty" && 0 < this.reverseSort;
        }
    },

}
</script>
<style scoped>
.killerTable {
    display: flex;
    width: 80%;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.5rem;
    margin: 1.5rem;
    border: 3px, black;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 4px 4px 10px black;
}

.column {
    padding: 0.5rem;
    margin: 0.1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 300%;
    justify-content: center;
    justify-content: space-around;
    border: 1px black;
    border-style: solid;
}

.bad {
    color: red
}

.average {
    color: darkgoldenrod;
}

.good {
    color: green;
}

.meta {
    color: lime;
}

.easy {
    color: lime;
}

.medium {
    color: green
}

.hard {
    color: darkgoldenrod
}

.challenging {
    color: red
}

th:hover {
    color: red;
}

td {
    display: flex;
    justify-content: center;
}

button {
    margin: 1rem;
}
</style>
<template lang="">
    <div>
        <select v-model="sortOption">
        <option value="name">name</option>
        <option value="rating">rating</option>
        <option value="difficulty">difficulty</option>
        </select>
        <button @click="Sort">meow</button>
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


import { SortByName, SortByRating, SortByDifficulty } from "../external/SortingAlgorithms.js";
export default {
    props: ["killers"],
    data() {
        return {
            sortOption: "name",
            currentSort: "name",
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
                this.killers = SortByName(this.killers, this.reverseSort);
            }
            else if (sortOption === "rating") {
                this.killers = SortByRating(this.killers, this.reverseSort);
            }
            else {
                this.killers = SortByDifficulty(this.killers, this.reverseSort);
            }
        },

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
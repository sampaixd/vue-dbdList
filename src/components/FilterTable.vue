<template>
    <div>
        <fieldset>
            <legend>Filter out categories</legend>

            <div class="category">
                <span class="title">Name</span>
                <input v-model="activeNameFilter" v-on:input="ChangeNameFilter" type="text" class="nameFilter">
            </div>
            <div class="category">
                <span class="title">Rating</span>
                <input type="checkbox" name="meta" checked @click="ChangeRatingFilter('meta')">
                <label for="meta">meta</label>
                <input type="checkbox" name="good" checked @click="ChangeRatingFilter('good')">
                <label for="good">good</label>
                <input type="checkbox" name="average" checked @click="ChangeRatingFilter('average')">
                <label for="average">average</label>
                <input type="checkbox" name="bad" checked @click="ChangeRatingFilter('bad')">
                <label for="bad">bad</label>
            </div>
            <div class="category">
                <span class="title">Difficulty</span>
                <input type="checkbox" name="challenging" checked @click="ChangeDifficultyFilter('challenging')">
                <label for="challenging">challenging</label>
                <input type="checkbox" name="hard" checked @click="ChangeDifficultyFilter('hard')">
                <label for="hard">hard</label>
                <input type="checkbox" name="medium" checked @click="ChangeDifficultyFilter('medium')">
                <label for="medium">medium</label>
                <input type="checkbox" name="easy" checked @click="ChangeDifficultyFilter('easy')">
                <label for="easy">easy</label>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    props: ['allKillers'],
    data() {
        return {
            activeNameFilter: "",

            activeRatings: [
                "bad",
                "average",
                "good",
                "meta"
            ],

            activeDifficulties: [
                "easy",
                "medium",
                "hard",
                "challenging"
            ],
        }
    },

    methods: {

        testMethod() {

        },

        ChangeNameFilter() {
            this.killers = this.filterKillers(this.allKillers, this.activeNameFilter, this.activeRatings, this.activeDifficulties);
            this.$emit('filterChanged', this.killers);
        },

        ChangeRatingFilter(selectedFilter) {
            let selectedFilterIndex = this.activeRatings.indexOf(selectedFilter);

            if (selectedFilterIndex > -1) {
                this.activeRatings.splice(selectedFilterIndex, 1);
            }

            else {
                this.activeRatings.push(selectedFilter);
            }
            this.killers = this.filterKillers(this.allKillers, this.activeNameFilter, this.activeRatings, this.activeDifficulties);
            this.$emit('filterChanged', this.killers);
        },

        ChangeDifficultyFilter(selectedFilter) {
            let selectedFilterIndex = this.activeDifficulties.indexOf(selectedFilter);

            if (selectedFilterIndex > -1) {
                this.activeDifficulties.splice(selectedFilterIndex, 1);
            }

            else {
                this.activeDifficulties.push(selectedFilter);
            }
            //this.killers = FilterDifficulty(this.allKillers, this.activeDifficulties);
            //this.killers = FilterRanks(this.killers, this.activeRatings);
            this.killers = this.filterKillers(this.allKillers, this.activeNameFilter, this.activeRatings, this.activeDifficulties);
            this.$emit('filterChanged', this.killers);
        },

        filterKillers(killerList, nameFilter, ratingFilter, difficultyFilter) {
            return killerList.filter((killer) =>
                ratingFilter.includes(killer.rating.str) &&
                difficultyFilter.includes(killer.difficulty.str) &&
                killer.name.toLowerCase().indexOf(nameFilter) != -1);
        }
    }
}
</script>
<style scoped>
fieldset {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.nameFilter {
    width: 60%;
    height: 20px;
}

.category {
    display: grid;
    grid-template-columns: column;
}

.title {
    font-size: 1.5rem;

}
</style>
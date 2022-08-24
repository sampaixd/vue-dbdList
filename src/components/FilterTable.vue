<template>
    <div>
        <fieldset>
            <legend>Filter out categories</legend>

            <div class="category">
                <span class="title">Name</span>
                <input type="text" class="nameFilter">
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
import { FilterRanks, FilterDifficulty } from '../external/FilterAlgorithms';
export default {
    props: ['allKillers'],
    data() {
        return {


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
        ChangeRatingFilter(selectedFilter) {
            let selectedFilterIndex = this.activeRatings.indexOf(selectedFilter);
            
            if (selectedFilterIndex > -1) {
                this.activeRatings.splice(selectedFilterIndex, 1);
            }

            else {
                this.activeRatings.push(selectedFilter);
            }
            this.killers = FilterRanks(this.allKillers, this.activeRatings);
            this.$emit('killers', this.killers);
        },

        ChangeDifficultyFilter(selectedFilter) {
            let selectedFilterIndex = this.activeDifficulties.indexOf(selectedFilter);
            
            if (selectedFilterIndex > -1) {
                this.activeDifficulties.splice(selectedFilterIndex, 1);
            }

            else {
                this.activeDifficulties.push(selectedFilter);
            }
            this.killers = FilterDifficulty(this.allKillers, this.activeDifficulties);
            this.$emit('killers', this.killers);
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
<script setup>
import TheHeader from './components/TheHeader.vue'
import FilterTable from './components/FilterTable.vue'
import KillerTable from './components/KillerTable.vue'
</script>

<template>
  <header>
    <TheHeader message="Killer table"></TheHeader>
  </header>

  <main>
    <FilterTable :allKillers="allKillers" @filterChanged="changeKillerList"></FilterTable>
    <KillerTable :killers="killers"></KillerTable>
  </main>
</template>

<script>
const rating = {
  bad: {
    str: "bad",
    id: 3
  },
  average: {
    str: "average",
    id: 2
  },
  good: {
    str: "good",
    id: 1
  },
  meta: {
    str: "meta",
    id: 0
  }
}

const difficulty = {
  easy: {
    str: "easy",
    id: 0
  },
  medium: {
    str: "medium",
    id: 1
  },
  hard: {
    str: "hard",
    id: 2
  },
  challenging: {
    str: "challenging",
    id: 3
  }
}

export default {
  data() {
    return {

      allKillers: [
        {
          name: "Trapper",
          rating: rating.bad,
          difficulty: difficulty.medium
        },
        {
          name: "Wraith",
          rating: rating.average,
          difficulty: difficulty.easy
        },
        {
          name: "Hillbilly",
          rating: rating.good,
          difficulty: difficulty.hard
        },
        {
          name: "Nurse",
          rating: rating.meta,
          difficulty: difficulty.challenging
        },
        {
          name: "Shape",
          rating: rating.bad,
          difficulty: difficulty.medium
        },
        {
          name: "Hag",
          rating: rating.good,
          difficulty: difficulty.challenging
        }
      ],
      killers: []
    }
  },
  methods: {
    changeKillerList(killers) {
      console.log("updating killer list");
      this.killers = killers;
    }
  },
  beforeMount() {
    console.log("creating killer list");
    this.killers = [...this.allKillers];
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

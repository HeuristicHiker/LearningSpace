<script>
import Counter from "./components/base-counter.vue";
import Characters from "./components/BaseCharacters.vue";
import BenderStatistics from "./components/BenderStatistics.vue";
import BaseButton from "./components/base-button.vue";
import BaseLayout from "./components/layout.vue";
export default {
  data() {
    return {
      message: "Hello it works",
      characterList: [
        {
          name: "Ang",
          isFavorite: true,
          element: ["Fire", "Water"],
        },
        {
          name: "Bob",
          isFavorite: false,
          element: ["Fire"],
        },
        {
          name: "Sally",
          isFavorite: false,
          element: ["Water"],
        },
      ],
    };
  },
  components: {
    BenderStatistics,
    BaseButton,
    BaseLayout,
    Counter,
    Characters,
  },
};
</script>

<template>
  <div id="app">
    <BaseLayout>
      <template #one>
        <Counter />
      </template>
      <template #two>
        <Characters />
        <BaseButton left> </BaseButton>
        <BenderStatistics :characters="characterList" />
      </template>
    </BaseLayout>
  </div>
</template>

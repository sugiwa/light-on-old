<template>
  <v-card class="mx-auto my-12 px-10 py-5" max-width="374">
    <h2>Idea Search</h2>
    <v-form ref="form" v-model="isValid" lazy-validation>
      <v-text-field
        v-model="idea"
        label="Idea"
        @keydown.enter="addIdea"
      ></v-text-field>

      <v-btn
        :disabled="!isValid"
        color="success"
        class="mr-4 mb-5"
        @click="searchIdea"
      >
        Search
      </v-btn>
    </v-form>

    <v-list>
      <v-list-item
        v-for="(idea, index) in ideaList"
        :key="index"
        class="height-0"
      >
        <v-list-item-content v-text="idea" class="py-0"></v-list-item-content>
        <v-list-item-icon>
          <v-btn fab text small @click="deleteIdea(index)">
            <v-icon v-text="'mdi-delete'"></v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "IdeaForm",
  data: () => ({
    idea: "",
    ideaList: [],
  }),
  computed: {
    isValid() {
      return this.ideaList.length > 2;
    },
  },
  methods: {
    addIdea() {
      if (this.idea !== "") {
        this.ideaList.push(this.idea);
        this.idea = "";
      }
    },
    deleteIdea(index) {
      this.ideaList.splice(index, 1);
    },
    searchIdea() {
      console.log(this.ideaList);
      this.$router.push({ path: "/idea_result" });
    },
  },
};
</script>

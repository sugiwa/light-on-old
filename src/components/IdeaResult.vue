<template>
  <v-card class="mx-auto my-12 px-10 py-5" max-width="374">
    <h2>Idea Result</h2>

    <v-list>
      <CombinedIdea :ideas="['idea1', 'idea2']" :isLiked="true" />
      <CombinedIdea :ideas="['idea3', 'idea4']" :isLiked="false" />
    </v-list>
  </v-card>
</template>

<script>
import CombinedIdea from "./CombinedIdea.vue";

export default {
  name: "IdeaResult",
  components: {
    CombinedIdea,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

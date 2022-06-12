<template>
  <v-list-item>
    <v-list-item-content v-text="ideas[0]"></v-list-item-content>
    <v-spacer></v-spacer>
    <v-list-item-content v-text="'×'"></v-list-item-content>
    <v-spacer></v-spacer>
    <v-list-item-content v-text="ideas[1]"></v-list-item-content>
    <v-spacer></v-spacer>
    <v-btn fab text small>
      <v-icon
        v-text="'mdi-star'"
        :color="favorite ? 'yellow' : 'grey'"
      ></v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  name: "CombinedIdea",
  props: {
    ideas: {
      type: Array,
      default: () => ["idea1", "idea2"],
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    favorite() {
      return this.isLiked;
    },
  },
  methods: {},
};
</script>

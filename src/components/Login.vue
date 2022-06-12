<template>
  <v-card class="mx-auto my-12 px-10 py-5" max-width="374">
    <h2>Log in</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="4"
        :rules="passwordRules"
        label="password"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 mb-5"
        @click="validate"
      >
        Log in
      </v-btn>
    </v-form>

    <router-link to="/signin" class="my-5">Create account</router-link>
  </v-card>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [(v) => !!v || "E-mail is required"],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    validate() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<template>
  <v-card class="mx-auto my-12 px-10 py-5" max-width="374">
    <h2>Sign up</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="4"
        :rules="passwordRules"
        label="password"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 mb-5"
        @click="validate"
      >
        Sign up
      </v-btn>
    </v-form>

    <router-link to="/login">Log in</router-link>
  </v-card>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 4) || "Password must be more than 4 characters",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

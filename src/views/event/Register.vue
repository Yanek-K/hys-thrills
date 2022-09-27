<template>
  <div v-if="event">
    <p>Register for the event here</p>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      // Call to API
      // If success, redirect to event details

      this.GStore.flashMessage =
        "You are successfully registed for " + this.event.title;

      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);

      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>

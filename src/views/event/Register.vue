<template>
  <div v-if="event">
    <p>Register for the event here</p>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    register() {
      // Call to API
      // If success, redirect to event details
      this.$router.push({
        name: "EventDetails",
      });
    },
  },
};
</script>

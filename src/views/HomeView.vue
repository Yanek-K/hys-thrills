<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Track Day",
          description: "Get some serious speed",
          location: "Exotic Car Rentals",
          date: "October 9th, 2022",
          time: "12pm",
        },
        {
          id: 2,
          title: "Indoor Sky Diving",
          description: "Wanna fall from the sky?",
          location: "West-End",
          date: "November 2022",
          time: "12pm",
        },
        {
          id: 3,
          title: "Swinging in the Trees",
          description: "Afraid of heights?",
          location: "Forest",
          date: "December 2022",
          time: "12pm",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

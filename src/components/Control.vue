<template>
  <div>
    <Timer :count="count" />
    <button v-on:click.prevent="increment()">Start</button>
    <button v-on:click.prevent="stop()">Stop</button>
  </div>
</template>
<script>
import Timer from './Timer.vue';

export default {
  name: "Control",
  components: { Timer },
  data: function () {
    return {
      count: 0,
      interval: null
    }
  },
  methods: {
    increment: function () {
      this.interval = setInterval(() => { this.count++ }, 1000)
    },
    stop: function () {
      clearInterval(this.interval)
    }
  }
}
</script>
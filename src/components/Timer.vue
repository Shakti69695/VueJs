<template>
  <div>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  }
}
</script>
<template>
  <div class="Test">
    <h3>Hello {{ name }}</h3>
  </div>
</template>
<script>
export default {
  name: "Test",
  data: () => {
    return {
      name: "Shakti"
    }
  }
}
</script>
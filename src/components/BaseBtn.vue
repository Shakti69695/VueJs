<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    label: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.action();
    }
  }
}

</script>
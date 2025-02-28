<template>
  <div class="card">
    <div class="header">
      <slot name="header">Header</slot>
    </div>
    <div class="title">
      <slot name="title">Title</slot>
    </div>
    <div class="body">
      <slot name="body">Body</slot>
    </div>
    <div class="footer">
      <slot name="footer">Footer</slot>
    </div>
  </div>
</template>

<style>
.header{
  height: 100px;
  width: 200px;
}
</style>
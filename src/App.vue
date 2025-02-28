<script setup>
import Card from './components/Card.vue';


</script>

<template>
  <Card class="card">
    <template #header> <img src="https://images8.alphacoders.com/466/466612.jpg" class="img" alt=""></template>
    <template #title>
      <h1 class="title">card</h1>
    </template>
    <template #body class="body"> Lorem ipquisquam iste laudantium doloremque exercitationem neque amet doloribus ab
      officiis, dolores necessitatibus perferendis fugit minima, dolorum culpa enim.</template>
    <template #footer><button class="btn">Go somewhere</button></template>
  </Card>
</template>

<style>
.card {
  height: 400px;
  width: 400px;
  border: 2px solid rgb(185, 147, 147);
  display: flex;
  flex-direction: column;
  position: relative;
}

.img {
  height: 200px;
  width: 398px;
}

.title {
  position: absolute;
  bottom: 75px;
  font-weight: 700;
  margin-left: 5px;
}

.body {
  position: absolute;
  bottom: 30px;
  padding: 7px;
}

.btn {
  position: absolute;
  bottom: 12px;
  left: 20px;
  background-color: blue;
  color: white;
}
</style>

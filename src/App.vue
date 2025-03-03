<script>
import Body from './layout/Body.vue';
import Content from './layout/Content.vue';
import Footer from './layout/Footer.vue';
import Header from './layout/Header.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Body,
    Content
  }
}
</script>

<template>
  <Header />
  <Content>

    <Body />
  </Content>
  <Footer />
</template>

<style></style>

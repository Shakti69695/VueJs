<template>
  <div id="login">
    <Header/>
    <section class="">
      <div class="hero-body">
        <div class="container">
          <h3 class="title">  
            Login Page
          </h3>
        </div>
      </div>
    </section>
    <section>
      <div class="wrapper">
        <div class="side-column"></div>
        <div class="center-column">
          <Form />
        </div>
        <div class="side-column"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Form from './Form.vue';
import Header from './Header.vue';

export default {
  name: "Login",
  components: {
    Header,
    Form
  }
}
</script>

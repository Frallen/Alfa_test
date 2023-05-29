<template>
  <Nav @formVisible="e=>formState=e"></Nav>
  <div class="container">
    <div class="wrapper">
      <Form v-if="formState"></Form>
      <Info v-else></Info>
    </div>
  </div>

</template>

<script setup lang="ts">
import Form from "@/components/Form.vue";
import Nav from "@/components/Nav.vue";
import Info from "@/components/Info.vue";
import {ref} from "vue";

const formState = ref(true)


</script>

<style lang="less">
@import "./assets/_var";
@import "./assets/_mixins";
@import "modern-normalize/modern-normalize.css";
@import "./assets/main";

.wrapper {
  max-width: 616px;
  margin: 30px auto 50vh;
}
</style>

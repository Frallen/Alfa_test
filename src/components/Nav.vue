<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="nav">
        <div class="nav-logo"><img src="../assets/img/logo.png"></div>
        <div class="nav-links">
          <div class="nav-links-item" @click.stop="state=true">Форма</div>
          <div class="nav-links-item" @click.stop="state=false">Превью</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";

const state = ref<boolean>(true)
const emit = defineEmits<{ (e: "formVisible", formVisible: boolean): void }>()

watch(state, () => {
  emit("formVisible", state.value)
})

</script>
<style scoped lang="less">
@import "@/assets/_var.less";
@import "@/assets/_mixins.less";

.nav-wrapper {
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
}

.nav {
  display: flex;
  padding: 24px 0;

  &-links {
    display: flex;
    align-items: center;
    margin: auto;

    &-item {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: @gray;
      cursor: pointer;
    }

    &-item:last-child {
      margin: 0 0 0 24px;
    }
  }
}
</style>
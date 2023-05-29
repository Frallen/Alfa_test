<template>
  <div class="info">
    <div v-if="info" class="info-main">
      <div class="title">
        Персональные данные
      </div>
      <div class="info-main-name bold">{{ info.name }} , {{ info.age}} лет</div>
      <div class="info-childrens" v-if="info.childrens&&info.childrens.length>0">
        <div class="title">
          Дети
        </div>
        <div class="info-childrens-wrapper" >
          <div class="item bold" v-for="item in info.childrens">{{item.name}} , {{ item.age}} лет</div>
        </div>
      </div>
    </div>
    <div v-else class="info-empty bold">Заполните данные в форме</div>
  </div>

</template>
<script setup lang="ts">
import {useCookies} from "@vueuse/integrations/useCookies";
import {ref} from "vue";
import {childrenInterface} from "@/types/global.types.js";

const {get} = useCookies(['user'], {autoUpdateDependencies: true})

const info = ref<childrenInterface>(get("user"))

//console.log(info.value)
</script>


<style scoped lang="less">
@import "@/assets/_var.less";
@import "@/assets/_mixins.less";

.info{
  &-empty{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-main{
    margin: 0 0 60px 0;
  }
  &-name{
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &-childrens{
    margin: 60px 0 0;
    &-wrapper{
      display: flex;
      flex-direction: column;
      .item{
        background: #F1F1F1;
        .br(5px);
        display: block;
        width: fit-content;
        padding: 10px 20px;
        margin: 20px 0 0;
      }
      .item:first-child{
        margin:0;
      }
    }
  }
}
</style>
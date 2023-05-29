<template>
  <Form @submit="onSubmit" class="form" :validation-schema="RegSchema()" :initial-values="childrenState">
    <div class="form-info">
      <div class="form-head">
        <div class="title">
          Персональные данные
        </div>
      </div>

      <Field

          v-slot="{ valid, meta, field }" name="name"
      >
        <div class="input form-info-item" :class="{ 'input-error': meta.touched && !meta.valid }">
          <label for="name">Имя</label>
          <input
              v-bind="field"

              id="name"
              type="text"

          />
        </div>
      </Field>
      <ErrorMessage name="name" class="error"/>
      <Field
          v-slot="{ valid, meta, field }" name="age"
      >
        <div class="input form-info-item" :class="{ 'input-error': meta.touched && !meta.valid }">
          <label for="age">Возраст</label>
          <input
              v-bind="field"

              id="age"
              type="number"

          />
        </div>
      </Field>
      <ErrorMessage name="age" class="error"/>
    </div>
    <div class="form-children">
      <FieldArray name="childrens" v-slot="{ fields, push, remove }">
        <div class="form-head">
          <div class="title">
            Дети (макс. 5)
          </div>
          <div class="button button-add" v-show="fields.length<5" @click="push({ childName: '', childAge: null })"><span>+</span>Добавить ребенка
          </div>
        </div>

        <div class="form-children-wrapper">
          <div class="form-children-item" v-for="(field, idx) in fields.slice(0, 5)">
            <Field
                v-slot="{ valid, meta, field }" :id="`name_${idx}`" :name="`childrens[${idx}].name`"
                :key="field.key"
            >
              <div class="input item" :class="{ 'input-error': meta.touched && !meta.valid }">
                <label :for="`name_${idx}`">Имя</label>
                <input
                    v-bind="field"


                    type="text"

                />
              </div>
            </Field>
            <Field
                v-slot="{ valid, meta, field }" :id="`age_${idx}`" :name="`childrens[${idx}].age`"
            >
              <div class="input item" :class="{ 'input-error': meta.touched && !meta.valid }">
                <label :for="`age_${idx}`">Возраст</label>
                <input
                    v-bind="field"

                    type="number"
                />
              </div>
            </Field>
            <div class="item delete" @click="remove(idx)">Удалить</div>
          </div>
        </div>
      </FieldArray>
      <button type="submit" class="button-submit button button-primary">Сохранить</button>
    </div>

  </Form>
</template>

<script setup lang="ts">
import {Form, Field, ErrorMessage, FieldArray} from "vee-validate";
import {RegSchema} from "@/composables/useSchema"
import {ref} from "vue";
import {useCookies} from '@vueuse/integrations/useCookies'
import {childrenInterface} from "@/types/global.types.js";

const {set, get} = useCookies(['user'], {autoUpdateDependencies: true})
const childrenState = ref<childrenInterface>(get("user"))


const onSubmit = (values: childrenInterface) => {

  set('user', values)
}
</script>
<style scoped lang="less">
@import "@/assets/_var.less";
@import "@/assets/_mixins.less";

.form {
  display: flex;
  flex-direction: column;

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;


  }

  &-info {
    &-item {
      margin: 10px 0 0;
    }

    &-item:nth-child(2) {
      margin: 0;
    }
  }

  &-children {
    margin: 43px 0 30px;

    .form-head {
      .title {
        margin: 0
      }
    }

    .button-submit {
      margin: 30px 0 0;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0 0;

      .item {
        margin: 0 0 0 18px;
      }

      .item:first-child {
        margin: 0;
      }

      .delete {
        color: @blue;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
<template>
  <div class="add_product">
    <UiInput
      v-model="product.title"
      title="Наименование товара"
      placeholder="Введите наименование товара"
      :error.sync="errors.title"
      required></UiInput>

    <UiTextarea
      v-model="product.description"
      title="Описание товара"
      placeholder="Введите описание товара"></UiTextarea>

    <UiInput
      v-model="product.img"
      title="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      :error.sync="errors.img"
      required></UiInput>

    <UiInput
      v-model="product.price"
      type="number"
      min="0"
      max="99999999"
      title="Цена товара"
      placeholder="Введите цену"
      :error.sync="errors.price"
      required></UiInput>

    <button :class="{submit: true, is_off: buttonIsOff}" @click="formValidation()">Добавить товар</button>
  </div>
</template>

<script>

export default {
  name: "add-product",
  data() {
    return {
      product: {
        title: '',
        description: '',
        img: '',
        price: ''
      },

      errors: {
        title: '',
        img: '',
        price: ''
      }

    }
  },
  updated() {
    if (!!this.product.title) this.errors.title = '';
    if (!!this.product.img) this.errors.img = '';
    if (!!this.product.price) this.errors.price = '';
  },
  computed: {
    buttonIsOff() {
      return !(!!this.product.title && !!this.product.img && !!this.product.price);
    }
  },
  methods: {
    formValidation() {
      let errorText = 'Поле является обязательным';
      if (!this.product.title) this.errors.title = errorText;
      if (!this.product.img) this.errors.img = errorText;
      if (!this.product.price) this.errors.price = errorText;

      if (this.checkErrors()) {
        this.product.id = this.$store.getters["products/getLastID"]+1;
        this.$store.commit('products/addProduct', this.product);
        this.product = {
          title: '',
          description: '',
          img: '',
          price: ''
        }
      }
    },

    checkErrors() {
      for (let i in this.errors) {
        if (!!this.errors[i]) {
          return false
        }
      }
      return true;
    }
  }
}
</script>

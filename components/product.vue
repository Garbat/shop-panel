<template>
  <transition
    duration="1000"
    name="custom-classes-transition"
    leave-active-class="animated scaleDown"
  >
    <div class="card" v-show="visible">
      <div class="img">
        <img :src="product.img" alt="">
      </div>
      <div class="info">
        <h4>{{ product.title }}</h4>
        <p class="description" :title="product.description">{{ product.description }}</p>
        <span class="price">{{ formatPrice }} руб.</span>
      </div>
      <button class="delete" @click="removeCard()"></button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object,
  },
  data(){
    return{
      visible: true,
    }
  },
  computed: {
    formatPrice() {
      return new Intl.NumberFormat('ru-RU').format(this.product.price);
    }
  },
  methods: {
    removeCard(){
      this.visible = false;
      setTimeout(()=>{
        this.$store.commit('products/removeProduct', this.product.id);
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 332px;
  position: relative;
  height: 423px;
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  margin: 0 16px 16px 0;
  cursor: pointer;
  transition: all 300ms;

  .img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  .info {
    padding: 16px;
    height: 100%;

    h4 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    .description {
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .price {
      font-size: 24px;
      font-weight: 600;
      position: absolute;
      bottom: 24px;
      left: 16px;
    }

  }

  button.delete {
    display: none;
    opacity: 0;
    width: 32px;
    height: 32px;
    background: url("assets/images/delete.svg") no-repeat center center #FF8484;
    z-index: 1;
    position: absolute;
    right: -10px;
    top: -10px;
    transition: all 200ms;

    &:hover {
      transform: scale(1.3);
    }

    &:active {
      transform: scale(1);
    }
  }

  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.2);

    button.delete {
      display: block;
      opacity: 1;
    }
  }

}

.scaleDown {
  transform: translateY(-50px);
  opacity: 0;
}
</style>

<template>
  <div class="container">
    <header>
      <h2>Добавление товара</h2>
      <UiSelect :options="options" class="sortSelect" v-model="sortSelectable"></UiSelect>
    </header>
    <div class="panel">
      <div class="add-product">
        <AddProductForm></AddProductForm>
      </div>
      <transition-group tag="div" name="product-list" class="products">

        <div v-for="(product, index) in sortableProducts()" :key="product.id"
             :class="{product_card: true, visible: visibleProduct}">
          <ProductCard
            :product="product"></ProductCard>
        </div>

      </transition-group>
    </div>
  </div>
</template>

<script>
import AddProductForm from "~/components/add-product";
import ProductCard from "~/components/product";

export default {
  name: 'IndexPage',
  data() {
    return {
      visibleProduct: false,
      sortSelectable: "default",
      options: [
        {
          value: "default",
          text: "По умолчанию"
        },
        {
          value: "max",
          text: "По цене (>)"
        },
        {
          value: "min",
          text: "По цене (<)"
        },
        {
          value: "title",
          text: "По наименованию"
        },
      ]
    }
  },
  components: {
    AddProductForm,
    ProductCard
  },
  mounted() {
    this.visibleProduct = true;
  },
  methods: {
    sortableProducts() {
      switch (this.sortSelectable) {
        case 'default':
          return this.$store.getters['products/getProducts'].sort((prev, next) => {
            if (Number(prev.id) > Number(next.id)) return -1;
            if (Number(prev.id) > Number(next.id)) return 1;
          });
        case 'max':
          return this.$store.getters['products/getProducts'].sort((prev, next) => {
            if (Number(prev.price) > Number(next.price)) return -1;
            if (Number(prev.price) > Number(next.price)) return 1;
          });
        case 'min':
          return this.$store.getters['products/getProducts'].sort((prev, next) => {
            if (Number(prev.price) < Number(next.price)) return -1;
            if (Number(prev.price) < Number(next.price)) return 1;
          })
        case 'title':
          return this.$store.getters['products/getProducts'].sort((prev, next) => {
            if (prev.title < next.title) return -1;
            if (prev.title < next.title) return 1;
          })
      }
    },
  }

}
</script>

<style lang="scss" scoped>
.container {
  padding: 32px;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    padding-right: 16px;


    h2 {
      font-size: 28px;
      margin-bottom: 16px;
    }

    .sortSelect {
      width: 200px;
      z-index: 100;
    }
  }
}

.panel {
  display: flex;
  z-index: 10;

  .add-product {
    min-width: 332px;
    max-width: 332px;
    height: 100%;
    padding: 24px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);

    position: sticky;
    top: 24px;

  }

  .products {
    display: flex;
    flex-wrap: wrap;

    .product-list-move {
      transition: transform 1s;
    }

    .product_card {
      opacity: 0;
      transform: translateY(50px);
      transition: transform 500ms, opacity 500ms, box-shadow 300ms;

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}


@media all and (max-width: 1440px) {
  .container {
    width: 1092px;
  }
}

@media all and (max-width: 1092px) {
  .container {
    width: 744px;
  }
}

@media all and (max-width: 1092px) {
  .container {
    width: 480px;
  }
  header {
    flex-direction: column;
    align-items: center;
  }
  .panel {
    flex-direction: column;

    .add-product {
      position: relative;
      top: auto;
      margin-right: 0;
      max-width: 100%;
    }
  }
  .products{
    justify-content: center;
  }
}
</style>

<template>
  <div class="container">
    <header>
      <h2>Добавление товара</h2>
      <div class="sort">

      </div>
    </header>
    <div class="panel">
      <div class="add-product">
        <AddProductForm></AddProductForm>
      </div>
      <div class="products">
        <div v-for="(product, index) in $store.state.products.items" :key="product.id"
          :class="{product_card: true, visible: visibleProduct}"
             :style="{'transition-delay': (index+1)*100+'ms'}"

        >
          <ProductCard
                       :product="product"></ProductCard>
        </div>

      </div>
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
    }
  },
  components: {
    AddProductForm,
    ProductCard
  },
  mounted() {
    console.log(this.prod)
    this.visibleProduct = true;
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 32px;
  width: 1440px;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }
}

.panel {
  display: flex;

  .add-product {
    min-width: 332px;
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
</style>

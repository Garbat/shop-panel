<template>
  <div class="container">
   <header>
     <h2></h2>
     <div class="sort">

     </div>
   </header>
    <div class="panel">
      <div class="add-product">
        <AddProduct></AddProduct>
      </div>
      <div class="products">

      </div>
    </div>
  </div>
</template>

<script>
import AddProduct from "~/components/add-product";

export default {
  name: 'IndexPage',
  components: {
    AddProduct
  }
}
</script>

<style scoped>

</style>

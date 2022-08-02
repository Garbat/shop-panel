<template>
  <div>
    <span class="title">{{ title }}</span>
    <input type="text" v-model="value">
    <span class="error"></span>
  </div>
</template>

<script>
export default {
  name: "input",
  props: [
    {
      title: String,
      error: String,
      value: String,
    }
  ]
}
</script>

<style scoped>

</style>

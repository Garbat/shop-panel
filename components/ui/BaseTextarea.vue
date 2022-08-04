<template>
  <div :class="{ui_component: true, base_input: true, required: required, error: !!error}">
    <span class="title">{{ title }}</span>
    <textarea :value="value" @input="$emit('input', $event.target.value)" :required="required" :placeholder="placeholder"></textarea>
    <span class="error_text">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  emits: ['update:modelValue'],
  props: {
    title: String,
    error: String,
    required: Boolean,
    placeholder: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
textarea{
  height: 100px;
  &:focus{
    border: none;
    outline: none;
  }
}
</style>

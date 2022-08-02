<template>
  <div :class="{ui_component: true, base_input: true, required: required, error: !!error}">
    <span class="title">{{ title }}</span>
    <input type="text" @input="$emit('input', $event.target.value)" :required="required" :placeholder="placeholder">
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
    placeholder: String
  }
}
</script>


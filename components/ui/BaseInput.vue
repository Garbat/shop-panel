<template>
  <div :class="{ui_component: true, base_input: true, required: required, error: !!mutableError}">
    <span class="title">{{ title }}</span>
    <input :value="value" :type="type" @input="$emit('input', $event.target.value)" :required="required"
           :placeholder="placeholder" :min="min" :max="max">
    <span class="error_text">{{ mutableError }}</span>
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
    value: String,
    type: String,
    min: String,
    max: String
  },
  data() {
    return {}
  },
  updated() {
    this.$emit('update:error', this.error)
  },
  computed: {
    mutableError() {
      return this.error
    }
  }
}
</script>


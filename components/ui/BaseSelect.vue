<template>
  <div :class="{ui_component: true}">
    <span class="title">{{ title }}</span>
    <div :class="{select_wrapper: true, open: openOptions}" @click="openOptions = !openOptions">
      <span class="selected">{{ getSelectable().text }}</span>

      <ul>
        <li
          v-if="options"
          v-for="option in options"
          :key="option.value"
          @click="$emit('input', option.value)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  emits: ['update:modelValue'],
  props: {
    title: String,
    value: [String, Number],
    options: Array,
  },
  data() {
    return {
      openOptions: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.closeOptions)
  },
  methods: {
    closeOptions(e) {
      if (!this.$el.contains(e.target)) {
        this.openOptions = false;
      }
    },
    getSelectable() {
      let result;
      for (let i in this.options) {
        if (this.value === this.options[i].value) result = this.options[i];
      }
      return result;
    }
  }
}
</script>


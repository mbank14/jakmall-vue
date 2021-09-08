<template>
  <div>
      <button :class="type" :disabled="disabled" @click="$emit('click-button')">
          <slot>{{ buttonText }}</slot>
      </button>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonText: String,
        type: String,
        disabled: Boolean,
    },
}
</script>

<style>

</style>
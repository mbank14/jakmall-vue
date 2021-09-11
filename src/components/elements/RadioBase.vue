<template>
  <div class="radio-base">
    <h3>{{ name }}</h3>
    
    
    <input
      type="radio"
      :value="option"
      :id="option"
      :name="option"
    /><label for="option">
    {{ labelOption}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    paymentMethods: null,
    labelOption: null,
    name: null,
    option: {
      required: true,
      type: null,
    },
  },
}
</script>

<style lang="stylus">
.radio-base
  grid-template-row :repeat(3 , 1fr)

</style>
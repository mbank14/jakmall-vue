<template>
  <div class="radio-payment">
      <title-variant-border :titleText="titleText"></title-variant-border>
          <form action="">
      <div class="radio-payment__item grid">

        <radio-base :labelOption="option.price" v-for="option in options" :key="option.id" :option="option" :name="option.name" ></radio-base>
      </div>
          </form>
  </div>
</template>

<script>
import RadioBase from './elements/RadioBase.vue'
import TitleVariantBorder from './elements/TitleVariantBorder.vue'
export default {
    data(){
        return{
            paymentSelect: ''
        }
    },
    props: {
    paymentMethods: null,
    titleText: null,
    options: {
      required: true,
      type: null,
    },
  },

  components: { RadioBase, TitleVariantBorder },

}
</script>

<style lang="stylus">
.radio-payment__item
    grid-template-columns: repeat(3, 1fr) 
    @media screen and (max-width: 570px) 
        grid-template-columns: 1fr
</style>
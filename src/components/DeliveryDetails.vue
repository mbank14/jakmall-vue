<template>
  <div class="delivery-details">
      <div v-if="active == 1">
          <div class="delivery-detail__header">
              <h1>title</h1>
              <p>checkbox</p>
          </div>

          <form action="">
              <div class="delivery-detail__form grid">
                  <div class="flex form-item">
                      <input type="text" name="" id="" placeholder="Email">
                      <input type="email" name="" id="" placeholder="Phone Number">
                      <textarea name="textarea" id="" cols="30" rows="10" placeholder="Delivery address"></textarea>
                  </div>
                  <div class="flex form-item">
                      <input type="text" name="" id="" placeholder="Dropshipper name">
                      <input type="text" name="" id="" placeholder="Dropshipper phone number">
                  </div>
              </div>
              
          </form>
      </div>

      <div v-else-if="active == 2">
          <div>
              <!-- Delivery -->
              <div></div>

              <!-- Payment -->
              <div></div>
          </div>
      </div>

      <div v-else-if="active == 3">
          <div class="container flex" style="justify-content: center;">
              <div class="delivery-detail-finish flex">
                <title-variant-border :titleText="'Thank You'"></title-variant-border>              
                
                <div class="mt-1 mb-2">
                    <p>Order ID: {{ orderID }}</p>
                    <span>You order will be delivered {{ time }} with {{ deliveryMethod }}</span>
                </div>

                <p>
                    <span><i>i</i></span>
                    Go to homepage
                </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TitleVariantBorder from './elements/TitleVariantBorder.vue'
export default {
  components: { TitleVariantBorder },
props:{
    active: {
        type: Number,
        default: 1
    },

    orderID: String,
    time: String,
    deliveryMethod: String,
}
}
</script>

<style lang="stylus">

.delivery-detail__header
    display: flex;
    justify-content :space-between;

.delivery-detail__form
    grid-template-columns : repeat(2, 1fr);

    @media screen and (max-width: 570px)
        grid-template-columns : 1fr; 

.delivery-detail-finish
    min-height :370px;
    flex-direction :column;
    justify-content  :center;
    
    @media screen and (max-width: 570px)
        min-height :auto;

.form-item
    flex-direction : column


</style>
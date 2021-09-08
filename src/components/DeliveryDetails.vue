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
          <div class="container flex">
              <p>Order ID: {{ orderID }}</p>
              <span>You order will be delivered {{ time }} with {{ deliveryMethod }}</span>

              <p>Go to hompage</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
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

.form-item
    flex-direction : column


</style>
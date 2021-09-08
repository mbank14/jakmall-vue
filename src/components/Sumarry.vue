<template>
  <div class="container summary" id="summary">
      <!-- <h1>ii summary</h1> -->
      <!-- summary payment -->
      <div class="mt-2">
          <slot name="summary-payment">
              <h1>Summary</h1>
              <span>10 item purchased</span>
            
                <!-- payment method -->
              <div>
                  <div class="summary__item-payment">
                      <p>Delivery estimation</p>
                      <p>{{ deliveryEstimation}} as</p>
                  </div>
                  <div class="summary__item-payment">
                      <p>Payment Method</p>
                      <p>{{ paymentMethod}}as</p>
                  </div>
              </div>
          </slot>
      </div>


      <!-- COST -->
      <div>
          <slot name="summary-cost">
          <!-- detail -->
          <div class="summary__item-cost">
              <p>Cost of goods</p>
              <p>{{costTotal}}</p>
          </div>
          <div class="summary__item-cost">
              <p>Dropshipping Fee</p>
              <p>
                  {{ dropshippingFee }}
              </p>
          </div>
          <div class="summary__item-cost">
              <p>{{ shipmentName }} shipment</p>
              <p>{{ shipment }}</p>
          </div>
          </slot>
          <button-base :type="'btn btn-wide'" @click="handleNext()">Continue to payment</button-base>
      </div>
  </div>
</template>

<script>
import ButtonBase from "./elements/ButtonBase.vue"

export default 
  {
      data(){
          return{
              isDisabled: true
          }
      },
      props: {
          paymentMethod: String,
          deliveryEstimation: String,
          shipmentName:String,
          costTotal: Number,
          dropshippingFee: Number,
          total: Number,
          shipment: Number,
      },

      components: { ButtonBase },
    

    methods:{
        handleNext(){
            
        }
    }
}
</script>

<style lang="stylus">
.summary
    border-left : 1.5px solid rgba(0,0,0,.3);
    margin-top : 1rem;
    margin-bottom :1rem;
    padding-bottom :.78rem;

    @media screen and (max-width: 570px)
        border-top : 1.5px solid rgba(0,0,0,.3);
        border-left: 0;

.summary__item-payment
    padding: 2rem 0
    border-top: 1px solid
    

.summary__item-cost
    display : flex;
    justify-content :space-between;
</style>
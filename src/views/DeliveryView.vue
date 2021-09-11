<template>
  <section class="section">
    <div class="main__container container">
      <div v-if="actived !== 3">back to cart</div>
      <div class="grid main__content">
        <!-- delivery  -->
        <div>
          <delivery-details :active="this.$store.state.actived"></delivery-details>
        </div>

        <!-- summary -->
        <div>
          <sumarry
            :shipmentName="'Gojek'"
            :dropshippingFee="this.$store.state.dropshippingFee"
            :costTotal="50000"
            :shipment="1222"
          ></sumarry>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryDetails from "../components/DeliveryDetails.vue";
import Sumarry from "../components/Sumarry.vue";
// import ButtonBase from "../components/elements/ButtonBase.vue";
// import InputText from '../components/elements/InputText.vue'
export default {
  components: { Sumarry, DeliveryDetails },
  data() {
    return {
      koko: "lolo",
      actived: this.$store.state.actived,
    };
  },

  computed: {
    // dropshippingFee () {
    //   return this.$store.state.dropshippingFee;
    // }
  },

  methods: {
    handleContinue() {
      return this.active++;
    },

  },

  mounted(){
    if(localStorage.getItem('localData')){
      let localData = JSON.parse(localStorage.getItem('localData'));

      this.$store.state.emailCus = localData[0].data.emailCus;
      this.$store.state.phoneNumberCus = localData[0].data.phoneNumberCus;
      this.$store.state.addressCus = localData[0].data.addressCus;
      this.$store.state.dropshipperName = localData[0].data.dropshipperName;
      this.$store.state.dropshipperPhoneNumber = localData[0].data.dropshipperPhoneNumber;

    }


  },
};
</script>

<style lang="stylus">
.d-none
    display : none;

.main__container
    width :100%
    gap: 1rem;
    border-radius : .5rem;
    padding-top :3rem;
    box-shadow: 0 8px 8px -4px khaki;
    background :white;



.main__content
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 570px)
      grid-template-columns:  1fr;
      justify-content : center;
</style>

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
            <p>{{ deliveryEstimation }} as</p>
          </div>
          <div class="summary__item-payment">
            <p>Payment Method</p>
            <p>{{ paymentMethod }}as</p>
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
          <p>{{ costTotal }}</p>
        </div>
        <div class="summary__item-cost" v-if="dropshippingFee > 0">
          <p>Dropshipping Fee</p>
          <p >
            {{ dropshippingFee }}
          </p>
        </div>
        <div class="summary__item-cost">
          <p>{{ shipmentName }} shipment</p>
          <p>{{ shipment }}</p>
        </div>
        <div class="summary__item-cost mb-1-5 mt-1-5">
          <h1>Total </h1>
          <h1>{{ total }}</h1>
        </div>
      </slot>
      <button-base :type="'btn btn-wide'" @click-button="handleNext()"
        >Continue to sa</button-base
      >
    </div>
  </div>
</template>

<script>
import ButtonBase from "./elements/ButtonBase.vue";

export default {
  data() {
    return {
      isDisabled: true,
    };
  },
  props: {
    paymentMethod: String,
    deliveryEstimation: String,
    shipmentName: String,
    costTotal: Number,
    dropshippingFee: null,
    total: Number,
    shipment: Number,
  },

  components: { ButtonBase },

  computed:{
    //   dropshippingFee: () => {
    //       return this.$store
    //   },
  },

  methods: {
    handleValidationPhoneNumber(value) {
      const prefix = value.substring(0, 2);

      if (value >= 6 && value <= 20) {
        if (prefix !== "08" && prefix !== "62") {
          this.validHp = false;
        } else {
          this.validHp = true;
        }
      }
    },

    handleNext() {
      alert(this.$store.state.phoneNumberCus);
      if (this.$store.state.actived == 1) {
        if (localStorage.kokoko) {
          this.$root.addressCus = "lololo";
        }

        if(this.$store.state.phoneNumberCus.toString().length < 6 || isNaN(this.$store.state.phoneNumberCus)) return;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.$store.state.emailCus) == false) return;// eslint-disable-line

        if (this.$store.state.checkDropshipper) {
            if(this.$store.state.dropshipperPhoneNumber.toString().length < 6 || isNaN(this.$store.state.dropshipperPhoneNumber)) return;

          if (
            !this.$store.state.phoneNumberCus ||
            !this.$store.state.emailCus ||
            !this.$store.state.addressCus ||
            !this.$store.state.dropshipperName ||
            !this.$store.state.dropshipperPhoneNumber
          ) {
            return 0;
          }
        } else if (!this.$store.state.checkDropshipper && 
            !this.$store.state.phoneNumberCus ||
            !this.$store.state.emailCus ||
            !this.$store.state.addressCus  ){
        //   if (
        //     !this.$store.state.phoneNumberCus ||
        //     !this.$store.state.emailCus ||
        //     !this.$store.state.addressCus ||
        //     !this.$store.state.dropshipperName
        //   ) {
        //     return 0;
        //   }
            return 0
        } else {
            
            let localData = [];
          let objData = {
              emailCus: this.$store.state.emailCus,
            phoneNumberCus: this.$store.state.phoneNumberCus,
            addressCus: this.$store.state.addressCus,
            dropshipperName: this.$store.state.dropshipperName,
            dropshipperPhoneNumber: this.$store.state.dropshipperPhoneNumber,
          };

          localData.push({ data: objData });

          localStorage.setItem("localData", JSON.stringify(localData));
        
        }
      } else if (this.$store.state.actived == 2) {
        let localData = JSON.parse(localStorage.getItem("localData"));

        localData[0].data.koko = "momo";
        // localData.data.klllllko = 'momoadasdsa';
        console.log(localData[0].data.addressCus);

        localStorage.setItem("localData", JSON.stringify(localData));
      }

      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="stylus">
.summary {
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.78rem;

  @media screen and (max-width: 570px) {
    border-top: 1.5px solid rgba(0, 0, 0, 0.3);
    border-left: 0;
  }
}

.summary__item-payment {
  padding: 2rem 0;
  border-top: 1px solid;
}

.summary__item-cost {
  display: flex;
  justify-content: space-between;
  padding : .5rem 0;
}
</style>
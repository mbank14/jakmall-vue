<template>
  <div class="delivery-details">
    <div v-if="active == 1">
      <div class="delivery-detail__header">
        <title-variant-border :titleText="'Delivery Details'"></title-variant-border>
        <div>

        <input type="checkbox" id="checkbox" v-model="checkDropshipper" class="mr-0-5">
        <label for="checkbox">Send as dropshipper {{checkDropshipper}}</label>
        </div>
      </div>

      <form>
        <div class="delivery-detail__form grid">
          <div class="flex form-item">
            <input type="text" ref="phoneNumberCus" minlength="6" maxlength="20" v-model="phoneNumberCus" placeholder="Phone Number" />
            <span v-if="msg.emailCus" style="color:red; font-size:.8rem;">{{ msg.emailCus}}</span>
            <input
            ref="emailCus"
              type="email"
              v-model="emailCus"
              placeholder="Email"
            />
            <textarea
            ref="addressCus"
            maxlength="120"
              name="textarea"
              v-model="addressCus"
              cols="30"
              rows="10"
              placeholder="Delivery address"
            ></textarea>
          </div>
          <div class="flex form-item">
            <input
              :disabled="!checkDropshipper"
              type="text"
              v-model="dropshipperName"
              id=""
              placeholder="Dropshipper name"
            />
            <input
              :disabled="!checkDropshipper"
              minlength="6"
              maxlength="20"
              ref="dropshipperPhoneNumber"
              type="text"
              v-model="dropshipperPhoneNumber"
              placeholder="Dropshipper phone number"
            />
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
      <div class="container flex" style="justify-content: center">
        <div class="delivery-detail-finish flex">
          <title-variant-border :titleText="'Thank You'"></title-variant-border>

          <div class="mt-1 mb-2">
            <p>Order ID: {{ orderID }}</p>
            <span
              >You order will be delivered {{ time }} with
              {{ deliveryMethod }}</span
            >
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
import TitleVariantBorder from "./elements/TitleVariantBorder.vue";
export default {
  data() {
    return {
      msg: [],
      checkDropshipperStatus: this.checkDropshipper,
    };
  },

  components: { TitleVariantBorder },
  props: {
    active: {
      type: Number,
      default: 1,
    },

    orderID: String,
    time: String,
    deliveryMethod: String,
  },

  computed: {
      phoneNumberCus: {
          get(){
              return this.$store.state.phoneNumberCus
          },
          set(value){
              this.$store.commit('setPhoneNumberCus', value)
          }
      },
      emailCus: {
          get(){
              return this.$store.state.emailCus
          },
          set(value){
              this.$store.commit('setEmailCus', value)
          }
      },
      addressCus: {
          get(){
              return this.$store.state.addressCus
          },
          set(value){
              this.$store.commit('setAddressCus', value)
          }
      },
      dropshipperName: {
          get(){
              return this.$store.state.dropshipperName
          },
          set(value){
              
              this.$store.commit('setDropshipperName', value)
          }
      },
      dropshipperPhoneNumber: {
          get(){
              return this.$store.state.dropshipperPhoneNumber
          },
          set(value){
              this.$store.commit('setDropshipperPhoneNumber', value)
          }
      },
      checkDropshipper: {
          get(){
              return this.$store.state.checkDropshipper
          },
          set(value){
              this.$store.commit('setCheckDropshipper', value)
          }
      },
  },

  watch: {
    emailCus(value) {
      // binding this to the data value in the email input
      this.emailCus = value;
      this.validateEmail(value);
    },
    phoneNumberCus(value){
        this.phoneNumberCus = value;
        this.validateNumberOnly(value, 'phoneNumberCus')
    },
    dropshipperPhoneNumber(value){
        this.dropshipperPhoneNumber = value;
        this.validateNumberOnly(value, 'dropshipperPhoneNumber')
    },
    addressCus(value){
      this.addressCus = value;
      if(this.addressCus){
        this.$refs.addressCus.style.border = '3px solid #99ca3c'
      }else{
        this.$refs.addressCus.style.border = '3px solid #ff4e00'
      }
    }
  },

  methods: {

    validateEmail(value) {
        let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
      if (emailValidation.test(value)) {
        this.$refs.emailCus.style.border = '3px solid #99ca3c'
        this.msg['emailCus'] = "";
      }
       else {
        this.$refs.emailCus.style.border = '3px solid #ff4e00'
        this.msg['emailCus'] = "Invalid Email Address";
        
        return 0;
      }
    },

    validateNumberOnly( value, refaes){
        // const prefix = value.substring(0, 2)
        const refName = refaes
        if(Number(value) && value.toString().length >= 6){
            this.$refs[refName].style.border = '3px solid #99ca3c';
        }else{
            this.$refs[refName].style.border = '3px solid #ff4e00';
        }
    }
  },
  updated(){
    if(!this.checkDropshipper){
       this.$store.commit('setDropshipperName', '');
       this.$store.commit('setDropshipperPhoneNumber', '');
       this.$store.commit('setDropshippingFee', 0);
    }
    
    if(this.checkDropshipper){
      this.$store.commit('setDropshippingFee', 5900);
    }


  }
};
</script>

<style lang="stylus">
.delivery-detail__header {
  display: flex;
  justify-content: space-between;
  align-items :center;
}

.delivery-detail__form {
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr;
  }
}

.delivery-detail-finish {
  min-height: 370px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 570px) {
    min-height: auto;
  }
}

.form-item {
  flex-direction: column;
}
</style>

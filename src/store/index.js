import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // next payment
    actived: 1,
    
    emailCus: '',
    emailCusIsValid: false,
    phoneNumberCus: '',
    phoneNumberCusIsValid: false,
    addressCus: '',
    addressCusIsValid: false,
    dropshipperName: '',
    dropshipperNameIsValid: false,
    dropshipperPhoneNumber: '',
    dropshipperPhoneNumberIsValid: false,

    checkDropshipper: false,
    dropshippingFee: 0,
    shipmentFee: 0,
    costTotal: 50000,
    total: 0,

    deliveryTime: 1,

    paymentMethods: [
      {
        id: 1,
        name: 'e-wallet'
      },
      {
        id: 2,
        name: 'Bank Transfer'
      },
      {
        id: 3,
        name: 'Virtual Account'
      },
    ],

    shipmentMethods: [
      {
        id: 1,
        name: 'GO-SEND',
        price: 15000
      },
      {
        id: 2,
        name: 'JNE',
        price: 9000
      },
      {
        id: 3,
        name: 'Personal Courier',
        price: 29000
      },
    ]


  },

  getters: {
    
  },

  mutations: {
    increment: (state) =>{
       state.actived++
    },

    setDropshippingFee: (state,payload) => {
      state.dropshippingFee = payload;
    },

    setShipmentFee: (state,payload) => {
      state.shipmentFee = payload;
    },

    setPhoneNumberCus: (state, payload) => {
      state.phoneNumberCus = payload
    },
    setAddressCus: (state, payload) => {
      state.addressCus = payload
    },
    setEmailCus: (state, payload) => {
      state.emailCus = payload
    },
    setDropshipperName: (state, payload) => {
      state.dropshipperName = payload
    },
    setDropshipperPhoneNumber: (state, payload) => {
      state.dropshipperPhoneNumber = payload
    },
    setDropshipperPhoneNumberValid: (state, payload) => {
      state.dropshipperPhoneNumberIsValid = payload
    },

    setCheckDropshipper: (state, paylaod) => {
      state.checkDropshipper = paylaod;
    }
  },
  actions: {},
  modules: {},
});

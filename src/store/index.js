import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // next payment
    actived: 1,
    
    dropshippingFee: 5900,
    costTotal:50000,
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
  mutations: {},
  actions: {},
  modules: {},
});

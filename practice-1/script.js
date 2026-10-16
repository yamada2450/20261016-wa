
Vue.createApp({
  data() {
    return {
      recommendedProducts: [
        {
          id: 1,
          name: "ワイヤレスイヤホン",
          price: 5980,
          description: "通勤や通学におすすめ",
          image: "https://placehold.co/400x300?text=Earphones"
        },
        {
          id: 2,
          name: "Bluetoothスピーカー",
          price: 3980,
          description: "持ち運びに便利",
          image: "https://placehold.co/400x300?text=Speaker"
        }
      ],
      products: [
        {
          id: 1,
          name: "ワイヤレスイヤホン",
          price: 5980,
          category: "オーディオ",
          image: "https://placehold.co/400x300?text=Earphones"
        },
        {
          id: 2,
          name: "Bluetoothスピーカー",
          price: 3980,
          category: "オーディオ",
          image: "https://placehold.co/400x300?text=Speaker"
        },
        {
          id: 3,
          name: "キーボード",
          price: 4480,
          category: "パソコン周辺機器",
          image: "https://placehold.co/400x300?text=Keyboard"
        },
        {
          id: 4,
          name: "マウス",
          price: 1980,
          category: "パソコン周辺機器",
          image: "https://placehold.co/400x300?text=Mouse"
        }
      ]
    };
  }
}).mount("#app");

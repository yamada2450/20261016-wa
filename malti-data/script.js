Vue.createApp({
  data() {
    return {
      japaneseFoods: [
        { name: "親子丼", price: 850 },
        { name: "天ぷら定食", price: 1200 },
        { name: "焼き魚定食", price: 1000 }
      ],
      westernFoods: [
        { name: "オムライス", price: 900 },
        { name: "ハンバーグ", price: 1100 },
        { name: "ナポリタン", price: 950 }
      ]
    };
  }
}).mount("#app");
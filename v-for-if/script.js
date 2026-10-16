Vue.createApp({
  data() {
    return {
	    products: [
            { id: 1, name: "ノート",stock: 1 },
            { id: 2, name: "ペン",stock: 0 },
            { id: 3, name: "消しゴム",stock: 5 },
            { id: 4, name: "定規",stock: 0 },
        ]
    };
  }
}).mount("#app");

Vue.createApp({
  data() {
    return {
      students: [
        { id: 1, name: "田中花子", score: 85 },
        { id: 2, name: "佐藤太郎", score: 52 },
        { id: 3, name: "鈴木美咲", score: 70 },
        { id: 4, name: "高橋健太", score: 45 },
        { id: 5, name: "伊藤さくら", score: 92 },
        { id: 6, name: "山本大輔", score: 60 }
      ]
    };
  }
}).mount("#app");
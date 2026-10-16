Vue.createApp({
  data() {
    return {
	    prefectures: [
            {
                name: "東京都",
                cities: ["新宿区","渋谷区","世田谷区"]
            },
            {
                name: "神奈川県",
                cities: ["横浜市","川崎市","相模原市"]
            },
            {
                name: "大阪府",
                cities: ["大阪市","堺市","高槻市"]
            }
        ]
    };
  }
}).mount("#app");
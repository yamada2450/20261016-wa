Vue.createApp({

    data() {
        return {
            prefectures: [
                {
                    name: "東京都",
                    cities: [
                        {
                            name: "新宿区",
                            towns: ["西新宿", "歌舞伎町"]
                        },
                        {
                            name: "渋谷区",
                            towns: ["渋谷", "恵比寿"]
                        },
                        {
                            name: "世田谷区",
                            towns: ["三軒茶屋", "下北沢"]
                        }
                    ]
                },
                {
                    name: "神奈川県",
                    cities: [
                        {
                            name: "横浜市",
                            towns: ["みなとみらい", "関内"]
                        },
                        {
                            name: "川崎市",
                            towns: ["川崎", "武蔵小杉"]
                        },
                        {
                            name: "相模原市",
                            towns: ["橋本", "相模大野"]
                        }
                    ]
                },
                {
                    name: "大阪府",
                    cities: [
                        {
                            name: "大阪市",
                            towns: ["梅田", "難波"]
                        },
                        {
                            name: "堺市",
                            towns: ["堺東", "鳳"]
                        },
                        {
                            name: "東大阪市",
                            towns: ["布施", "長田"]
                        }
                    ]
                }
            ]
        };
    }

}).mount("#app");

Vue.createApp({
  data() {
    return {
      genres: [
        {
          id: 1,
          name: "アクション",
          movies: [
            {
              id: 101,
              title: "スカイミッション",
              year: 2024,
              description: "世界を救うために戦うアクション映画。",
              image: "https://placehold.co/400x300?text=Action+1"
            },
            {
              id: 102,
              title: "最後のエージェント",
              year: 2023,
              description: "極秘任務に挑むスパイの物語。",
              image: "https://placehold.co/400x300?text=Action+2"
            }
          ]
        },
        {
          id: 2,
          name: "コメディ",
          movies: [
            {
              id: 201,
              title: "ドタバタ家族旅行",
              year: 2024,
              description: "家族旅行で巻き起こる騒動を描く。",
              image: "https://placehold.co/400x300?text=Comedy+1"
            },
            {
              id: 202,
              title: "となりの天才",
              year: 2022,
              description: "個性的な隣人との日常を描くコメディ。",
              image: "https://placehold.co/400x300?text=Comedy+2"
            }
          ]
        },
        {
          id: 3,
          name: "SF",
          movies: [
            {
              id: 301,
              title: "未来都市2099",
              year: 2025,
              description: "未来の都市を舞台にしたSF作品。",
              image: "https://placehold.co/400x300?text=Sci-Fi+1"
            },
            {
              id: 302,
              title: "星々の彼方へ",
              year: 2023,
              description: "未知の惑星を目指す宇宙探査の物語。",
              image: "https://placehold.co/400x300?text=Sci-Fi+2"
            }
          ]
        }
      ]
    };
  }
}).mount("#app");
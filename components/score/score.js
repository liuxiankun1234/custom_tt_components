// /Users/zy/works/dy_miniapp_publish/components/score/score.js
Component({
  data: {
    scoreList: []
  },
  properties: {
    score: {
      type: Number,
      value: 0
    }
  },
  created() {
    this.initScoreList();
    this.updateScoreList();
  },
  methods: {
    updateScoreList() {
      let {
        score,
        scoreList
      } = this.data;

      // score [0 10]
      score = Math.min(Math.max(0, score), 10)
      // 取整
      score = Math.ceil(score)
      let progress = 0;
      for(var scoreIndex = 0; scoreIndex < score; scoreIndex++) {
        // 奇数
        if(!(scoreIndex % 2)) {
          scoreList[progress].class = 'harf'
        }else{
          scoreList[progress++].class = 'active'
        }
      }

      this.setData({
        scoreList
      })
    },
    initScoreList() {
      const scoreLength = 5;

      this.setData({
        scoreList: Array.from({length: scoreLength}).map(() => ({class: ''}))
      })
    }
  }
})
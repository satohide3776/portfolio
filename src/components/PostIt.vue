<template> 
  <div>
    <p>佐藤秀顕と申します。</p>
    <p>中学・高校の教員の経験を生かし、法人個人を問わずIT研修講師をしつつ、</p>
    <p>Web系のエンジニアとして転職活動をしています。</p>
    <p>システム開発系はもちろん、ビジネスマナーからDXやBPRといったビジネスアーキテクトまで、<br>
    今まで幅広く研修を実施して参りました。</p>
    <p>吹奏楽、アメリカンフットボール、散歩、ITと、<br>
    気になることは片っ端から取り組んでいきます。
    </p>
  </div>
</template>

<script>
export default {
  props: {
    skillTitle:{
      type:String,
    }
  },
}
</script>

<style lang="scss" scoped>
  div{
    width: 60%;
    position: relative;
    padding: 1.5vw 1vw;
    border-right: 27px solid #2589d0;
    background-color: #f5f5f5;
    &::before{
      position: absolute;
      bottom: 2px;
      right: -20px;
      z-index: -1;
      transform: rotate(2deg);
      width: 100%;
      height: 50%;
      background-color: #4d4d4d;
      content: "";
      filter: blur(4px);
    }
    p{
      font-size: max(1vw,12px);
    }
  }
</style>
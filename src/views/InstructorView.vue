<template>
  <div class="instructor">
    <h1>Education&Instruction</h1>
    <section class="education">
      <div class="education_contents">
        <ul class="education_lists">
          <li>
            <h2>教える人は学び続ける人</h2>
            <div>
              <p>世の中が変われば人も変わっていきます。</p>
              <p>ITによって進化する世界に追いつき、発信するには、<br>
              自らが学び続けることは必要不可欠です。</p>
              <p>子供に向き合う教員も、大人に教えるIT研修講師も、<br>
              その本質はずっと変わっていません。</p>
              <p>私が誰にも負けない強みの一つです。</p>
            </div>
          </li>
          <li>
            <h2>相手の立場に立った提案</h2>
            <div>
              <p>どんな人でも、得意不得意があります。</p>
              <p>講師としての責任は、その凹凸に合わせて、<br>
              柔軟に自らを変化させ、適応させることです。</p>
              <p>授業や研修の実施はもちろん、<br>
              生徒や部下のマネジメントでも同じです。</p>
              <p>そこに大人も子どもも関係ありません。</p>                  
            </div>
          </li>
          <li>
            <h2>信じぬく関係構築力</h2>
            <div>
              <p>VUCAの時代と言われ、先が見えない世の中になりました。</p>
              <p>そんな中でも「人は一人では生きられない」ということは正しいと信じています。</p>
              <p>教員時代には、どの生徒とも関係を切らさないために、<br>
              自分の担任学級の出席してくれた生徒全員に必ず毎日声をかけました。</p>
              <p>また、不登校の生徒に対しても週に一回は家庭訪問を行い、<br>
              生徒本人のみならず、保護者との関係性も切らさずに学級運営を行いました。</p>                  
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="instruction">
      <h1>Works</h1>
      <ul class="work_lists">
        <li>
          <dl>
            <dt>PHPフルスタック研修</dt>
            <div>
              <dd>受講生属性：新入社員</dd>
              <dd>受講期間：3か月</dd>
              <dd>受講内容：</dd>
              <dd>ビジネスマナー、ITリテラシー</dd>
              <dd>HTML、CSS、JS、Vue.js</dd>
              <dd>PHP、Git、Laravel</dd>
              <dd>RDBMS、Linuxサーバー運用、AWS</dd>
            </div>
          </dl>
        </li>
        <li>
          <dl>
            <dt>C#Web開発研修</dt>
            <div>
              <dd>受講生属性：既存社員</dd>
              <dd>受講期間：2週間</dd>
              <dd>受講内容：</dd>
              <dd>C#基礎文法、ASP.NET CORE MVC</dd>
            </div>
          </dl>            
        </li>
        <li>
          <dl>
            <dt>DX⇒業務改善研修</dt>
            <div>
              <dd>受講生属性：マネジメントポジション</dd>
              <dd>受講期間：1週間</dd>
              <dd>受講内容：</dd>
              <dd>DX基礎、BPR、Excelデータ分析</dd>
            </div>
          </dl>            
        </li>
        <li>
          <dl>
            <dt>全社員向けITリテラシー研修</dt>
            <div>
              <dd>受講生属性：全社員(200人以上参加)</dd>
              <dd>受講期間：1日</dd>
              <dd>受講内容：</dd>
              <dd>ハードウェアとソフトウェア</dd>
              <dd>ネットワーク基礎</dd>
              <dd>クライアントサーバーシステム</dd>
              <dd>サイバーセキュリティ</dd>
            </div>
          </dl>            
        </li>
      </ul>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.instructor{
  width: 100%;
  h1{
    margin-bottom: 1.5vw;
  }
  .education{
    margin-bottom: 3vw;
    .education_contents{
      .education_lists{
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1000px){
          flex-direction: column;
          padding-top: 10vw;
          width: 90%;
          margin: 0 auto;
          gap: 25px;
        }
        h2{
          color: #2c3e50;
          background-color: #83b2d4;
          padding: .5vw;
          position: relative;
          width: fit-content;
          margin-bottom: .5vw;
          font-size: max(1.2vw,14px);
          &::before{
            position: absolute;
            bottom: -1px;
            right: 9px;
            z-index: -1;
            transform: rotate(5deg);
            width: 70%;
            height: 50%;
            background-color: #4d4d4d;
            content: "";
            filter: blur(4px);
          }
        }
        div{
          position: relative;
          padding: 1.5vw 1vw;
          border-right: 27px solid #2589d0;
          background-color: #f5f5f5;
          height: fit-content;
          font-size: max(.8vw,12px);
          &::before{
            position: absolute;
            bottom: 2px;
            right: -20px;
            z-index: -1;
            transform: rotate(5deg);
            width: 100%;
            height: 50%;
            background-color: #4d4d4d;
            content: "";
            filter: blur(4px);
          }
        }
      }
    }
  }
  .instruction{
    @media screen and (max-width: 1000px){
      margin-bottom: 30vw;
    }
    .work_lists{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 1000px){
        flex-direction: column;
        padding-top: 5vw;
        width: 90%;
        margin: 0 auto;
        gap: 25px;
      }      
      dl{
        dt{
          color: #2c3e50;
          background-color: #83b2d4;
          padding: .5vw;
          position: relative;
          width: fit-content;
          margin-bottom: .5vw;
          font-weight: bold;
          font-size: max(1.2vw,14px);
          &::before{
            position: absolute;
            bottom: -1px;
            right: 9px;
            z-index: -1;
            transform: rotate(5deg);
            width: 70%;
            height: 50%;
            background-color: #4d4d4d;
            content: "";
            filter: blur(4px);
          }
        }
        div{
          position: relative;
          border-right: 27px solid #2589d0;
          background-color: #f5f5f5;
          height: fit-content;
          font-size: max(.8vw,12px);
          padding: .5vw;
          &::before{
            position: absolute;
            bottom: 2px;
            right: -20px;
            z-index: -1;
            transform: rotate(5deg);
            width: 100%;
            height: 50%;
            background-color: #4d4d4d;
            content: "";
            filter: blur(4px);
          }
        }        
      }
    }
  }
}

</style>
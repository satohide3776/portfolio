<template>
  <div>
    <LoadingSpinner v-if="showLoading" />
  </div>
  <main>
    <header>
      <nav>
        <ul class="postItMenu">
            <li><router-link to="/"><font-awesome-icon icon="fa-solid fa-house" />Home</router-link></li>
            <li><router-link to="/profile"><font-awesome-icon icon="fa-solid fa-address-card" />Profile</router-link></li>
            <li><router-link to="/instructor"><font-awesome-icon icon="fa-solid fa-person-chalkboard" />Instructor</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </main>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      showLoading: false
    };
  },
  created() {
    // セッションが始まったときにローディングアニメーションを表示するかどうか
    if (!sessionStorage.getItem("loadingShown")) {
      this.showLoading = true;
      sessionStorage.setItem("loadingShown", "true"); // ローディング表示済みフラグを設定
      setTimeout(() => {
        document.querySelector(".bg").classList.add("off");
        document.querySelector(".loading-spinner").classList.add("off")
        setTimeout(() => {
          this.showLoading = false; // ローディングアニメーションを非表示にする
        }, 1000);
      }, 3000); // 3秒後にローディングを非表示
    }
  }
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
h1{
  font-size: max(3vw,40px);
  line-height: 1;
  color: #2c3e50;
  background-color: #42b983;
  width: fit-content;
  padding: .5vw;
  position: relative;
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
  @media screen and (max-width: 1000px){
    font-size: 8vw;
    margin: 15vw 0 0 2.5vw;
    padding: 1vw;
    transform: rotate(-10deg);
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
    &::before{
      background-color: transparent;
    }
  }
}
h2{
  font-size: max(1.5vw,20px);
}
ul,li{
  list-style: none;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px){
    background-image: url("./assets/wood_texture.png");
    background-size: 10%;
    background-repeat: repeat;
  }

}

main{
  display: flex;
  position: relative;
  z-index: 1;
  flex: 1;
  width: 95%;
  box-sizing: border-box;
  background-image: url("./assets/corkboard.jpg");
  background-size: contain;
  background-repeat: repeat;
  box-shadow: inset -5px -5px 10px 0px rgba(0, 0, 0,0.5), inset 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 1000px){
    margin: 2.5%;
    padding: 2%;
  }
  @media screen and (max-width: 1000px){
    width: 100%;
    max-width: unset;
    min-width: unset;
  }
  header{
    position: absolute;
    top: 2vw;
    right: 30px;
    z-index: 1;
    @media screen and (max-width: 1000px){
      width: 100%;
      top: auto;
      right: auto;
      bottom: 0;
      background-color: ivory;
      position: fixed;
    }
    nav{
    @media screen and (max-width: 1000px){
      width: 100%;
      padding: 0;
    }
      ul{
        display: flex;
        gap: 50px;
      @media screen and (max-width: 1000px){
        padding: 0;
        gap: 0;
        justify-content: space-around;
        align-items: center;
        li{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          a{
            padding: 30px 0;
            font-size: 4vw;
          }
        }
      }
        a{
          display: flex;
          flex-direction: column;
          font-weight: bold;
          color: #2c3e50;
          font-size: 1.1vw;
          &.router-link-exact-active {
            color: #42b983;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    .postItMenu{
      position: relative;
      padding: 1rem 1.5rem;
      border-right: 27px solid #42b983;
      background-color: #f5f5f5;
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

</style>


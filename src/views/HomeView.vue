<template>
  <div class="home">
    <h1>Sato Hideaki's Portfolio</h1>
    <div class="postIt">
      <img src="/portforio/assets/home.png" alt="">
    </div>
    <div class="leftPostIt">
      <router-link to="/profile"><font-awesome-icon icon="fa-solid fa-laptop-code" />click here!!</router-link>
    </div>
    <div class="rightPostIt">
      <router-link to="/instructor"><font-awesome-icon icon="fa-solid fa-school" />click here!!</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  .postIt{
    width: fit-content;
    margin: auto;
    color: #2c3e50;
    position: relative;
    border-right: 27px solid #2589d0;
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
      margin-top: calc((100vh - (4vw + 30px + 30px)) / 8);
    }
    img{
      width: 40vw;
      height: 100%;
      @media screen and (max-width: 1000px){
        width: min(85vw,500px);
      }
    }
  }
  .leftPostIt{
    position: absolute;
    top: 25%;
    left: 5%;
    width: fit-content;
    background-color: #83b2d4;
    transform: rotate(15deg);
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 1000px){
      top: auto;
      bottom: 30%;
    }
    a{
      padding: 1.5vw 1vw;
      display: block;
      color: #2c3e50;
      transition: .8s;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .8vw;
      @media screen and (max-width: 1000px){
        align-items: center;
        padding: 3vw 2vw;
      }
      &:hover{
        opacity: .7;
      }
      svg{
        font-size: 10vw;
        @media screen and (max-width: 1000px){
          font-size: 12.5vw;
        }
      }
    }
  }
  .rightPostIt{
    position: absolute;
    bottom: 20%;
    right: 5%;
    width: fit-content;
    background-color: #83b2d4;
    transform: rotate(-15deg);
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);;
    a{
      padding: 1.5vw 1vw;
      display: block;
      color: #2c3e50;
      transition: .8s;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .8vw;
      @media screen and (max-width: 1000px){
        align-items: center;
        padding: 3vw 2vw;
      }
      &:hover{
        opacity: .6;
      }
      svg{
        font-size: 6vw;
        @media screen and (max-width: 1000px){
          font-size: 12.5vw;
        }
      }
    }
  }
}
</style>

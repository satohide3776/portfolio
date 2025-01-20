<template>
  <div class="profile">
    <h1>Introduction&Skills</h1>
    <div class="container">
      <section class="introduction">
        <div class="introduction_contents">
          <PostIt></PostIt>
          <div class="introduction_image"><img src="../assets/face.webp" alt=""></div>
        </div>
      </section>
      <section class="skills">
        <ul class="skillsList">
          <PostItList skillTitle="Front End" class="frontEnd"></PostItList>
          <PostItList skillTitle="Back End" class="backEnd"></PostItList>
          <PostItList skillTitle="Infrastructure" class="infrastructure"></PostItList>
          <PostItList skillTitle="Design" class="design"></PostItList>
          <PostItList skillTitle="CMS" class="cms"></PostItList>
          <PostItList skillTitle="Other" class="other"></PostItList>
        </ul>
        <div class="profile_image">
          <img src="../assets/sky.jpg" alt="">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PostItList from '../components/PostItList.vue'
import PostIt from '../components/PostIt.vue'

export default {
  components: {
    PostItList,
    PostIt,
  },
}
</script>

<style scoped lang="scss">
.profile{
  width: 100%;
  h1{
    margin-bottom: 1.5vw;
  }
  .container{
    flex: 1;
    display: flex;
    flex-direction: column;
    .introduction{
      margin-bottom: 2vw;
      @media screen and (max-width: 1000px){
        margin-bottom: 10vw;
      }
      .introduction_contents{
        display: flex;
        @media screen and (max-width: 1000px){
          flex-direction: column-reverse;
          align-items: center;
        }
        .introduction_image{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;
          @media screen and (max-width: 1000px){
            margin-bottom: 3vw;
          }
          img{
            width: 40%;
            border-radius: 200px;
            @media screen and (max-width: 1000px){
              width: 90%;
            }
          }
        }
      }
    }
    .skills{
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      @media screen and (max-width: 1000px){
        margin-bottom: 30vw;
      }
      .skillsList{
        flex: 1;
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
        @media screen and (max-width: 1000px){
          width: 90%;
          margin: 0 auto 10vw;
          gap: 25px 50px;
        }
      }
    }
  }
}
.profile_image{
  position: absolute;
  bottom: -1vw;
  right: 50px;
  transform: rotate(-10deg);
  padding:.3vw;
  background-color: ivory;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
  height: 50%;
  width: 20%;
  @media screen and (max-width: 1000px){
    position: initial;
    bottom: initial;
    right: initial;
    transform: rotate(0);
    width: 90%;
    margin: 0 auto;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
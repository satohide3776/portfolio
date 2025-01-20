<template>
  <li>
    <h2>{{skillTitle}}</h2>
    <dl>
        <div v-for="(skill, skillIndex) in skills[skillTitle]" :key="skillIndex">
          <dt>{{skillIndex}}</dt>
          <dd v-for="(des, desIndex) in skill" :key="desIndex">{{des}}</dd>
        </div>
    </dl>
  </li>
</template>

<script>
export default {
  props: {
    skillTitle:{
      type:String,
    }
  },
  data() {
    return {
      skills: {
        "Front End": {
          "HTML": [],
          "CSS": ["SCSS", "Bootstrap", "Tailwind CSS"],
          "JavaScript": ["jQuery", "Vue.js", "React(Next.js)"],
        },
        "Back End": {
          "PHP": ["Laravel"],
          "Python": ["Django"],
          "C#": ["ASP.NET CORE"],
          "Java": ["Spring boot"],
        },
        "Infrastructure": {
          "RDBMS": ["MySQL","PostgreSQL"],
          "Linux": ["Ubuntu","RockyLinux"],
          "AWS": [],
          "Docker": [],
        },
        "Design": {
          "Adobe": ["Photoshop","Illustrator","AdobeXD"],
          "Figma": [],
        },
        "CMS": {
          "WordPress": [],
          "MovableType": [],
        },
        "Other": {
          "VBA": [],
          "Share Point": [],
        },
      }
    };
  },
}
</script>

<style lang="scss" scoped>
  li{
    h2{
      color: #2c3e50;
      background-color: #83b2d4;
      padding: .5vw;
      position: relative;
      margin-bottom: 10px;
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
    dl{
      position: relative;
      padding: 1.5vw 1vw;
      border-right: 27px solid #2589d0;
      background-color: #f5f5f5;
      height: fit-content;
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
    dt{
      font-weight: bold;
      font-size: max(1.2vw,14px);
    }
    dd{
      padding-left: 20px;
      font-size: max(1vw,12px);
    }
  }
</style>
<script>
import ButtonComponent from "@/components/reusables/ButtonComponent.vue";
import Icons from "@/components/reusables/IconsHub.vue";
import ProgrammingTools from "@/components/ProgrammingTools.vue";

export default {
  name: "SectionThree",
  components: {ProgrammingTools, Icons, ButtonComponent},

  data() {
    return {
      cards: [
        { image: require('@/assets/quick-talk-img.png')},
        { image: require('@/assets/hizaras-img.png') },
        { image: require('@/assets/nomadicpod-image.png')},

         ]
    };
  },


  mounted() {
    this.addScrollAnimation();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },

  methods: {
    handleScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated','animate__fadeInUp', 'animate__slideInLeft','animate__slideInRight');
        }
      });
    },
    addScrollAnimation(){
      const options = {
        threshold: 0.5
      };
      const observer = new IntersectionObserver(this.handleScroll, options);
      document.querySelectorAll('.card,.subhead-txt').forEach(item => {
        observer.observe(item);
      });
    }
  }
}
</script>

<template>
  <div class="section-sculptor">
    <p class="head-txt mx-10 pt-36">Projects</p>
    <p class="sub-txt mx-10 pt-10">Here are some of the projects I've worked on.</p>
<!--    <button-component button-text="Book Now" width="300px" depressed class="my-14 mx-10 button" outlined/>-->

    <div class="cards-container">
      <v-card
          class="mx-auto my-8 card animate__animated animate__fadeInUp"
          max-width="364"
          v-for="(card, index) in cards" :key="index"
      >
        <img :src="card.image" alt="Project Image" class="card-image"/>
      </v-card>

    </div>

    <p class="subhead-txt py-32 animate__animated animate__slideInRight">Programming Tools</p>
    <ProgrammingTools/>
  </div>
</template>

<style scoped lang="scss">
.section-sculptor {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 100px 30px;
  min-height: 60vh;
  background: #0732ef;
}
.head-txt{
  font-family: "Raleway", sans-serif !important;
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
}
.sub-txt{
  font-family: Raleway,sans-serif !important;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;
  width: 100%;
  max-width: 600px;
}

.button{
  font-family: Raleway,sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  background: #0732ef;
  width: 100%;
  max-width: 300px;
}
.button:hover{
  background: #ffffff;
  color: #0732ef;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 364px;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.card-image {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.subhead-txt {
  font-family: "Raleway", sans-serif !important;
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 60px; // Adjusts for iPad and similar screens
  }

  @media screen and (max-width: 768px) {
    font-size: 45px; // Adjusts for smaller tablets and large phones
  }

  @media screen and (max-width: 480px) {
    font-size: 35px; // Adjusts for mobile screens
  }
}

</style>

<!--<template>-->
<!--<div class="section-sculptor">-->
<!--  <p class="head-txt mx-10 pt-36">Our Services</p>-->
<!--  <p class="sub-txt mx-10 pt-10">I am a paragraph. Click here to add your own text and edit me.-->
<!--    I'm a great place for you to tell a story.-->
<!--  </p>-->
<!--  <button-component button-text="Book Now" width="300px" depressed class="my-14 mx-10 button" outlined/>-->

<!--  <div class="cards-container">-->
<!--    <v-card-->
<!--      class="mx-auto my-8 card animate__animated animate__fadeInUp"-->
<!--      max-width="364"-->
<!--      v-for="(card, index) in 4" :key="index"-->
<!--  >-->
<!--    I'm a paragraph. Click here to add your own text and edit me.-->
<!--    I’m a great place for you to tell a story and let your users-->
<!--    know a little more about you.-->
<!--  </v-card>-->
<!--  </div>-->

<!--  <p class="subhead-txt py-32 animate__animated animate__slideInRight">Boosting Businesses</p>-->
<!--  <BusinessStats/>-->
<!--</div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--.section-sculptor {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: left;-->
<!--  padding-bottom: 100px;-->
<!--  min-height: 60vh;-->
<!--  padding-top: 100px;-->
<!--  background: #0732ef;-->
<!--}-->
<!--.head-txt{-->
<!--    font-family: "Raleway", sans-serif !important;-->
<!--    font-size: 75px;-->
<!--    font-style: normal;-->
<!--    font-weight: 600;-->
<!--    line-height: 38px;-->
<!--    letter-spacing: 0;-->
<!--    text-align: left;-->
<!--    color: #ffffff;-->
<!--}-->
<!--.sub-txt{-->
<!--  font-family: Raleway,sans-serif !important;-->
<!--  font-size: 20px;-->
<!--  font-style: normal;-->
<!--  font-weight: 400;-->
<!--  line-height: 38px;-->
<!--  letter-spacing: 0;-->
<!--  text-align: left;-->
<!--  color: #ffffff;-->
<!--  width: 33%;-->
<!--}-->

<!--.button{-->
<!--  font-family: Raleway,sans-serif;-->
<!--  font-weight: 400;-->
<!--  font-size: 20px;-->
<!--  color: #ffffff;-->
<!--  background: #0732ef;-->
<!--}-->
<!--.button:hover{-->
<!--  font-family: Raleway,sans-serif;-->
<!--  font-weight: 400;-->
<!--  font-size: 20px;-->
<!--  background: #ffffff;-->
<!--  color: #0732ef;-->
<!--}-->

<!--.card,-->
<!--.card * {-->
<!--  color: #ffffff !important;-->
<!--  background: #0732ef !important;-->
<!--  border: 1px solid #ffffff;-->
<!--  font-family: Raleway,sans-serif;-->
<!--  font-weight: 400;-->
<!--  font-size: 25px;-->
<!--  padding: 25px;-->
<!--  flex: 1 0 45%; /* Adjust this value to change the width of the cards */-->
<!--  max-width: 364px;-->
<!--}-->
<!--.cards-container {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--  justify-content: space-around;-->
<!--}-->
<!--.animate__animated.animate__fadeInUp {-->
<!--  animation-duration: 3s; /* Adjust the duration to slow down the animation */-->
<!--}-->
<!--.animate__animated.animate__SlideInRight {-->
<!--  animation-duration: 3s; /* Adjust the duration to slow down the animation */-->
<!--}-->
<!--.subhead-txt{-->
<!--  font-family: "Raleway", sans-serif !important;-->
<!--  font-size: 75px;-->
<!--  font-style: normal;-->
<!--  font-weight: 600;-->
<!--  line-height: 38px;-->
<!--  letter-spacing: 0;-->
<!--  text-align: center;-->
<!--  color: #ffffff;-->
<!--}-->
<!--</style>-->
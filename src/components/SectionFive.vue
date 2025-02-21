<script>
import ProcessStep from "@/components/ProcessStep.vue";

export default {
  name: "SectionFive",
  components: {ProcessStep},
  data() {
    return {
      reviews: [
        {
          name: "Saheed Ajayi",
          comment: "Glory is a highly skilled developer with an incredible attention to detail. I highly recommend her!",
          image: "https://randomuser.me/api/portraits/men/34.jpg"
        },
    {
          name: "Blessing Kelechi",
          comment: "Glory’s work is simply outstanding! Her expertise in frontend and backend development is evident in the quality of his projects. ",
          image: "https://randomuser.me/api/portraits/men/81.jpg"
        },
        {
          name: "Christian Chibuzor",
          comment: "Glory is a problem-solver at heart. Her deep understanding of JavaScript, React, and Node.js allows her to build top-notch applications.",
          image: "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ],
      steps: [
        { title: 'Analysis & Research', description: 'Finding unique challenges and opportunities for growth' },
        { title: 'Strategy', description: 'Crafting tailored solutions that align with your core objectives' },
        { title: 'Execution', description: 'Creating impactful, lasting results' },
        { title: 'Ongoing Support', description: 'Monitoring and providing support as needed' }
      ],
      rating: 5,
    };
  }
}
</script>

<template>
<div class="section-sculptor">
<!--<div class="mx-40">-->
<!--  <p class="head-txt my-12 fade-in">Process</p>-->
<!--  <p class="sub-txt pb-20 fade-in">The simple method behind our success</p>-->
<!--</div>-->
<!--  <div class="steps-container">-->
<!--    <div class="mt-20 step-item" v-for="(step, index) in steps" :key="index">-->
<!--  <process-step-->
<!--      :stepNumber="index + 1"-->
<!--      :title="step.title"-->
<!--      :description="step.description"-->
<!--  />-->
<!--      <hr class="divider" v-if="index < steps.length - 1">-->
<!--    </div>-->
<!--  </div>-->

  <div class="rating-section mx-40  ">
    <p class="head-txt fade-in">Reviews</p>
    <div class="avatar-block fade-in mt-16" >
      <div class="avatar-item" v-for="(review, index) in reviews" :key="index">
        <v-avatar size="60">
          <v-img :alt="review.name" :src="review.image"></v-img>
        </v-avatar>
        <div>
          <v-rating
              v-model="rating"
              color="#0732ef"
              readonly
              size="20"
              dense="compact"
              class="my-5"
          ></v-rating>
          <p class="user-comment mx-5">{{ review.comment }}</p>
          <p class="user-name">{{ review.name }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.section-sculptor {
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  padding-top: 17rem;
  width: 100%;
  background: #bcc5f2;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;

  @media screen and (max-width: 1024px) {
    padding-top: 10rem;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media screen and (max-width: 768px) {
    padding-top: 7rem;
    padding-left: 3%;
    padding-right: 3%;
  }
}

.head-txt {
  font-family: "Raleway", sans-serif !important;
  font-size: 70px;
  font-weight: 600;
  line-height: 38px;
  text-align: left;
  color: #0732ef;

  @media screen and (max-width: 1024px) {
    font-size: 55px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
}

.sub-txt {
  font-family: "Raleway", sans-serif !important;
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
  text-align: left;
  color: #0732ef;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
}

.divider {
  border: none;
  height: 1px;
  background-color: #0732ef;
  width: 100%;
}

.steps-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10%;

  @media screen and (max-width: 1024px) {
    padding-left: 5%;
  }

  @media screen and (max-width: 768px) {
    padding-left: 3%;
  }
}

.step-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.avatar-block {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
}

.avatar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}

.user-name {
  font-family: "Raleway", sans-serif !important;
  font-size: 20px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  color: #0732ef;
}

.user-comment {
  font-family: "Raleway", sans-serif !important;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: #0732ef;


  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

</style>
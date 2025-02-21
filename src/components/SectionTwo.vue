<script>
import ButtonComponent from "@/components/reusables/ButtonComponent.vue";

export default {
  name: "SectionTwo",
  components: { ButtonComponent },
  mounted() {
    this.addFadeInEffect();
  },
  methods: {
    addFadeInEffect() {
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              }
            });
          },
          { threshold: 0.3 }
      );
      document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    },
  },
};
</script>

<template>
  <div class="section-sculptor flex flex-col lg:flex-row items-center">
    <!-- Text Content -->
    <section class="text-container mx-16 px-4 md:px-10 lg:px-16 w-full lg:w-1/2 fade-in">
      <p class="head-txt">My Journey in Tech</p>
<!--      <p class="sub-txt pt-6 md:pt-10">-->
<!--        Software Engineer-->
<!--      </p>-->
      <p class="paragraph">
        My name is Glory Ihueze, and I am a dedicated software developer with
        three years of experience in building scalable and efficient web applications.
        With a background in Sociology and a diploma in Software Engineering, I blend
        problem-solving skills with technology to create impactful solutions.
        Beyond coding, I am passionate about teaching and mentoring aspiring developers.
      </p>
<!--      <button-component-->
<!--          button-text="Learn More"-->
<!--          is-outlined-->
<!--          width="250px"-->
<!--          depressed-->
<!--          class="btn mt-8 md:mt-14"-->
<!--      />-->
    </section>

    <!-- Image Section -->
    <div class="image-container w-full lg:w-1/2 flex justify-center lg:justify-end fade-in">
      <img
          src="@/assets/blank-bg.png"
          alt="Glory Ihueze"
          class="image-on-top "
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-sculptor {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 50px 20px;
  background: #bcc5f2;
  flex-wrap: wrap;
}

.text-container {
  width: 100%;
  max-width: 650px;
  text-align: left;
}

.head-txt {
  font-size: 2rem;
  font-weight: 600;
  color: #0732ef;
  line-height: 1.2;
}

.sub-txt {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0732ef;
}

.paragraph {
  font-size: 1rem;
  font-weight: 400;
  color: #0732ef;
  line-height: 1.6;
}

.image-container {
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
}

.image-on-top {
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  object-fit: cover;
}

/* Fade-in Animation */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Text Scaling */
@media (min-width: 768px) {
  .head-txt {
    font-size: 2.5rem;
  }
  .sub-txt {
    font-size: 1.8rem;
  }
  .paragraph {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .section-sculptor {
    flex-direction: column;
    text-align: center;
  }
  .text-container {
    text-align: center;
  }
}
</style>



<!--<template>-->
<!--  <div class="section-sculptor">-->
<!--    <section class="mx-16">-->
<!--      <p class="head-txt">The Journey to Rises</p>-->
<!--      <div class="text-container">-->
<!--        <p class="sub-txt pt-10">-->
<!--          How we rose up to become leaders in the consulting industry-->
<!--        </p>-->
<!--        <p class="paragraph">-->
<!--          I am a paragraph. Click here to add your own text and edit me. It's-->
<!--          easy. Just click "Edit Text" or double click to add your own content-->
<!--          and make changes to the font.-->
<!--        </p>-->
<!--      </div>-->
<!--      <button-component-->
<!--        button-text="About Us"-->
<!--        is-outlined-->
<!--        width="300px"-->
<!--        depressed-->
<!--        class="btn my-14"-->
<!--      />-->
<!--    </section>-->
<!--    <div class="image-container">-->
<!--      <img-->
<!--        src="@/assets/image 2.png"-->
<!--        alt="Image"-->
<!--        class="image-on-top fade-in"-->
<!--      />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--.section-sculptor {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: left;-->
<!--  min-height: 60vh;-->
<!--  padding: 100px 30px;-->
<!--  background: #bcc5f2;-->
<!--}-->
<!--.head-txt {-->
<!--  font-family: "Raleway", sans-serif !important;-->
<!--  font-size: 75px;-->
<!--  font-style: normal;-->
<!--  font-weight: 600;-->
<!--  line-height: 38px;-->
<!--  letter-spacing: 0;-->
<!--  text-align: left;-->
<!--  color: #0732ef;-->
<!--  width: 100%;-->
<!--}-->
<!--.sub-txt {-->
<!--  font-family: Raleway, sans-serif;-->
<!--  font-size: 24px;-->
<!--  font-style: normal;-->
<!--  font-weight: 600;-->
<!--  line-height: 38px;-->
<!--  letter-spacing: 0;-->
<!--  text-align: left;-->
<!--  color: #0732ef;-->
<!--}-->
<!--.paragraph {-->
<!--  font-family: Raleway, sans-serif;-->
<!--  font-size: 20px;-->
<!--  font-style: normal;-->
<!--  font-weight: 400;-->
<!--  line-height: 38px;-->
<!--  letter-spacing: 0;-->
<!--  text-align: left;-->
<!--  color: #0732ef;-->
<!--  width: 650px;-->
<!--}-->
<!--.image-container {-->
<!--  position: relative;-->
<!--  width: 40%;-->
<!--  max-width: 40%;-->
<!--}-->

<!--.image-on-top {-->
<!--  position: relative;-->
<!--  width: 100%;-->
<!--  max-width: 100%;-->
<!--  display: block;-->
<!--  z-index: 1;-->
<!--  border-radius: 20px;-->
<!--  top: 15rem;-->
<!--}-->
<!--.theme--light.v-btn.v-btn--has-bg {-->
<!--  background-color: #bcc5f2;-->
<!--}-->
<!--.theme--light.v-btn.v-btn--has-bg:hover {-->
<!--  background: #0732ef;-->
<!--  color: #ffffff;-->
<!--}-->
<!--.btn {-->
<!--  border: solid 1px #0732ef;-->
<!--  font-family: Raleway, sans-serif;-->
<!--  font-weight: 100;-->
<!--  font-size: 18px;-->
<!--  color: #0732ef;-->
<!--}-->
<!--.fade-in {-->
<!--  opacity: 0;-->
<!--  transform: translateY(100px);-->
<!--  transition: opacity 2s ease-out, transform 2s ease-out;-->
<!--}-->

<!--.fade-in.active {-->
<!--  opacity: 1;-->
<!--  transform: translateY(0);-->
<!--}-->
<!--//.btn:hover{-->
<!--//  background: #0732ef;-->
<!--//  color: #ffffff;-->
<!--//}-->
<!--</style>-->

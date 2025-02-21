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
    <section class="text-container  lg:px-16 w-full lg:w-1/2 fade-in">
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
          class="image-on-top"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-sculptor {
  display: flex;
  justify-content: center; /* Centers children horizontally */
  align-items: center; /* Centers children vertically */
  min-height: 60vh;
  padding: 50px 20px;
  background: #bcc5f2;
  flex-wrap: wrap; /* Ensures responsiveness */
  text-align: center; /* Helps with text alignment */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 575px) { /* Only for mobile */
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.text-container {
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start; /* Left align content for web */
    text-align: left;
  }

  @media (max-width: 767px) {
    align-items: center; /* Center content for mobile */
    text-align: center;
  }
}

.head-txt {
    font-size: 2rem;
    font-weight: 600;
    color: #0732ef;
    line-height: 1.2;
    width: 100%; /* Ensures text spans full width */
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
  display: flex;
  justify-content: center; /* Centers image */
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;

  }
  @media (max-width: 575px) { /* Only for mobile */
    justify-content: center;
    align-items: center;
    width: 90%;
  }

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

</style>



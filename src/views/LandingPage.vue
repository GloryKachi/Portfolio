<script>
import Navbar from "@/components/Navbar.vue";
import VueTyper from "vue-typer";
import SectionTwo from "@/components/SectionTwo.vue";
import SectionThree from "@/components/SectionThree.vue";
import SectionFour from "@/components/SectionFour.vue";
import SectionFive from "@/components/SectionFive.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LandingPage",
  components: {
    Footer,
    SectionFive,
    SectionFour,
    SectionThree,
    SectionTwo,
    Navbar,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Run on mount in case some elements are already in view
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll(".fade-in");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("active");
        }
      });
    },
  },
};
</script>



<template>
  <div class="w-full overflow-hidden">
    <Navbar />
    <div
        id="hero"
        class="w-full main-layout-wrapper flex flex-col lg:flex-row mt-10 lg:mt-16 px-4 md:px-10 lg:px-20 items-center"
    >
      <!-- Left Section (Image) -->
      <div class="left fade-in flex justify-center w-full lg:w-1/2">
        <img
            src="@/assets/no_bg_img.png"
            alt="model"
            class=" hero-img w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>

      <!-- Right Section (Text) -->
      <div class="right fade-in text-center lg:text-left w-full lg:w-1/2">
        <div class="typer-container">
          <vue-typer
              :text="['Hey there! I am Glory Kachi', 'I am a Frontend Engineer']"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="clear"
              :erase-on-complete="false"
              caret-animation="expand"
              class="vue-typer"
          ></vue-typer>
        </div>
      </div>
    </div>

    <div class="all-sec flex flex-col w-full">
<!--      <section-two  id="about"/>-->
<!--      <section-three class="projects" />-->
<!--&lt;!&ndash;      <section-four class="fade-in" />&ndash;&gt;-->
<!--      <section-five class="contact"  />-->
      <section-two id="about" />
      <section-three id="projects" />
      <section-five id="reviews" />

    </div>
    <Footer id="contact"/>
  </div>
</template>

<style scoped lang="scss">
.main-layout-wrapper {
  overflow-x: hidden;
  width: 100%;
  padding: 0;
}

.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 3s ease-out, transform 3s ease-out;
}
.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

.left, .right {
  width: 100%;
}


//.vue-typer {
//  color: #263238 !important;
//  font-size: 3rem;
//  font-weight: 900;
//  line-height: 1.2;
//  width: 100%;
//  min-height: 30vh; // Increased height for better spacing
//  display: flex;
//  align-items: center; // Center the text vertically
//  justify-content: center; // Center the text horizontally
//  text-align: center;
//
//  @media screen and (min-width: 1920px) {
//    font-size: 4rem;
//    min-height: 35vh;
//  }
//  @media screen and (max-width: 1024px) {
//    font-size: 2.8rem;
//    min-height: 28vh;
//  }
//  @media screen and (max-width: 768px) {
//    font-size: 2.5rem;
//    min-height: 25vh;
//  }
//  @media screen and (max-width: 576px) {
//    font-size: 2.3rem;
//    min-height: 22vh;
//  }
//  @media screen and (max-width: 375px) {
//    font-size: 2rem;
//    min-height: 20vh;
//  }
//}

.vue-typer {
  color: #263238 !important;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.2;
  width: 100%;
  white-space: nowrap; // Prevents line breaks
  overflow: hidden;
  text-overflow: ellipsis; // Handles overflow gracefully
  min-height: 30vh; // Ensures proper spacing
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    white-space: normal; // Allow wrapping but with controlled spacing
  }

  @media screen and (max-width: 576px) {
    font-size: 1.8rem;
    white-space: normal; // Allows natural wrapping
  }

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
    text-align: center; // Ensures centered alignment
  }
}


.typer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40vh; // Increased to give more space
  padding: 0 10px;
}

img {
  max-width: 70%;
  width: 100%;
  height: auto;
  clip-path: inset(0 0 20% 0);
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
  @media screen and (max-width: 375px) {
    max-width: 100%;
  }
}

</style>

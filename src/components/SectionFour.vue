<script>
import ButtonComponent from "@/components/reusables/ButtonComponent.vue";

export default {
  name: "SectionFour",
  components: {ButtonComponent}
}
</script>

<template>
<div class="section-sculptor">
  <p class="head-txt pb-16 ">Industries</p>
  <div class="paragraph-container">
    <div class="mx-16"><p class="sub-head">Retail</p>
      <p class="paragraph">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </div>
    <div class="mx-16"><p class="sub-head">Technology</p>
      <p class="paragraph">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </div>
    <div class="mx-16"><p class="sub-head">Hospitality</p>
      <p class="paragraph">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </div>
  </div>
  <button-component button-text="Book Now" width="300px" depressed class="my-14  button" outlined/>
  <div class="image-container">
    <img src="@/assets/sec-4-img.png" alt="Image" class="image-on-top fade-in">
  </div>
</div>
</template>

<style scoped lang="scss">
.section-sculptor {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding-bottom: 250px;
  min-height: 60vh;
  padding-top: 200px;
  background: #f8f6f3;
}
.head-txt{
  font-family: "Raleway", sans-serif !important;
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left;
  //padding-left: 260px;
  color: #0732ef;
  @media screen and (max-width: 1024px) {
    font-size: 60px; /* Adjust for tablets */
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 45px; /* Adjust for mobile */
  }
}

.sub-head{
  font-family: "Raleway", sans-serif !important;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left;
  color: #0732ef;
}
.paragraph-container{
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}
.paragraph{
  font-family: "Raleway", sans-serif !important;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0;
  text-align: left;
  color: #0732ef;
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
}
.button{
  font-family: Raleway,sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #0732ef;
  background: white;
  margin-left: 0; /* Remove fixed positioning */
  align-self: center; /* Center the button */
  &:hover {
    background: #0732ef;
    color: #ffffff;
  }
}
//.button:hover{
//  font-family: Raleway,sans-serif;
//  font-weight: 400;
//  font-size: 20px;
//  background: #0732ef;
//  color: #ffffff;
//  border-radius: 30px;
//}
.image-container {
  //position: absolute;
  //width: 40%;
  //max-width: 40%;
  position: relative;
  width: 40%;
  max-width: 40%;
  margin-top: 50px; /* Adjust spacing */
  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
}

.image-on-top {
  width: 100%;
  max-width: 100%;
  display: block;
  border-radius: 20px;
  z-index: 1;
  position: relative;
  top: 0;
  right: 0; /* Remove fixed positioning */

  @media screen and (max-width: 1024px) {
    top: 0;
    right: 0;
  }
}
.fade-in {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 2s ease-out, transform 2s ease-out;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
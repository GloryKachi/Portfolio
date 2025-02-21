<script>
export default {
  name: "ProcessStep",
  props: {
    stepNumber: Number,
    title: String,
    description: String
  }
}
</script>

<template>
  <div class="step">
    <div class="flex space-x-20" style="margin-bottom: 100px; align-items: center">
      <h2 class="number fade-in">0{{ stepNumber }}</h2>
      <h2 class="title fade-in" style="margin-right: 50px">{{ title }}</h2>
    <p class="description fade-in" style="width: 300px">{{ description }}</p>
    </div>
  </div>

</template>
<style scoped lang="scss">
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}
.step {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.number{
  font-family: "Raleway", sans-serif !important;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: 70px;
  letter-spacing: 0;
  text-align: left;
  color: #0732ef;
}
.description{
  font-family: "Raleway", sans-serif !important;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
  color: #0732ef;
}
.title {
  font-family: "Raleway", sans-serif !important;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
  color: #0732ef;
}
</style>
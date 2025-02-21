<script>
export default {
  name: 'ProgrammingTools',
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
          entry.target.classList.add('animate__animated','animate__fadeInUp');
        }
      });
    },
    addScrollAnimation(){
      const options = {
        threshold: 0.2
      };
      const observer = new IntersectionObserver(this.handleScroll, options);
      document.querySelectorAll('.stat-item i').forEach(item => {
        observer.observe(item);
      });
    }
  }
}
</script>

<template>
  <div class="stats-container">
    <div class="stat-item">
      <i class="fab fa-react react-icon pb-10"></i>
      <p class="data-txt react-text">React</p>
      <span class="react-text">Frontend Library</span>
    </div>
    <div class="stat-item">
      <i class="fab fa-vuejs vue-icon pb-10"></i>
      <p class="data-txt vue-text">Vue.js</p>
      <span class="vue-text">Progressive Framework</span>
    </div>
    <div class="stat-item">
      <i class="fab fa-node node-icon pb-10"></i>
      <p class="data-txt node-text">Node.js</p>
      <span class="node-text">Backend Runtime</span>
    </div>
    <div class="stat-item">
      <i class="fas fa-leaf mongo-icon pb-10"></i>
      <p class="data-txt mongo-text">MongoDB</p>
      <span class="mongo-text">Document Database</span>
    </div>
  </div>
</template>


<style scoped lang="scss">
.stats-container {
  display: flex;
  justify-content: space-around;
  background-color: #0732ef;
  padding: 20px;
  color: white;
  flex-wrap: wrap;
  gap: 20px;
}
.stat-item {
  text-align: center;
  flex: 1 1 200px;
  max-width: 350px;
}
.stat-item i {
  font-size: 4em;
  animation-duration: 2s;
  animation-timing-function: ease-out;
}
.data-txt{
  font-size: 2.5rem;
}
.react-icon, .react-text {
  color: #61DBFB;
}

.vue-icon{
  color: #42D392;
}
.vue-text {
  color: #68D89A;
}

.node-icon{
  color: #6FCF97;
}

.node-text {
  color: #8BC98A;
}

.mongo-icon {
  color: #47A248;
}
.mongo-text {
  color: #6DC673;
}


@media (min-width: 1024px) {
  .stat-item i {
    font-size: 7em;
  }
  .data-txt {
    font-size: 5rem;
  }
}
</style>
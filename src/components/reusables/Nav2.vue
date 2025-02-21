<template>
  <v-app-bar :elevation="0" height="auto" fixed style="background: white;">
    <div class="flex flex-grow-1 ml-5 mt-5 font-bold cursor-pointer text-2xl">
      <Icons class="mr-3" name="brand-logo" color="#0732ef" /> Kachi
    </div>

    <!-- Hamburger Icon for Mobile View -->
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>

    <!-- Navigation Drawer for Mobile View -->
    <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
        width="100%"
        class="d-md-none"
        style="background: transparent !important;"
    >
      <v-list>
        <v-list-item @click="scrollToSection('about')">ABOUT</v-list-item>
        <v-list-item @click="scrollToSection('projects')">PROJECTS</v-list-item>
        <v-list-item @click="scrollToSection('pricing')">PRICING PLANS</v-list-item>
        <v-list-item @click="scrollToSection('contact')">CONTACT</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Tabs for Desktop View -->
    <div class="d-none d-md-flex">
      <v-tabs
          v-model="tab"
          @click="scrollToSection(tab)"
          align-tabs="end"
          color="#0732ef"
          style="background-color: transparent !important;"
      >
        <v-tab :value="'about'" class="mx-10">ABOUT</v-tab>
        <v-tab :value="'projects'" class="mx-10">PROJECTS</v-tab>
        <v-tab :value="'pricing'" class="mx-10">PRICING PLANS</v-tab>
        <v-tab :value="'contact'" class="mx-10">CONTACT</v-tab>
      </v-tabs>
    </div>
  </v-app-bar>
</template>

<script>
import Icons from "@/components/reusables/IconsHub.vue";

export default {
  name: "Navbar",
  components: { Icons },
  data() {
    return {
      bg: "",
      tab: null,
      drawer: false, // State for the mobile drawer
    };
  },
  methods: {
    scrollToSection(section) {
      const sectionElement = this.$refs[section]?.$el || document.getElementById(section);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop - 100,
          behavior: "smooth"
        });
      }
    },
    handleLinkClick(section) {
      this.scrollToSection(section); 
      this.drawer = false;
    }
  }
};
</script>

<style scoped lang="scss">
.v-tabs .v-tab {
  color: gray !important;
}
.v-tabs .v-tab--active {
  color: #0732ef !important;
}
.v-list-item {
  font-size: 18px;
  color: #0732ef;
  padding: 10px 20px;
}
</style>

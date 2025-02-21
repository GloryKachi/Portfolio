<script>
import Icons from "@/components/reusables/IconsHub.vue";

export default {
  name: "Navbar",
  components: { Icons },
  data() {
    return {
      bg: "",
      tab: null,
      drawer: false,
    };
  },
  watch: {
    tab(newTab) {
      if (newTab) {
        this.scrollToSection(newTab);
      }
    }
  },

  methods: {
    scrollToSection(section) {
      this.drawer = false; // Close dropdown if open
      this.$nextTick(() => {
        const element = document.getElementById(section);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust the offset if needed
            behavior: "smooth"
          });
        }
      });
    }
  }


  // methods: {
  //   scrollToSection(section) {
  //     const sectionElement = this.$refs[section]?.$el || document.getElementById(section);
  //     if (sectionElement) {
  //       window.scrollTo({
  //         top: sectionElement.offsetTop - 100,
  //         behavior: "smooth"
  //       });
  //     }
  //   },
  //   closeDropdown() {
  //     this.drawer = false;
  //   }
  // }
}
</script>

<template>
  <v-app-bar :elevation="0" height="auto" fixed style="background: white;">
    <div class="flex flex-grow-1 ml-5 mt-5 ">

      <img class="logo" src="../assets/my-logo.png" alt="logo" @click="scrollToSection('hero')" style="cursor: pointer;">
    </div>
    <div>
      <!-- Hamburger Icon for Mobile and Tablet View -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>

      <!-- Dropdown Card for Mobile View -->
      <v-menu
          v-model="drawer"
          bottom
          left
          full-width
          transition="slide-x-reverse-transition"
          class="d-md-none"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- Empty div triggers the dropdown -->
        </template>

        <v-card flat class="d-flex flex-column align-start" style="width: 100vw;">
          <v-list>
            <v-list-item @click="scrollToSection('about'); closeDropdown()">ABOUT</v-list-item>
            <v-list-item @click="scrollToSection('projects'); closeDropdown()">PROJECTS</v-list-item>
            <v-list-item @click="scrollToSection('reviews'); closeDropdown()">REVIEWS</v-list-item>
            <v-list-item @click="scrollToSection('contact'); closeDropdown()">CONTACT</v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- Desktop Tabs (Visible only on larger screens) -->
      <div class="d-none d-md-flex">
        <v-tabs
            v-model="tab"
            @change="scrollToSection"
            align-tabs="end"
            color="#0732ef"
        >
          <v-tab :value="'about'" class="mx-10" @click.prevent="scrollToSection('about')">ABOUT</v-tab>
          <v-tab :value="'projects'" class="mx-10" @click.prevent="scrollToSection('projects')">PROJECTS</v-tab>
          <v-tab :value="'pricing'" class="mx-10" @click.prevent="scrollToSection('reviews')">Reviews</v-tab>
          <v-tab :value="'contact'" class="mx-10" @click.prevent="scrollToSection('contact')">CONTACT</v-tab>

        </v-tabs>
      </div>
    </div>
  </v-app-bar>
</template>

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

/* Dropdown Card Customization */
.v-menu__content {
  background-color: white !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
  border-radius: 0 !important;
}

.v-card {
  width: 100vw !important; /* Make the card take full width */
  box-shadow: none !important;
}

.v-list-item {
  padding: 12px 24px;
}
.logo{
  width: 15%;
  height: 15%;
}
</style>



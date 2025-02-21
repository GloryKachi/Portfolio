<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App', $aos: undefined,

  mounted() {
    this.$nextTick(() => {
      this.$aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
      });
    });
  },
  data: () => ({
    //
  }),
};
</script>

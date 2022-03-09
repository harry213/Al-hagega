<template>
  <!-- ========== WRAPPER ========== -->
  <div class="wrapper">
    <Header />
    <AboutView />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutView from "@/components/Pages/AboutView.vue";
import Header from "@/components/Include/Header.vue";
import Footer from "@/components/Include/Footer.vue";
export default {
  name: "About",
  components: {
    AboutView,
    Header,
    Footer,
  },
};
</script>

<style>
</style>
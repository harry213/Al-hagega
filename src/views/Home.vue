<template>
<div class="wrapper">
    <Header />
    <br><br>
    <Suspense>
      <template #default>
      <HomePage />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Footer />
  </div>
</template>

<script>
import { Suspense } from "vue";
import Loading from "@/components/Include/Loading.vue";
import Header from "@/components/Include/Header.vue";
import Footer from "@/components/Include/Footer.vue";
import HomePage from "@/components/Pages/HomePage.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    HomePage,
    Loading,
    Suspense
  },
};
</script>

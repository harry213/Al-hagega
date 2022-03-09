<template>
  <div class="wrapper">
    <Header />
    <br><br>
    <Suspense>
      <template #default>
      <SportView />
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
import SportView from "@/components/Pages/SportView.vue";
export default {
   name: 'Sport',
   components: {
    Header,
    Footer,
    SportView,
    Loading,
    Suspense
  },
}
</script>

<style>

</style>
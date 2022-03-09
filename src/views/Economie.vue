<template>
  <div class="wrapper">
    <Header />
    <br><br>
    <Suspense>
      <template #default>
      <EconomieView />
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
import EconomieView from "@/components/Pages/EconomieView.vue";
export default {
  name: 'Economie',
  components: {
    Header,
    Footer,
    EconomieView,
    Loading,
    Suspense
  },
}
</script>

<style>

</style>
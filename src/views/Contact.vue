<template>
   <div class="wrapper">
    <Header />
    <br><br>
    <Suspense>
      <template #default>
      <ContactView />
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
import ContactView from "@/components/Pages/ContactView.vue";
export default {
   name: 'Contact',
   components: {
    Header,
    Footer,
    ContactView,
    Loading,
    Suspense
  },
}
</script>

<style>

</style>
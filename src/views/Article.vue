<template>
  <div class="wrapper">
    <Header />
    <br><br>
    <Suspense>
      <template #default>
      <ArticleView />
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
import ArticleView from "@/components/Pages/ArticleView.vue";
export default {
  name: 'Article',
  components: {
    Header,
    Footer,
    ArticleView,
    Loading,
    Suspense
  },
}
</script>

<style>

</style>
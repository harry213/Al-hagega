<template>
<div class="layout">

  <div class="wrapper">
    <Header />
    <br /><br />
    <!-- <Suspense>
      <template #default> -->
        <!--Content start-->
        <main id="content" v-if="!loading">
          <div class="container">
            <div class="row">
              <!--breadcrumb-->
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol
                    class="
                      breadcrumb
                      u-breadcrumb
                      pt-3
                      px-0
                      mb-0
                      bg-transparent
                      small
                    "
                    v-for="publish in feedNews"
                    :key="publish"
                  >
                    <li class="breadcrumb-item arabic-kufi">
                      <router-link to="/">الصفحة الرئيسية</router-link>
                    </li>
                    <li class="breadcrumb-item arabic-kufi">
                      <a href="#">{{ publish.cat_name }}</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <!--end breadcrumb-->
              <!--content-->
              <div class="col-md-8">
                <div
                  class="post-title mb-4"
                  v-for="publish in feedNews"
                    :key="publish"
                >
                  <!-- title -->
                  <h2
                    class="entry-title display-4 display-2-lg mt-2 arabic-kufi"
                  >
                    {{ publish.PostTitle }}
                  </h2>
                  <!-- atribute -->
                  <div class="post-atribute mb-3">
                    <div class="my-3 text-muted small">
                      <!--author-->
                      <span class="d-none d-sm-inline arabic-kufi">
                        بواسطة
                        <router-link class="fw-bold" to="/About"
                          >الحقيقة</router-link
                        >
                      </span>
                      <!--date-->

                      <time class="ms-0 ms-sm-2 ms-md-3" datetime="2019-10-22">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          class="bi bi-calendar-check me-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                          />
                        </svg>
                        {{ publish.PostingDate.substring(0,10) }}
                      </time>
                    </div>

                    <div class="social-share mb-3">
                      <!-- share facebook -->
                      <a
                        class="
                          btn btn-social btn-facebook
                          text-white
                          btn-sm
                          blank-windows
                        "
                        href="https://www.facebook.com/sharer.php?u=https://www.hagega.com"
                        target="_blank"
                        title="Share to facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-facebook me-1 Onerem"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                          /></svg
                        ><span class="d-none d-sm-inline">Facebook</span>
                      </a>
                      &nbsp;
                      <!-- share twitter -->
                      <a
                        class="
                          btn btn-social btn-twitter
                          text-white
                          btn-sm
                          blank-windows
                        "
                        href="https://www.twitter.com/share?url=https://www.hagega.com"
                        title="Share to twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-twitter me-1 Onerem"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                          /></svg
                        ><span class="d-none d-sm-inline text-white"
                          >Twitter</span
                        >
                      </a>
                      &nbsp;
                      <!-- share via email -->
                      <a
                        class="btn btn-social btn-envelope text-white btn-sm"
                        href="mailto:?subject=Your&nbsp;post&nbsp;title&amp;body=Read&nbsp;complete&nbsp;article&nbsp;in&nbsp;here&nbsp;https://www.hagega.com"
                        title="Share by Email"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="me-1 Onerem"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <rect
                            x="48"
                            y="96"
                            width="416"
                            height="320"
                            rx="40"
                            ry="40"
                            style="
                              fill: none;
                              stroke: currentColor;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              stroke-width: 32px;
                            "
                          />
                          <polyline
                            points="112 160 256 272 400 160"
                            style="
                              fill: none;
                              stroke: currentColor;
                              stroke-linecap: round;
                              stroke-linejoin: round;
                              stroke-width: 32px;
                            "
                          /></svg
                        ><span class="d-none d-sm-inline">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
                <!-- post content -->
                <div
                  class="post-content"
                  v-for="publish in feedNews"
                    :key="publish"
                >
                  <!-- images -->
                  <figure class="image-wrapper ratio_single">
                    <img
                      class="img-fluid"
                      v-lazy="publish.PostImage"
                      alt="Image description"
                    />
                    {{ new Date() }}
                    <figcaption></figcaption>
                  </figure>
                  <p
                    class="arabic-kufi about text-justify"
                    v-html="publish.PostDetails"
                  ></p>
                  <!-- images -->
                </div>

                <!-- footer post -->
                <div class="entry-footer">
                  <!-- tags -->
                  <div class="tags-area">
                    <ul class="tags-links tagcloud ps-0 arabic-kufi">
                      <li><span class="fw-bold me-2">Tags</span></li>
                      <li><router-link to="/">الرئيسية</router-link></li>
                      <li><router-link to="/Political">سياسية</router-link></li>
                      <li>
                        <router-link to="/Economie">اقتصادية</router-link>
                      </li>
                      <li><router-link to="/Article">مقالات</router-link></li>
                      <li><router-link to="/Sport">رياضة</router-link></li>
                    </ul>
                  </div>
                  <div class="gap-0"></div>
                </div>

                <!--Related post title-->
                <div class="block-area">
                  <div class="block-title-6">
                    <h4 class="h5 border-primary border-2">
                      <span class="bg-primary text-white arabic-kufi"
                        >مزيد من الاخبار
                      </span>
                    </h4>
                  </div>

                  <!-- block content -->
                  <div class="row">
                    <!--post list-->
                    <article
                      class="col-sm-6 col-md-12 col-lg-6"
                      v-for="publish in lastnews2"
                      :key="publish.id"
                    >
                      <!--thumbnail-->
                      <div class="ratio_360-202 image-wrapper">
                        <a @click="getFeed(publish)">
                          <img
                            class="img-fluid pointer"
                            v-lazy="publish.PostImage"
                            alt="Image description"
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <!-- title -->
                        <h2 class="card-title h1-sm h3-lg arabic-kufi pointer">
                          <a @click="getFeed(publish)">{{
                            publish.PostTitle.substring(0, 70)
                          }}</a>
                        </h2>
                        <!-- author, date and comments -->
                        <div class="card-text mb-2 text-muted small">
                          <span class="d-none d-sm-inline me-1 arabic-kufi">
                            <a class="fw-bold" href="#">الحقيقة</a>
                          </span>
                          <time datetime="2019-10-22">{{
                            publish.PostingDate.substring(0,10)
                          }}</time>
                        </div>
                        <!--description-->
                      </div>
                    </article>
                    <div class="gap-05"></div>
                  </div>
                  <!-- end block content -->
                </div>
              </div>
              <!-- end content -->
              <!-- start right column -->
              <!-- <LastNews /> -->

                <aside class="col-md-4 end-sidebar-lg">
            <!--sticky-->
            <div class="sticky">
              <!-- latest post -->
              <aside class="widget">
                <!--Block title-->
                <div class="block-title-4">
                  <h4 class="h5 title-arrow arabic-kufi">
                    <span>اخر الأخبار</span>
                  </h4>
                </div>
                <!--post big start-->
                <div class="big-post">
                  <article class="card card-full hover-a mb-4" v-for="publish in oneItems" :key="publish.id">
                    <!--thumbnail-->
                    <div class="ratio_360-202 image-wrapper">
                      <a class="card-link pointer"  @click="getFeed(publish)">
                        <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                      </a>
                    </div>
                    <div class="card-body">
                      <!--title-->
                      <h2 class="card-title h1-sm h3-md arabic-kufi">
                        <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                      </h2>
                      <!-- author & date -->
                      <div class="card-text mb-2 text-muted small">
                        <span class="d-none d-sm-inline me-1">
                          <a class="fw-bold" href="#">الحقيقة</a>
                        </span>
                        <time datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
                      </div>
                      <!--description-->
                    </div>
                  </article>
                </div>
                <!--end post big-->
                <!--post small start-->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in lastnews1" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a class="card-link pointer"  @click="getFeed(publish)">
                            <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi">
                            <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-10-16">{{ publish.PostingDate.substring(0,10) }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                
                </div>
                <!--end post small-->
                <div class="gap-0"></div>
              </aside>
              <!-- end latest post -->
            </div>
          </aside>

            </div>
          </div>
        </main>
        <template v-if="loading">
        <Loading />
      </template>
      <!-- </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense> -->
    <Footer />
  </div>
    <!-- <metainfo> -->
      <!-- <template v-slot:title="{ content }">{{ content }} - الحقيقة ديلي برس!</template> -->

      <!-- <template v-slot:base="{ content, metainfo }">http://nuxt.dev:3000{{ content }}</template> -->
      <!-- <template v-slot:title="{ content, metainfo }">{{ content }} - {{ metainfo.description }} - الحقيقة ديلي برس</template>
      <template v-slot:og(title)="{ content, metainfo, og }">
        {{ content }} - {{ og.description }} - {{ metainfo.description }} - الحقيقة ديلي برس
         </template>
    </metainfo> -->
  </div>
</template>

<script>
import axios from "axios";
import Loading from "@/components/Include/Loading.vue";
import Header from "@/components/Include/Header.vue";
import Footer from "@/components/Include/Footer.vue";
import { ref , watch, watchEffect , computed, onMounted} from "vue";
// import { useMeta } from 'vue-meta'
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Reads",
    components: {
    Header,
    Footer,
    Loading,
  },
  props: {
    id: String,
  },
   meta: {
  title: "project detail",
  content: []
},

   setup(props) {
     const router = useRouter();
     const route = useRoute();

    const loading = ref(true);
    const feedNews = ref([]);
    const lastnews = ref([]);
    const lastnews1 = ref([]);
    const lastnews2 = ref([]);
    
    const getLastnews = async () => {
        loading.value = true;
        try {
           await axios.get("readPost.php?readPost&id=" + props.id).then((res) => {
              feedNews.value = res.data.readPost;
           }).then(() => {
              loading.value = false;
           });
            await axios.get("getPost.php?getPost&LIMIT=10&OFFSET=5").then((res) => {
               lastnews.value = res.data.getPost;
          });
        } catch (err) {
           console.log(err);
        }
      //    try {
      //       await axios.get("getPost.php?getPost&LIMIT=10&OFFSET=5").then((res) => {
      //          lastnews.value = res.data.getPost;
      //     })
      // } catch (err) {
      //   console.log(err);
      // }

    };
    onMounted(() => {
      getLastnews();
    });
     const oneItems = computed(()=> {
      return lastnews.value.slice(0, 1)
    });

    // const { meta } = useMeta({
    //   title: "السودان يشرع في الاعداد لقيام بورصة للسلع الزراعية",
    // });

     watchEffect(() => {
      const dup = lastnews.value.slice(1, 5);
      lastnews1.value = dup;
      const dup1 = lastnews.value.slice(5, 9);
      lastnews2.value = dup1;
      
      //  const test = feedNews.value;
        // meta.description = 'السودان يشرع في الاعداد لقيام بورصة للسلع الزراعية';
        // const counterValue = publish.PostTitle
    });

    const getFeed = (publish) => {
      router.push({ name: "Reads", params: { id: publish.id } });
      // const PostTitle = publish.PostTitle
      // console.log("PostTitle ====== " + PostTitle);
    };
    
    
    watch(() => route.params,() => {
        // console.log(`${previous} and ${current}`);
        window.scrollTo(0, 0);
      },
      { deep: true }
    );
    // watchEffect(() => {
    //   const counterValue = lastnews2.value;
    //   meta.description = `Counted ${counterValue} times`;
    //   // const counterValue = publish.PostTitle
    //   // meta.description = `Counted  times`;
    // });
   
    return {
      feedNews,
      loading,
      oneItems,
      getFeed,
      lastnews1,
      lastnews2
    };
  },


};
</script>

<style scoped>
.arabic-kufi {
  font-family: "Droid Arabic Kufi", serif;
}
.pointer {
  cursor: pointer;
}
.Onerem {
  width: 1rem;
  height: 1rem;
}
</style>
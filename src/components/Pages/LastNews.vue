<template>

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
                        <time datetime="2019-10-22">{{ publish.PostingDate }}</time>
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
                            <time datetime="2019-10-16">{{ publish.PostingDate }}</time>
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
</template>

<script>
import axios from "axios";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { useLoading } from 'vue-loading-overlay'
export default {

  setup() {
     const router = useRouter();
     const route = useRoute();

    const lastnews = ref([]);
    const lastnews1 = ref([]);

    const getLastnews = async () =>{
      try {
        const response = await axios.get('getPost.php?getPost&LIMIT=10&OFFSET=0');
        lastnews.value = response.data.getPost;
        // console.log("response=======" + lastnews.value);
      } catch(err) {
        console.log(err);
      }
    };
     const getFeed = (publish) => {
      router.push({ name: "Reads", params: { id: publish.id } });
      // const PostTitle = publish.PostTitle
      // console.log("PostTitle ====== " + PostTitle);
    };
    
    setInterval(() => {
      getLastnews
    }, 1200);
    onMounted(() => {
      getLastnews();
    });
    const oneItems = computed(()=> {
      return lastnews.value.slice(0, 1)
    });
    watchEffect(() => {
      const dup = lastnews.value.slice(1, 5);
      lastnews1.value = dup;
    });

     

    return { oneItems, lastnews1, getFeed };
  }
  //   async setup() {
  //   const router = useRouter();
  //   const route = useRoute();
  //   const lastnews = ref([]);
  //   const lastnews1 = ref([]);
  //   // const lastnews2 = ref([]);
  //   await axios.get("getPost.php?getPost&LIMIT=10&OFFSET=0").then((response) => {
  //     lastnews.value = response.data.getPost.slice(0,1);
  //     lastnews1.value = response.data.getPost.slice(1,4);
  //   });
  //   // await axios.get("getPost.php?getPost&LIMIT=3&OFFSET=1").then((response) => {
  //   //   lastnews1.value = response.data.getPost.slice(0,2);
  //   // });
  //   // await axios.get("getPost.php?getPost&LIMIT=2&OFFSET=5").then((response) => {
  //   //   lastnews2.value = response.data.getPost;
  //   // });

  //   const getFeed = (publish) => {
  //     router.push({ name: "Reads", params: { id: publish.id } });
  //     // const PostTitle = publish.PostTitle
  //     // console.log("PostTitle ====== " + PostTitle);
  //   };
  //   return {
  //     lastnews,
  //     lastnews1,
  //     // lastnews2,
  //     getFeed
  //   }
  // },
}
</script>

<style>
.arabic-kufi {
  font-family: 'Droid Arabic Kufi', serif;
}
.pointer {
  cursor: pointer;
}
</style>
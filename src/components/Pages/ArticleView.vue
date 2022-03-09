<template>
  <main id="content">
      <div class="container">
        <div class="row">
            <div class="col-12 mt-05 mb-5">
            <!-- big grid 1 -->
            <div class="row featured-1">
              <!--Start left cover-->
              <div class="col-md-6 pb-05 pt-05 pe-md-05">
                <div class="card card-full text-light overflow zoom">
                  <div class="height-ratio image-wrapper" v-for="publish in topsection" :key="publish.id">
                    <!--thumbnail-->
                    <a @click="getFeed(publish)" class="pointer">
                      <img class="img-fluid" v-lazy="publish.PostImage" onerror="this.src='../assets/default_image.png'" alt="">
                    </a>
                    <div class="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                      <!--title-->
                      <a @click="getFeed(publish)" class="pointer">
                        <h3 class="h1-sm h2-md display-4-lg fw-500 text-white arabic-kufi">{{ publish.PostTitle.substring(0,70) }}</h3>
                      </a>
                      <!-- author and date -->
                      <div class="news-meta arabic-kufi">
                        <span class="news-author">بواسطة <a class="text-white fw-bold" >الحقيقة</a></span>
                        <time class="news-date" datetime="2019-10-22">{{ publish.PostingDate }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--End left cover-->
              <!--Start box news-->
              <div class="col-md-6 pt-05 ps-md-05">
                <div class="row newsbox">
                  <!--news box-->
                  <article class="col-6" v-for="publish in topsection1" :key="publish.id">
                    <div class="card card-full text-white overflow zoom">
                      <div class="height-ratio image-wrapper">
                        <!--thumbnail-->
                        <a @click="getFeed(publish)" class="pointer">
                          <img class="img-fluid" v-lazy="publish.PostImage"  alt="">
                        </a>
                        <!-- category & title -->
                        <div class="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow arabic-kufi">
                          <a class="p-1 badge bg-primary text-white" >{{ publish.cat_name }}</a>
                          <a @click="getFeed(publish)">
                            <h3 class="h6 h4-sm h6-md h5-lg text-white my-1 arabic-kufi pointer">{{ publish.PostTitle.substring(0,45) }}</h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <!--news box-->
                </div>
              </div>
              <!--End box news-->
            </div>
            <!-- end big grid 1 -->
          </div>
          <!--start left column-->
          <div class="col-md-8">
            <!--Block start-->
            <div class="block-area">
              <!-- block title -->
              <div class="block-title-6 ">
                <h4 class="h5 border-primary">
                  <span class="bg-primary text-white arabic-kufi">مقالات</span>
                </h4>
              </div>
              <!--block content-->
              <div class="row">
                <!--post left start-->
                <div class="col-lg-6">
                  <article class="card card-full hover-a mb-4" v-for="publish in topsection2" :key="publish.id">
                    <!--thumbnail-->
                    <div class="ratio_360-202 image-wrapper">
                      <a @click="getFeed(publish)" class="pointer">
                        <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                      </a>
                    </div>
                    <div class="card-body">
                      <!-- title -->
                      <h2 class="card-title h1-sm h3-lg arabic-kufi">
                        <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,100) }}</a>
                      </h2>
                      <!-- author, date and comments -->
                      <div class="card-text mb-2 text-muted small">
                        <span class="d-none d-sm-inline me-1 arabic-kufi pointer">
                          <a class="fw-bold" href="#">الحقيقة</a>
                        </span>
                        <time datetime="2019-10-22">{{ publish.PostingDate }}</time>
                      </div>
                      <!--description-->
                    </div>
                  </article>
                </div>
                <!--end post left-->
                <!--post right list start-->
                <div class="col-lg-6">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in topsection3" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_115-80 image-wrapper">
                          <a @click="getFeed(publish)" class="pointer">
                            <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-lg arabic-kufi pointer">
                            <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-10-22">{{ publish.PostingDate }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                </div>
                <!--end post right list-->
              </div>
              <!-- end block content -->
            </div>
            <!-- End block -->

        

            <!--Block start-->
            <div class="block-area">
              <!--block title-->
              <div class="block-title-6">
                <h4 class="h5 border-primary">
                  <!-- <span class="bg-primary text-white">Travel</span> -->
                </h4>
              </div>
              <!-- block content -->
              <div class="row">
                <!--post list-->
                <article class="col-sm-6 col-md-12 col-lg-6" v-for="publish in topsection4" :key="publish.id">
                  <!--thumbnail-->
                    <div class="ratio_360-202 image-wrapper">
                      <a @click="getFeed(publish)" class="pointer">
                        <img class="img-fluid" :v-lazy="publish.PostImage" alt="Image description">
                      </a>
                    </div>
                    <div class="card-body">
                      <!-- title -->
                      <h2 class="card-title h1-sm h3-lg arabic-kufi pointer">
                        <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                      </h2>
                      <!-- author, date and comments -->
                      <div class="card-text mb-2 text-muted small">
                        <span class="d-none d-sm-inline me-1 arabic-kufi">
                          <a class="fw-bold" href="#">الحقيقة</a>
                        </span>
                        <time datetime="2019-10-22">{{ publish.PostingDate }}</time>
                      </div>
                      <!--description-->
                    </div>
                </article>
                <div class="gap-05"></div>
              </div>
              <!-- end block content -->
            </div>
            <!--End Block-->

            <!-- block start -->
            <div class="block-area">
              <!-- block title -->
              <div class="block-title-6">
                <h4 class="h5 border-primary">
                  <span class="bg-primary text-white arabic-kufi">مزيد من المقالات</span>
                </h4>
              </div>
              <!-- block content -->
              <div class="border-bottom-last-0 first-pt-0">
                <!--post start-->
                <article class="card card-full hover-a py-4" v-for="publish in topsection5" :key="publish.id">
                  <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <!--thumbnail-->
                      <div class="ratio_360-202 image-wrapper">
                        <a @click="getFeed(publish)" class="pointer">
                          <img class="img-fluid" :src="publish.PostImage" onerror="this.src='../assets/default_image.png'" alt="Image description">
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                        <!--title-->
                        <h3 class="card-title h2 h3-sm h2-md arabic-kufi pointer">
                          <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,150) }}</a>
                        </h3>
                        <!--author and date-->
                        <div class="card-text mb-2 text-muted small">
                          <span class="d-none d-sm-inline me-1 arabic-kufi">
                            <a class="fw-bold" href="#">الحقيقة</a>
                          </span>
                          <time datetime="2019-10-21">{{ publish.PostingDate }}</time>
                        </div>
                        <!--description-->
                      </div>
                    </div>
                  </div>
                </article>
                <!--post start-->
              </div>
              <!-- end block content -->
            </div>
            <!--end block-->

            <!--Pagination-->
            <div class="clearfix my-4">
              <nav class="float-start" aria-label="Page navigation example">
                <!--page number-->
                <!-- <ul class="pagination">
                  <li class="page-item active"><span class="page-link">1</span></li>
                  <li class="page-item"><a class="page-link" href="../category/category.html">2</a></li>
                  <li class="page-item"><a class="page-link" href="../category/category.html">3</a></li>
                  <li class="page-item"><a class="page-link" href="../category/category.html">4</a></li>
                  <li class="page-item"><span class="page-link disabled">....</span></li>
                  <li class="page-item"><a class="page-link" href="../category/category.html">12</a></li>
                  <li class="page-item">
                    <a class="page-link" href="../category/category.html" aria-label="Next" title="Next page">
                      <span aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 512 512"><polyline points="184 112 328 256 184 400" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/></svg>
                      </span>
                      <span class="visually-hidden">Next</span>
                    </a>
                  </li>
                </ul> -->
                <!--end page number-->
              </nav>
              <!-- <span class="py-2 float-end">Page 1 of 12</span> -->
            </div>
            <!--end pagination-->
          </div>
          <!--end left column-->

          <!--start right column-->
          <aside class="col-md-4 end-sidebar-lg">
            <div class="sticky">
              <!--Block start-->
              <aside class="widget">
                <!--block title-->
                <div class="block-title-9">
                  <h4 class="h5">
                    <span class="border-primary bg-secondary text-white arabic-kufi">اخر الاخبار</span>
                  </h4>
                </div>
                <!-- block content -->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in lastnews" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a @click="getFeed(publish)" class="pointer">
                            <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi pointer">
                            <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
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
                <!--end block content-->
                <div class="gap-0"></div>
              </aside>
              <!-- end block -->

              <!--post number list-->
              <aside class="widget">
                <!--block title-->
                <div class="block-title-9">
                  <h4 class="h5">
                    <span class="border-primary bg-secondary text-white"></span>
                  </h4>
                </div>
                <!-- Block content -->
                <ul class="post-number list-unstyled border-bottom-last-0 rounded mb-3">
                  <li class="hover-a" v-for="publish in lastnews1" :key="publish.id">
                    <a class="h5 h6-md h5-lg arabic-kufi pointer" @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
                  </li>
                </ul>
                <!-- end block content -->
                <div class="gap-05"></div>
              </aside>
              <!-- end block -->

              <!--Block start-->
              <aside class="widget">
                <!--block title-->
                <div class="block-title-9">
                  <h4 class="h5">
                    <span class="border-primary bg-secondary text-white arabic-kufi">المقالات</span>
                  </h4>
                </div>
                <!-- block content -->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in topsection6" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a @click="getFeed(publish)" class="pointer">
                            <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi pointer">
                            <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
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
                <!--end block content-->
                <div class="gap-0"></div>
              </aside>
              <!-- end block -->

              <!-- latest post -->
              <aside class="widget">
                <!--block title-->
                <div class="block-title-9">
                  <h4 class="h5">
                    <span class="border-primary bg-secondary text-white"></span>
                  </h4>
                </div>
                <!--post big start-->
                <div class="big-post">
                  <article class="card card-full hover-a mb-4" v-for="publish in topsection7" :key="publish.id">
                    <!--thumbnail-->
                    <div class="ratio_360-202 image-wrapper">
                      <a @click="getFeed(publish)" class="pointer">
                        <img class="img-fluid" v-lazy="publish.PostImage" alt="Image description">
                      </a>
                    </div>
                    <div class="card-body">
                      <!--title-->
                      <h2 class="card-title h3 arabic-kufi pointer">
                        <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
                      </h2>
                      <!-- author & date -->
                      <div class="card-text mb-2 text-muted small">
                        <span class="d-none d-sm-inline me-1 arabic-kufi">
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
                  <article class="card card-full hover-a mb-4"  v-for="publish in topsection8" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a @click="getFeed(publish)" class="pointer">
                            <img class="img-fluid" :src="publish.PostImage" alt="Image description">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h4-sm h6-md arabic-kufi pointer">
                            <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
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
          <!--end right column-->
        </div>
      </div>
  </main>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
   name: 'ArticleView',
   data() {
    return {
      topsection6: null,
      topsection7: null,
      topsection8: null,
      lastnews: null,
      lastnews1: null,
     }
    },
    
    async setup() {

      const topsection = ref([]);
      const topsection1 = ref([]);
      const topsection2 = ref([]);
      const topsection3 = ref([]);
      const topsection4 = ref([]);
      const topsection5 = ref([]);

    await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=30&OFFSET=0").then((response) => {
      topsection.value = response.data.getPostbyCateogry.slice(0,1);
      topsection1.value = response.data.getPostbyCateogry.slice(1,5);
      topsection2.value = response.data.getPostbyCateogry.slice(5,6);
      topsection3.value = response.data.getPostbyCateogry.slice(6,9);
      topsection4.value = response.data.getPostbyCateogry.slice(9,13);
      topsection5.value = response.data.getPostbyCateogry.slice(13,18);
    });

        // const topsection = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=1&OFFSET=0")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const topsection1 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=4&OFFSET=1")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const topsection2 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=1&OFFSET=2")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const topsection3 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=3&OFFSET=3")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const topsection4 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=4&OFFSET=6")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const topsection5 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=5&OFFSET=10")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        return {
           topsection,
           topsection1,
           topsection2,
           topsection3,
           topsection4,
           topsection5,
        };
   },
   mounted() {
      axios
      .get('getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=4&OFFSET=15')
      .then((response) => (this.topsection6 = response.data.getPostbyCateogry));
      axios
      .get('getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=1&OFFSET=19')
      .then((response) => (this.topsection7 = response.data.getPostbyCateogry));
      axios
      .get('getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=3&OFFSET=20')
      .then((response) => (this.topsection8 = response.data.getPostbyCateogry));
      axios
      .get('getPost.php?getPost&LIMIT=4&OFFSET=0')
      .then((response) => (this.lastnews = response.data.getPost));
      axios
      .get('getPost.php?getPost&LIMIT=4&OFFSET=4')
      .then((response) => (this.lastnews1 = response.data.getPost));
      
   },
   methods: {
    getFeed: function (publish) {
      this.$router.push({ name: "Reads", params: { id: publish.id } });
    },
  },
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
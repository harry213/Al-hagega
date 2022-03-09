<template>
<metainfo>
      <template v-slot:title="{ content }">{{ content }} - الحقيقة ديلي برس</template>
    </metainfo>
  <!--Content start-->
    <main id="content">
      <div class="container">
        <div class="row">
          <!-- top section -->
          <div class="col-12 mt-05">
            <!-- Big grid slider 1 -->
            <div class="row featured-1 mb-5">
              <!--Start left cover-->
              <div class="col-md-6 pb-05 pt-05 pe-md-05">
                <div class="position-relative overflow-hidden">
                <!-- Carousel Card -->
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner" >
                    <div class="carousel-item" :class="{ active: index == 0 }" v-for="(publish, index) in carousel" v-bind:key="'publish' + index">
                      <div class="card card-full text-light overflow zoom">
                        <div class="height-ratio image-wrapper">
                          <a class="card-link pointer"  @click="getFeed(publish)">
                          <img :src="publish.PostImage || '../../assets/lazy-empty.png'" class="img-fluid d-block w-100" alt="" />
                          </a>
                          <div class="position-absolute p-3 b-0 w-100 bg-lg-shadow">
                            <!--title-->
                            <a class="card-link pointer"  @click="getFeed(publish)">
                              <h3 class=" h1-sm h2-md display-4-lg font-weight-500 text-white arabic-kufi">
                                {{ publish.PostTitle.substring(0,70) }}
                                
                              </h3>
                            </a>
                            <!-- meta title -->
                            <div class="news-meta">
                              <span class="news-author arabic-kufi">بواسطة
                                <a class="text-white font-weight-bold" href="#">الحقيقة</a></span>
                              <time class="news-date" datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <!-- End Carousel Card -->
                </div>
              </div>
              <!--End left cover-->
              <!--Start box news-->
              <div class="col-md-6 pt-05 ps-md-05">
                <div class="row newsbox">
                  <!--news box-->
                  <article class="col-6" v-for="publish in card" :key="publish.id">
                    <div class="card card-full text-white overflow zoom" >
                      <div class="height-ratio image-wrapper">
                        <!--thumbnail-->
                        <a class="card-link pointer"  @click="getFeed(publish)">
                          <img class="d-block w-100" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="">
                        </a>
                        <!-- category & title -->
                        <div class="position-absolute px-3 pb-3 pt-0 b-0 w-100 bg-shadow">
                          <a class="p-1 badge bg-primary text-white arabic-kufi" href="#">{{ publish.cat_name }}</a>
                          <a class="card-link pointer"  @click="getFeed(publish)">
                            <h3 class="h6 h4-sm h6-md h5-lg text-white my-1 arabic-kufi">
                              {{ publish.PostTitle.substring(0,50) }}
                            </h3>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
              <!--End box news-->
            </div>
            <!--End Big grid slider 1-->
          </div>




          <!--start left column-->
          <div class="col-md-8">
            <!-- Block start -->
						<div class="block-area">
						  <!--block title-->
						  <div class="block-title-6">
						    <h4 class="h5 border-primary">
						      <span class="bg-primary text-white arabic-kufi">السياسية</span>
						    </h4>
						  </div>
						  <!--block content-->
						  <div class="row">
						    <!--post left start-->
						    <div class="col-lg-6">
						      <article class="card card-full hover-a mb-4" v-for="publish in policy" :key="publish.id">
						        <!--thumbnail-->
						        <div class="ratio_360-202 image-wrapper">
						          <a class="card-link pointer"  @click="getFeed(publish)">
						            <img class="d-block w-100" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="">
						          </a>
						        </div>
						        <div class="card-body">
						          <!-- title -->
						          <h2 class="card-title h1-sm h3-lg">
						            <a class="card-link pointer arabic-kufi"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70)+".." }}</a>
						          </h2>
						          <!-- author, date and comments -->
						          <div class="card-text mb-2 text-muted small">
						            <span class="d-none d-sm-inline me-1">
						              <a class="font-weight-bold arabic-kufi" href="#">الحقيقة</a>
						            </span>
						            <time datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
						            <!-- <span title="9 تعليق" class="float-end">
						              <span class="icon-comments"></span> 9
						            </span> -->
						          </div>
						          <!--description-->
						          <!-- <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p> -->
						        </div>
						      </article>
						    </div>
						    <!--end post left-->
						    <!--post right list start-->
						    <div class="col-lg-6">
						      <!--post list-->
						      <article class="card card-full hover-a mb-4" v-for="publish in policy1" :key="publish.id">
						        <div class="row">
						          <!--thumbnail-->
						          <div class="col-3 col-md-4 pe-2 pe-md-0">
						            <div class="ratio_115-80 image-wrapper">
						              <a class="card-link pointer"  @click="getFeed(publish)">
						                <img class="d-block w-100" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="">
						              </a>
						            </div>
						          </div>
						          <!-- title & date -->
						          <div class="col-9 col-md-8">
						            <div class="card-body pt-0">
						              <h3 id="count" class="card-title h6 h5-sm h6-lg arabic-kufi">
						                <a class="card-link pointer "  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,60)+".." }}</a>
						              </h3>
						              <div class="card-text small text-muted">
						                <time datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </article>
						      <!--End post list-->
						    </div>
						    <!--end post right list-->
						  </div>
						  <!-- end block content -->
						</div>
						<!--End Block-->

            <!--Block start-->
            <div class="block-area">
              <div class="row">
                <!--left post-->
                <div class="col-lg-6">
                  <!--block title-->
                  <div class="block-title-6">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white arabic-kufi">مزيد من الاخبار السياسية</span>
                    </h4>
                  </div>
                  <!--post big start-->
                  <div class="big-post">
                    <article class="card card-full hover-a mb-4" v-for="publish in policy2" :key="publish.id">
                      <!--thumbnail-->
                      <div class="ratio_360-202 image-wrapper">
                        <a class="card-link pointer"  @click="getFeed(publish)">
                          <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'"  alt="وصف الصورة">
                        </a>
                      </div>
                      <div class="card-body">
                        <!--title-->
                        <h2 class="card-title h1-sm h3-lg arabic-kufi">
                          <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70)+".." }}</a>
                        </h2>
                        <!-- author, date & comments -->
                        <div class="card-text mb-2 text-muted small">
                          <span class="d-none d-sm-inline me-1 arabic-kufi">
                            <a class="font-weight-bold" href="#">الحقيقة</a>
                          </span>
                          <time datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
                          <!-- <span title="9 تعليق" class="float-end">
                            <span class="icon-comments"></span> 9
                          </span> -->
                        </div>
                        <!--description-->
                        <!-- <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p> -->
                      </div>
                    </article>
                  </div>
                  <!--end post big-->
                  <!--post small start-->
                  <div class="small-post">
                    <!--post list-->
                    <article class="card card-full hover-a mb-4" v-for="publish in policy3" :key="publish.id">
                      <div class="row">
                        <!--thumbnail-->
                        <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a class="card-link pointer"  @click="getFeed(publish)">
                              <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                            </a>
                          </div>
                        </div>
                        <!-- title & date -->
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6 h5-sm h6-lg arabic-kufi">
                              <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,60)+".." }}</a>
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
                </div>
                <!--end left post-->

                <!--right post-->
                <div class="col-lg-6">
                  <!--block title-->
                  <div class="block-title-6">
                    <h4 class="h5 border-primary">
                      <span class="bg-primary text-white arabic-kufi"> الاخبار الاقتصادية</span>
                    </h4>
                  </div>
                  <!--post big start-->
                  <div class="big-post">
                    <article class="card card-full hover-a mb-4" v-for="publish in economie" :key="publish.id">
                      <!--thumbnail-->
                      <div class="ratio_360-202 image-wrapper">
                        <a class="card-link pointer"  @click="getFeed(publish)">
                          <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                        </a>
                      </div>
                      <div class="card-body">
                        <!--title-->
                        <h2 class="card-title h1-sm h3-lg arabic-kufi">
                          <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70)+".." }}</a>
                        </h2>
                        <!-- author, date & comments -->
                        <div class="card-text mb-2 text-muted small">
                          <span class="d-none d-sm-inline me-1 arabic-kufi">
                            <a class="font-weight-bold" href="#">الحقيقة</a>
                          </span>
                          <time datetime="2019-10-22">{{ publish.PostingDate.substring(0,10) }}</time>
                          <!-- <span title="9 تعليق" class="float-end">
                            <span class="icon-comments"></span> 9
                          </span> -->
                        </div>
                        <!--description-->
                      </div>
                    </article>
                  </div>
                  <!--end post big-->
                  <!--post small start-->
                  <div class="small-post">
                    <!--post list-->
                    <article class="card card-full hover-a mb-4" v-for="publish in economie1" :key="publish.id">
                      <div class="row">
                        <!--thumbnail-->
                        <div class="col-3 col-md-4 pe-2 pe-md-0">
                          <div class="ratio_115-80 image-wrapper">
                            <a class="card-link pointer"  @click="getFeed(publish)">
                              <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                            </a>
                          </div>
                        </div>
                        <!-- title & date -->
                        <div class="col-9 col-md-8">
                          <div class="card-body pt-0">
                            <h3 class="card-title h6 h5-sm h6-lg arabic-kufi">
                              <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,60)+".." }}</a>
                            </h3>
                            <div class="card-text small text-muted">
                              <time datetime="2019-10-09">{{ publish.PostingDate.substring(0,10) }}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <!--post list-->
                  </div>
                  <!--end post small-->
                </div>
                <!--end right post-->
              </div>
            </div>
            <!--End Block-->

            <!--Block start-->
						<div class="block-area">
						  <!-- block title -->
						  <div class="block-title-6">
						    <h4 class="h5 border-primary">
						      <span class="bg-primary text-white arabic-kufi">رياضة</span>
						    </h4>
						  </div>
						  <!--big post start-->
						  <div class="big-post">
						    <article class="card card-full hover-a mb-4" v-for="publish in sport" :key="publish.id">
						      <div class="row">
						        <div class="col-lg-6">
						          <!-- thumbnail -->
						          <div class="ratio_360-202 image-wrapper">
						            <a class="card-link pointer"  @click="getFeed(publish)">
						              <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
						            </a>
						          </div>
						        </div>
						        <div class="col-lg-6">
						          <div class="card-body pt-3 pt-lg-0">
						            <!--title-->
						            <h2 class="card-title h1-sm h3-lg arabic-kufi">
						              <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,150)+".." }}</a>
						            </h2>
						            <!-- author, date and comments -->
						            <div class="card-text mb-2 text-muted small">
						              <span class="d-none d-sm-inline me-1 arabic-kufi">
						                <a class="font-weight-bold" href="#"> الحقيقة </a>
						              </span>
						              <time datetime="2019-10-21">{{ publish.PostingDate.substring(0,10) }}</time>
						              <!-- <span title="5 تعليق" class="float-end">
						                <span class="icon-comments"></span> 5
						              </span> -->
						            </div>
						            <!--description-->
						            <!-- <p class="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي ...</p> -->
						          </div>
						        </div>
						      </div>
						    </article>
						  </div>
						  <!--small post start-->
						  <div class="row small-post">
						    <!-- post list -->
						    <article class="col-lg-6" v-for="publish in sport1" :key="publish.id">
						      <div class="card card-full hover-a mb-4">
						        <div class="row">
						          <!--thumbnail-->
						          <div class="col-3 col-md-4 pe-2 pe-md-0">
						            <div class="ratio_115-80 image-wrapper">
						              <a class="card-link pointer" @click="getFeed(publish)">
						                <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
						              </a>
						            </div>
						          </div>
						          <!-- title & date -->
						          <div class="col-9 col-md-8">
						            <div class="card-body pt-0">
						              <h3 class="card-title h6 h5-sm h6-lg arabic-kufi">
						                <a class="card-link pointer" @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70)+".." }}</a>
						              </h3>
						              <div class="card-text small text-muted">
						                <time datetime="2019-10-19">{{ publish.PostingDate.substring(0,10) }}</time>
						              </div>
						            </div>
						          </div>
						        </div>
						      </div>
						    </article>
						    <!-- post list -->
						    <!-- End post list -->
						  </div>
						</div>
						<!-- End block -->

            
          </div>
          <!--end left column-->




          <!--start right column-->
          <aside class="col-md-4 end-sidebar-lg">
            <div class="sticky">
             <!--widget start-->
              <aside class="widget">
                <!-- block title -->
                <div class="block-title-4">
                  <h4 class="h5 title-arrow">
                    <span>مقالات</span>
                  </h4>
                </div>
                <!-- block content -->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in articles" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a class="card-link pointer"  @click="getFeed(publish)">
                            <img class="img-fluid " :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi">
                            <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-10-16">{{ publish.PostingDate.substring(0,10) }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>                 
                  <!--End post list-->
                </div>
                <!--end block content-->
                <div class="gap-0"></div>
              </aside>
              <!--End widget-->

              <!-- post with number -->
              <aside class="widget">
                <!--block title-->
                <div class="block-title-4">
                  <h4 class="h5 title-arrow arabic-kufi">
                    <span>اخر الأخبار</span>
                  </h4>
                </div>
                <!-- Block content -->
                <ul class="post-number list-unstyled border-bottom-last-0 rounded mb-3">
                  <li class="hover-a" v-for="publish in lastnews" :key="publish.id">
                    <a class="h5 h6-md h5-lg pointer arabic-kufi" @click="getFeed(publish)">{{ publish.PostTitle.substring(0,50) }}</a>
                  </li>
                  
                </ul>
                <!-- end block content -->
                <div class="gap-0"></div>
              </aside>
              <!-- end post with number -->

              <!-- latest post -->
              <aside class="widget">
                <!--Block title-->
                <div class="block-title-4">
                  <h4 class="h5 title-arrow arabic-kufi">
                    <span>مزيد من الاخبار الاقتصادية</span>
                  </h4>
                </div>
                <!--post big start-->
                <div class="big-post">
                  <article class="card card-full hover-a mb-4" v-for="publish in economie2" :key="publish.id">
                    <!--thumbnail-->
                    <div class="ratio_360-202 image-wrapper">
                      <a class="card-link pointer"  @click="getFeed(publish)">
                        <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                      </a>
                    </div>
                    <div class="card-body">
                      <!--title-->
                      <h2 class="card-title h1-sm h3-md arabic-kufi">
                        <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                      </h2>
                      <!-- author & date -->
                      <div class="card-text mb-2 text-muted small">
                        <span class="d-none d-sm-inline me-1 arabic-kufi">
                          <a class="font-weight-bold" href="#">الحقيقة</a>
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
                  <article class="card card-full hover-a mb-4" v-for="publish in economie3" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a class="card-link pointer"  @click="getFeed(publish)">
                            <img class="img-fluid" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi">
                            <a class="card-link pointer"  @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                          </h3>
                          <div class="card-text small text-muted">
                            <time datetime="2019-10-16">{{ publish.PostingDate.substring(0,10) }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                 
                  <!--End post list-->
                </div>
                <!--end post small-->
                <div class="gap-0"></div>
              </aside>
              <!-- end latest post -->       
            </div>
          </aside>
          <!--end right column-->
             <!-- start left column -->
          <div class="col-md-8">
            <!-- block start -->
            <div class="block-area">
              <!-- block title -->
              <div class="block-title-6">
                <h4 class="h5 border-primary">
                  <span class="bg-primary text-white arabic-kufi">سياسي محلي</span>
                </h4>
              </div>
              <!-- block content -->
              <div class="border-bottom-last-0 first-pt-0">
                <!--post start-->
                <article class="card card-full hover-a py-4" v-for="publish in policy4" :key="publish.id">
                  <div class="row">
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <!--thumbnail-->
                      <div class="ratio_360-202 image-wrapper">
                        <a  @click="getFeed(publish)">
                          <img class="img-fluid pointer" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-12 col-lg-6">
                      <div class="card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0">
                        <!--title-->
                        <h3 class="card-title h2 h3-sm h2-md pointer arabic-kufi">
                          <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                        </h3>
                        <!--author and date-->
                        <div class="card-text mb-2 text-muted small">
                          <span class="d-none d-sm-inline me-1">
                            <a class="font-weight-bold arabic-kufi" href="#">الحقيقة</a>
                          </span>
                          <time datetime="2019-10-21">{{ publish.PostingDate.substring(0,10) }}</time>
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
            <div class="block-title-6">
                <h4 class="h5 border-primary">
                  <!-- <span class="bg-primary text-white "></span> -->
                </h4>
              </div>
            <!--Pagination-->
            <div class="clearfix my-4">
              <!-- footer post -->
            <div class="entry-footer">
              <!-- tags -->
              <div class="tags-area">
                <ul class="tags-links tagcloud ps-0 arabic-kufi">
                  <li><span class="fw-bold me-2">Tags</span></li>
                  <li><router-link to="/">الرئيسية</router-link></li>
                  <li><router-link to="Political">سياسية</router-link></li>
                  <li><router-link to="Economie">اقتصادية</router-link></li>
                  <li><router-link to="Article">مقالات</router-link></li>
                  <li><router-link to="Sport">رياضة</router-link></li>
                </ul>
              </div>
              <div class="gap-0"></div>
            </div>
            </div>
            <!--end pagination-->
          </div>
          <!-- end left column -->

          <!-- start right column -->
          <aside class="col-md-4 end-sidebar-lg">
            <!-- sidebar sticky start -->
            <div class="sticky">
              <!--widget start-->
              <aside class="widget">
                <!-- block title -->
                <div class="block-title-4">
                  <h4 class="h5 title-arrow arabic-kufi">
                    <span>اقتصادي</span>
                  </h4>
                </div>
                <!-- block content -->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-4" v-for="publish in economie4" :key="publish.id">
                    <div class="row">
                      <!--thumbnail-->
                      <div class="col-3 col-md-4 pe-2 pe-md-0">
                        <div class="ratio_110-77 image-wrapper">
                          <a @click="getFeed(publish)">
                            <img class="img-fluid pointer" :src="publish.PostImage || '../../assets/lazy-empty.png'" alt="وصف الصورة">
                          </a>
                        </div>
                      </div>
                      <!-- title & date -->
                      <div class="col-9 col-md-8">
                        <div class="card-body pt-0">
                          <h3 class="card-title h6 h5-sm h6-md arabic-kufi pointer">
                            <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,70) }}</a>
                          </h3>
                          <div class="card-text small text-muted arabic-kufi">
                            <time datetime="2019-10-16">{{ publish.PostingDate.substring(0,10) }}</time>
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
              <!--End widget-->
              <!-- custom post -->
              <aside class="widget">
                <div class="block-title-4">
                  <h4 class="h5 title-arrow arabic-kufi"><span>مزيد من اخر الاخبار</span></h4>
                </div>
                <!--style 2-->
                <div class="small-post">
                  <!--post list-->
                  <article class="card card-full hover-a mb-2" v-for="publish in lastnews1" :key="publish.id">
                    <div class="card-body pt-0">
                      <!--title-->
                      <h3 class="card-title h5 arabic-kufi pointer">
                        <a @click="getFeed(publish)">{{ publish.PostTitle.substring(0,90) }}</a>
                      </h3>
                      <!--date-->
                      <div class="card-text small text-muted">
                        <time datetime="2019-06-16">{{ publish.PostingDate.substring(0,10) }}</time>
                      </div>
                    </div>
                  </article>
                  <!--post list-->
                </div>
                <div class="gap-0"></div>
              </aside>
            </div>
            <!--end Sidebar sticky-->
          </aside>
          <!-- end right column -->
        </div>
     
      </div>
    </main>
    <!--End Content-->
        
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { watch , watchEffect} from 'vue'
import { useMeta, useActiveMeta } from 'vue-meta'
// import { useMeta } from "vue-meta";
export default {
  name: "HomePage",
   data() {
    return {
      // Economie 
      // policy2: null,
      // policy3: null,
      // policy4: null,
      // Economie 
      // economie: null,
      // economie1: null,
      // economie2: null,
      // economie3: null,
      // economie4: null,
      // Sport 
      // sport: null,
      // sport1: null,
      // Articles
      articles: null,
      // Last News
      // lastnews: null,
      // lastnews1: null,
    };
  },
  mounted() {
    // policy //////////////////
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=1&OFFSET=8')
    //   .then((response) => (this.policy2 = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=3&OFFSET=9')
    //   .then((response) => (this.policy3 = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=7&OFFSET=16')
    //   .then((response) => (this.policy4 = response.data.getPostbyCateogry));
    // Economie //////////////////
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=1&OFFSET=0')
    //   .then((response) => (this.economie = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=3&OFFSET=1')
    //   .then((response) => (this.economie1 = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=1&OFFSET=4')
    //   .then((response) => (this.economie2 = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=5&OFFSET=5')
    //   .then((response) => (this.economie3 = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=4&OFFSET=10')
    //   .then((response) => (this.economie4 = response.data.getPostbyCateogry));
    // Sport //////////////////
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=4&LIMIT=1&OFFSET=0')
    //   .then((response) => (this.sport = response.data.getPostbyCateogry));
    // axios
    //   .get('getPostbyCateogry.php?getPostbyCateogry&term_id=4&LIMIT=4&OFFSET=1')
    //   .then((response) => (this.sport1 = response.data.getPostbyCateogry));

    // Articles //////////////////
    axios
      .get('getPostbyCateogry.php?getPostbyCateogry&term_id=3&LIMIT=5&OFFSET=0')
      .then((response) => (this.articles = response.data.getPostbyCateogry));
    // Last News
    // axios
    //   .get('getPost.php?getPost&LIMIT=5&OFFSET=0')
    //   .then((response) => (this.lastnews = response.data.getPost));
    // axios
    //   .get('getPost.php?getPost&LIMIT=4&OFFSET=5')
    //   .then((response) => (this.lastnews1 = response.data.getPost));
  },
  async setup() {
     const router = useRouter();
     const route = useRoute();

    const carousel = ref([]);
    const card = ref([]);
    const lastnews = ref([]);
    const lastnews1 = ref([]);
    const policy = ref([]);
    const policy1 = ref([]);
    const policy2 = ref([]);
    const policy3 = ref([]);
    const policy4 = ref([]);
    const economie = ref([]);
    const economie1 = ref([]);
    const economie2 = ref([]);
    const economie3 = ref([]);
    const economie4 = ref([]);
    const sport = ref([]);
    const sport1 = ref([]);
    
   

    const { meta } = useMeta({
      title: 'الصفحة الرئيسية',
    })

    watchEffect(() => {
      const counterValue = carousel.value
      meta.description = `Counted ${counterValue} times`
    })

    await axios.get("getPost.php?getPost&LIMIT=20&OFFSET=0").then((response) => {
      carousel.value = response.data.getPost.slice(0,5);
      card.value = response.data.getPost.slice(5,9);
      lastnews.value = response.data.getPost.slice(9,14);
      lastnews1.value = response.data.getPost.slice(14,19);
    });
    await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=20&OFFSET=0").then((response) => {
      policy.value = response.data.getPostbyCateogry.slice(0,2);
      policy1.value = response.data.getPostbyCateogry.slice(2,8);
      policy2.value = response.data.getPostbyCateogry.slice(8,9);
      policy3.value = response.data.getPostbyCateogry.slice(9,12);
      policy4.value = response.data.getPostbyCateogry.slice(12,19);
    });
    await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=2&LIMIT=20&OFFSET=0").then((response) => {
      economie.value = response.data.getPostbyCateogry.slice(0,1);
      economie1.value = response.data.getPostbyCateogry.slice(1,4);
      economie2.value = response.data.getPostbyCateogry.slice(4,5);
      economie3.value = response.data.getPostbyCateogry.slice(5,10);
      economie4.value = response.data.getPostbyCateogry.slice(10,14);
    });
    await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=4&LIMIT=5&OFFSET=0").then((response) => {
      sport.value = response.data.getPostbyCateogry.slice(0,1);
      sport1.value = response.data.getPostbyCateogry.slice(1,5);
    });
    
    const getFeed = (publish) => {
      router.push({ name: "Reads", params: { id: publish.id } });
      // const PostTitle = publish.PostTitle
      // console.log("PostTitle ====== " + PostTitle);
    };

    //  useMeta({
    //   title: 'الحقيقة ديلي برس - الرئيسية',
    //   htmlAttrs: {
    //     lang: 'en',
    //     amp: true
    //   }
    // })
        // const carousel = await axios.get("getPost.php?getPost&LIMIT=5&OFFSET=0")
        //   .then((response) => { return response.data.getPost; });
        // const card = await axios.get("getPost.php?getPost&LIMIT=4&OFFSET=5")
        //   .then((response) => { return response.data.getPost; });
        // const policy = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=2&OFFSET=0")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        // const policy1 = await axios.get("getPostbyCateogry.php?getPostbyCateogry&term_id=1&LIMIT=6&OFFSET=2")
        //   .then((response) => { return response.data.getPostbyCateogry; });
        return {
           carousel,
           card,
           lastnews,
           lastnews1,
           policy,
           policy1,
           policy2,
           policy3,
           policy4,
           economie,
           economie1,
           economie2,
           economie3,
           economie4,
           sport,
           sport1,
           getFeed
        };
   },
  //  methods: {
  //   getFeed: function (publish) {
  //     this.$router.push({ name: "Reads", params: { id: publish.id } });
  //     // window.localStorage.setItem('title', publish.PostTitle );
  //     // window.localStorage.setItem('PostImage', publish.PostImage );
  //     // this.$cookie.setCookie('Read_Content_id', publish.id)
  //     // this.$router.push({ name: "Read" });
  //   },
  // },
};
</script>

<style scoped>

.arabic-kufi {
  font-family: 'Droid Arabic Kufi', serif;
}
.pointer {
  cursor: pointer;
}
</style>
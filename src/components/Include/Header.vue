<template>
<!--Header start-->
    <header class="header">
      <!--top mobile menu start-->
      <div class="top-menu bg-white">
        <div class="container">
          <!--Navbar Mobile-->
          <nav class="navbar navbar-expand d-lg-none navbar-light px-0">
            <div id="navbar-mobile" class="collapse navbar-collapse nav-top-mobile">
              <!--Top left menu-->
              <ul class="navbar-nav ">
                <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/About">معلومات عنا</router-link></li>
                <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/Contact">اتصل بنا</router-link></li>
              </ul>
              <!--Top right menu-->
              <ul class="navbar-nav ms-auto text-center">
                <li class="nav-item"><a class="nav-link" href="https://facebook.com/الحقيقة-Al-hagega-108813714732055/" target="_blank" rel="noopener noreferrer" aria-label="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-facebook Onerem" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a></li>
                <li class="nav-item"><a class="nav-link" href="https://twitter.com/hagega" target="_blank" rel="noopener noreferrer" aria-label="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-twitter Onerem" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a></li>
                <li class="nav-item"><a class="nav-link" href="https://instagram.com/hagega" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="Onerem" viewBox="0 0 512 512"><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
                </a></li>
              </ul>
              <!--end top right menu-->
            </div>
          </nav>
          <!-- End Navbar Mobile-->
        </div>
      </div>
      <!-- end top mobile menu -->

      <!-- top menu -->
      <div class="mobile-sticky fs-6 bg-secondary">
        <div class="container">
          <!--Navbar-->
          <nav class="navbar navbar-expand-lg navbar-dark px-0 py-0">
            <!--Hamburger button-->
            <a id="showStartPush" aria-label="sidebar menu" class="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0" href="javascript:;">
              <span class="hamburger-icon">
                <span></span><span></span><span></span><span></span>
              </span>
            </a>
            <!-- Mobile logo -->
            <router-link to="/">
              <img class="mobile-logo img-fluid d-lg-none mx-auto" src="../../assets/white.png" alt="موقع ويب الشعار">
            </router-link>
            <!--Right Toggle Button-->
            <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" class="Onehaverem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"/><line x1="338.29" y1="338.29" x2="448" y2="448" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/></svg>
            </button>
            <!--Top Navbar-->
            <div id="navbarTogglerDemo" class="collapse navbar-collapse">
              <!-- Time -->
              <div class="date-area d-none d-lg-block">
                <time class="navbar-text me-2" datetime="2019-10-28">{{ timestamp }}</time>
              </div>
              <!--Top left menu-->
              <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link active arabic-kufi" to="/">الصفحة الرئيسية</router-link></li>
                <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/About">معلومات عنا</router-link></li>
                <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/Contact">اتصل بنا</router-link></li>
              </ul>
              <!--end top left menu-->
              <!--Top right menu-->
              <ul class="navbar-nav ms-auto text-center">
                <li class="nav-item"><a class="nav-link" href="https://facebook.com/الحقيقة-Al-hagega-108813714732055/" target="_blank" rel="noopener noreferrer" aria-label="facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook Onerem" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a></li>
                <li class="nav-item"><a class="nav-link" href="https://twitter.com/hagega" target="_blank" rel="noopener noreferrer" aria-label="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter Onerem" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a></li>
                <li class="nav-item"><a class="nav-link" href="https://instagram.com/hagega" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" class="Onerem" fill="currentColor" viewBox="0 0 512 512"><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
                </a></li>
              </ul>
              <!--end top right menu-->
            </div>
          </nav>
          <!-- End Navbar -->
          <!--search mobile-->
          <div class="collapse navbar-collapse col-12 py-2" id="navbarTogglerDemo2">
            <form class="form-inline" action="#">
              <div class="input-group w-100 bg-white">
                <input type="text" class="form-control border border-end-0" placeholder="بحث..." aria-label="بحث">
                <div class="input-group-prepend bg-light-dark">
                  <button class="btn bg-transparent border-start-0 input-group-text border" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="Onerem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"/><line x1="338.29" y1="338.29" x2="448" y2="448" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--end search mobile-->
        </div>
      </div>
      <!--end top menu-->

      <!--start second header-->
      <div class="second-header">
        <div class="container">
          <div class="row">
            <!--Left content logo-->
            <div class="col-lg-4">
              <div id="main-logo" class="main-logo my-2 my-lg-4 d-none d-lg-block">
                <router-link class="navbar-brand" to="/">
                  <img class="img-fluid" src="../../assets/logo.png" alt="موقع ويب الشعار">
                </router-link>
              </div>
            </div>
            <!--Right content ads-->
            <div class="col-lg-8">
              <div class="my-2 my-md-3 my-lg-4 d-none d-md-block text-center">
                <a href="#" target="_blank">
                  <!-- <img class="img-fluid bg-light" src="../assets/728-demo.png" alt="مساحة المعلن"> -->
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End second header-->
    </header>
    <!--End header-->

     <!--Main menu-->
    <div id="showbacktop" class="showbacktop full-nav bg-white border-none border-lg-1 border-bottom shadow-b-sm py-0">
      <div class="container">
        <nav id="main-menu" class="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0">
          <!--Navbar menu-->
          <div id="navbarTogglerDemo1" class="collapse navbar-collapse hover-mode">
            <!-- logo in navbar -->
            <div class="logo-showbacktop">
              <router-link to="/">
                <img class="img-fluid" src="../../assets/logo.png" alt="موقع ويب الشعار">
              </router-link>
            </div>

            <!--left main menu start-->
            <ul id="start-main" class="navbar-nav main-nav navbar-uppercase first-start-lg-0 arabic-kufi">
              
              <li class="nav-item "><router-link class="nav-link" to="/">الصفحة الرئيسية</router-link></li>
              <!--dropdown menu-->
              <li class="nav-item"><router-link class="nav-link" to="/Political">سياسية</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/Economie">اقتصاد</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/Sport">رياضية</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/Article">مقالات</router-link></li>              
              <!-- <li class="nav-item"><router-link class="nav-link" to="Accidents">حوادث</router-link></li> -->
            </ul>
            <!--end left main menu-->

            <!--Search form-->
            <div class="navbar-nav ms-auto d-none d-lg-block">
              <div class="search-box">
                <!--hide search-->
                <div class="search-menu no-shadow border-0 py-0">
                  <form class="form-src form-inline" action="#">
                    <div class="input-group">
                      <input type="text" class="form-control end-0" name="keywords" value="" placeholder="Search..." aria-label="search">
                       <span class="icones">
                          <svg xmlns="http://www.w3.org/2000/svg" class="ms-n4 Onerem" fill="currentColor" viewBox="0 0 512 512"><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"/><line x1="338.29" y1="338.29" x2="448" y2="448" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/></svg>
                       </span>
                    </div>
                  </form>
                </div>
                <!--end hide search-->
              </div>
            </div>
            <!--end search form-->
          </div>
          <!--End navbar menu-->
        </nav>
      </div>
    </div>
    <!-- End main menu -->

    <!-- sidebar mobile menu -->
    <div class="mobile-side">
      <!--Left Mobile menu-->
      <div id="back-menu" class="back-menu back-menu-start">
        <span class="hamburger-icon open">
          <svg class="bi bi-x Twoerem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
          </svg>
        </span>
      </div>

      <nav id="mobile-menu" class="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white">
        <!-- mobile menu content -->
        <div class="mobile-content mb-auto">
          <!--logo-->
          <div class="logo-sidenav p-2">
            <router-link to="/">
              <img src="../../assets/logo.png" class="img-fluid" alt="شعار">
            </router-link>
          </div>
          <!--navigation-->
          <div class="sidenav-menu">
            <nav class="navbar navbar-inverse">
              <ul id="side-menu" class="nav navbar-nav list-group list-unstyled side-link">
                <li class="menu-item nav-item arabic-kufi"><router-link class="nav-link active list-group-item" to="/">الصفحة الرئيسية</router-link></li>
                <li class="menu-item nav-item arabic-kufi"><router-link class="nav-link list-group-item" to="/Political">سياسية</router-link></li>
                <li class="menu-item nav-item arabic-kufi"><router-link class="nav-link list-group-item" to="/Economie">اقتصاد</router-link></li>
                <li class="menu-item nav-item arabic-kufi"><router-link class="nav-link list-group-item" to="/Sport">رياضية</router-link></li>
                <li class="menu-item nav-item arabic-kufi"><router-link class="nav-link list-group-item" to="/Article">مقالات</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- copyright mobile sidebar menu -->
        <!-- <div class="mobile-copyright mt-5 text-center arabic-kufi">
          <p>حقوق النشر <a href="https://www.byte.sd/">Byte Co.Ltd</a> - جميع الحقوق محفوظة</p>
        </div> -->
      </nav>
    </div>
    <!-- end sidebar mobile menu -->
</template>

<script>

export default {
   name: 'Header',
   data() {
     return {
        timestamp: ""
     }
    },
    methods: {
        getNow: function() {
          const today = new Date();
          const date = today.toLocaleDateString('ar-EG-u-nu-latn',{weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
          // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          const dateTime = date ;
          this.timestamp = dateTime;
        }
    },
    mounted() {
      let externalScript = document.createElement('script')
      externalScript.setAttribute('src', '/assets/js/theme-rtl.js')
      document.head.appendChild(externalScript)
    },
}
</script>

<style scoped>

.arabic-kufi {
  font-family: 'Droid Arabic Kufi', serif;
}

.Onerem {
  width: 1rem;
  height: 1rem
}
.Onehaverem {
  width: 1.5rem;
  height: 1.5rem
}
.Twoerem {
  width: 2rem;
  height: 2rem
}
</style>
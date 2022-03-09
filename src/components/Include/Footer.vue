<template>
<!--Footer start-->
    <footer>
      <!-- footer copyright menu -->
      <div class="footer-copyright bg-secondary">
        <div class="container">
          <!--Navbar-->
          
          <nav class="navbar navbar-expand navbar-dark px-0">
            <!--footer left menu-->
            <ul class="navbar-nav footer-nav text-center first-start-lg-0">
              <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/About">حول</router-link></li>
              <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/Contact">اتصل</router-link></li>
              <li class="nav-item"><router-link class="nav-link arabic-kufi" to="/About">شروط الاستخدام</router-link></li>
            </ul>
            <!--end footer left menu-->
            <!-- footer copyright -->
            <ul class="navbar-nav ms-auto text-center">
              
              <li class="d-inline navbar-text"> {{ year }} , made by © <a href="https://www.byte.sd/">Byte Co.Ltd</a> - for a better web</li> 
            </ul>
            <!-- end footer copyright -->
          </nav>
          <!-- End Navbar -->
        </div>
      </div>
      <!--end copyright menu-->
    </footer>
    <!-- End Footer -->
</template>

<script>
export default {
   name: 'Footer',
   data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
.arabic-kufi {
  font-family: 'Droid Arabic Kufi', serif;
}
</style>
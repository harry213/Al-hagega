<template>
<!--Content start-->
    <main id="content">
      <div class="container">
        <div class="row">
          <!--breadcrumb-->
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb u-breadcrumb pt-3 px-0 mb-0 bg-transparent small">
                <li class="breadcrumb-item arabic-kufi"><router-link to="/">الرئيسية</router-link></li>
                <li class="breadcrumb-item active d-none d-md-block arabic-kufi" aria-current="page">حول صحيفة الحقيقة ديلي برس</li>
              </ol>
            </nav>
          </div>
          <!--end breadcrumb-->
          <!--content-->
          <div class="col-12">
            <div class="post-title text-center">
              <h1 class="h1 display-4-md display-3-lg mt-2 arabic-kufi"> صوت الحق والانسانية  </h1>
              <hr class="hr-after mx-auto">
            </div>
            <div class="entry-content post-content post-page">
              <div class="col-lg-4">
              <div id="main-logo" class="main-logo my-2 my-lg-4 d-none d-lg-block">
                <router-link class="navbar-brand" to="/">
                  <img class="img-fluid align-start" src="../../assets/logo.png" alt="موقع ويب الشعار">
                </router-link>
              </div>
            </div>
              <!-- <img class="img-fluid align-start" src="../assets/logoAbut.png"> -->
              <p class="arabic-kufi">صحيفة سياسية ، تقدم اخبار سياسية عن الوضع الراهن السودانى بصورة دورية تشمل جميع انحاء الوطن ، كما تغطى الاحداث السياسية فى مناطق النزاعات مستعينا بكوادر صحفية مؤهلة . </p>
              <p class="arabic-kufi">نسعى ونعد دائماً لتقديم خدمة متميزة ، ونقدم لمتابعي (صحيفة الحقيقة ديلي برس) أدق المعلومات بموضوعية وتوازن وإنصاف.</p>
              <p class="arabic-kufi">نترك لمتابعينا  مطلق الحرية في إختيار ما يرونه الأصلح والأكثر نفعاً لهم دون توجيه بالتصريح او بالتلميح</p>
              <p class="arabic-kufi">تعاهدنا نحن مجموعة الصحفيون العاملون في ( صحيفة الحقيقة ديلي برس ) على المُضي في تقديم خدمة إعلامية متكاملة، أساسها الحرية المطلقة، والوقوف على مسافة واحدة من الجميع، وإقرار حق الناس في التعبير عن آراءهم ، وحقهم في الحصول على المعلومات في ظل إعلام تعددي حُر، نزيه ومستقل؛ قائم على قواعد ومعايير مهنية أخلاقية من أجل الوصول إلى حياة ديمقراطية مستقرة.</p>
              <div class="gap-3"></div>
            </div>
          </div>
          <!--end content-->
        </div>
      </div>
    </main>
    <!--End Content-->
</template>

<script>
export default {
   name: 'AboutView'
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
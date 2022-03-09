<template>
      <!--Content start-->
    <main id="content">
      <div class="container">
        <div class="row">
          <!--breadcrumb-->
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb u-breadcrumb pt-3 px-0 mb-0 bg-transparent small">
                <li class="breadcrumb-item">
                  <router-link to="/">الصفحة الرئيسية</router-link>
                </li>
                <li class="breadcrumb-item active d-none d-md-block" aria-current="page">اتصل بنا</li>
              </ol>
            </nav>
          </div>
          <!--end breadcrumb-->
          <!--content-->
          <div class="col-md-8">
            <div class="post-title">
              <h1 class="h1 display-4-md display-3-lg mt-2">Contact Us</h1>
            </div>
            <div class="post-content mb-5">
              <p>At Choice you always talk to a human! Have questions about background screening? Our entire team receives specialized training regularly to ensure you're receiving the best information possible. From basic questions to complex compliance inquiries, we're here to help!
              </p>
              <div class="pb-2 mt-3 mt-md-4">
                <!--form start-->
                <form class="needs-validation" action="https://demo.bootstrap.news/bootnews/html/pages/contact.html" novalidate>
                  <div class="row mt-3">
                    <div class="col-lg-6">
                      <div class="mb-4">
                        <input type="text" class="form-control" aria-label="first name" placeholder="First name" required>
                        <div class="invalid-feedback">
                          Please insert first name.
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <input type="text" class="form-control" aria-label="last name" placeholder="Last name">
                      <div class="invalid-feedback">
                        Please insert lastname.
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <input name="email" class="form-control" aria-label="email address" placeholder="Email address" type="email" required>
                    <div class="invalid-feedback">
                      Please insert email.
                    </div>
                  </div>
                  <div class="mb-4">
                    <input name="website" class="form-control" aria-label="website url" placeholder="Website url" type="text">
                  </div>
                  <div class="mb-4">
                    <input name="subject" class="form-control" aria-label="subject" placeholder="Subject" type="text" required>
                    <div class="invalid-feedback">
                      Please insert subject.
                    </div>
                  </div>
                  <div class="mb-4">
                    <textarea class="form-control" aria-label="insert messages" placeholder="Insert your messages" rows="4" required></textarea>
                    <div class="invalid-feedback">
                      Please insert your messages.
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="custom-control mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="remember" required>
                      <label class="form-check-label" for="remember">I already read and accept <a href="term-of-use.html" target="_blank">Term of use</a></label>
                      <div class="invalid-feedback">
                        You must accept term of use.
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit messages</button>
                  </div>
                </form>
                <!--end form-->
              </div>
            </div>
          </div>
          <!--end content-->

          <!--right sidebar-->
          <aside class="col-md-4 end-sidebar-lg">
            <aside class="widget">
              <!--block title-->
              <div class="block-title-6 pt-0 mt-3 mt-md-0">
                <h4 class="h5 border-primary border-2">
                  <span class="bg-primary text-white">Contact info</span>
                </h4>
              </div>
              <!--address-->
              <div class="card">
                <div class="bg-themes p-3">
                  <address>
                    <b>BootNews Inc</b>
                    <p>Amphitheatre, Mountain View<br>
                      San Francisco, CA 9321<br>
                      P: (123) 456-7890
                    </p>
                  </address>
                  <br>
                  <b>Contact us</b>
                  <p>Phone: 249917174406
                    <br> Fax: 249917174406
                    <br> Email: mustafaharry.byte@gmail.com
                  </p>
                </div>
              </div>
              <!--end address-->
              <div class="gap-15"></div>
            </aside>

            <aside class="widget">
              <!--block title-->
              <div class="block-title-6">
                <h4 class="h5 border-primary border-2">
                  <span class="bg-primary text-white">Maps</span>
                </h4>
              </div>
              <div class="card">
                <div class="card-body responsive-maps">
                  <map name="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794.04243726306!2d-119.85903477289443!3d36.710296381490494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946111cfb76abf%3A0xff6a128250eb9d28!2sWest+Park%2C+CA+93706%2C+USA!5e0!3m2!1sen!2sid!4v1541399800047" width="400" height="300" allowfullscreen></iframe>
                  </map>
                </div>
              </div>
            </aside>
          </aside>
          <!--end right sidebar-->
        </div>
      </div>
    </main>
    <!--End Content-->
</template>

<script>
export default {
   name: 'ContactView',
}
</script>

<style>

</style>
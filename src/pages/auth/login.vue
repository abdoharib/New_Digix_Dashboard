<template>
  <div class="container-fluid" dir="rtl">
    <div class="row">
      <div
        class="col-xl-7 b-center bg-size"
        :style="{
          backgroundImage:
            'url(' + require('../../assets/images/login/1.jpg') + ')',
        }"
        style="
          background-size: cover;
          background-position: center center;
          display: block;
        "
      >
        <img
          class="bg-img-cover bg-center"
          src="../../assets/images/login/1.jpg"
          alt="looginpage"
          style="display: none"
        />
      </div>
      <div class="col-xl-5 p-0 " >
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-center">
                <img
                  class="img-fluid for-light"
                  width="100"
                  src="../../assets/images/logo/logo@2x.svg"
                  alt="looginpage"
                />
                <!-- <img
                  width="200"
                  class="img-fluid for-dark"
                  src="../../assets/images/logo/logo-dark.png"
                  alt="looginpage"
                /> -->
              </a>
            </div>
            <div class="login-main login-form-card text-left text-right">
              <form class="theme-form" @submit.prevent="handleSubmit">
                <h4>تسجيل الدخول</h4>
                <p>أدخل اسم المستخدم وكلمة المرور</p>
                <div class="form-group">
                  <label class="col-form-label">اسم المستخدم</label>
                  <input
                    class="form-control"
                    v-model="username"
                    :class="{
                      'is-invalid': submitted && !username,
                    }"
                    type="text"
                    required=""
                    placeholder="محمد "
                  />
                  <div v-show="submitted && !username" class="invalid-feedback">
                    اسم المستخدم مطلوب
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">كلمة السر</label>
                  <input
                    v-model="password"
                    class="form-control"
                    :type="type"
                    name="login[password]"
                    required=""
                    placeholder="*********"
                    :class="{
                      'is-invalid': submitted && !password,
                    }"
                  />
                  <div v-show="submitted && !password" class="invalid-feedback">
                    كلمة المرور مطلوبة
                  </div>
                  <div class="show-hide" @click="showPassword">
                    <span class="show"> </span>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1">تذكرني</label>
                  </div>
                  <button
                    class="btn btn-primary btn-block"
                    :disabled="loggingIn"
                  >
                    الدخول
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/firebase-messaging";
export default {
  name: "login",
  data() {
    return {
      type: "password",
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
  },
  methods: {
    showPassword: function () {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    async handleSubmit() {
      const { dispatch } = this.$store;
      this.submitted = true;
      const { username, password } = this;

      if (username && password) {
        dispatch("authentication/login", { username, password })
          .then((response) => {
            this.$toasted.show(" تمت العملية بنجاح ", {
              theme: "outline",
              position: "top-right",
              type: "success",
              duration: 2000,
            });
            this.$router.replace("/dashboard/overview");
          })
          .catch((error) => {
            console.log('jj'+error);
            this.$toasted.show(error.message, {
              theme: "outline",
              position: "top-right",
              type: "error",
              duration: 2000,
            });
          });
      }
    },
  },
};
</script>
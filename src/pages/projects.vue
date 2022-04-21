<template>
  <div>
    <project-builder/>
    <Breadcrumbs main="" title="الإعمال" />
    <div class="container-fluid">
      <div class="email-wrap bookmark-wrap">
        <div class="row">
          <div class="col-xl-3 box-col-6">
            <div class="email-left-aside">
              <div class="card">
                <div class="card-body">
                  <div class="email-app-sidebar left-bookmark">

                    <ul class="nav main-menu" role="tablist">

                      <li class="nav-item">

                        <div>

                          <button
                            id="show-btn"
                            class="badge-light-primary btn-block btn-mail"
                            type="button"
                            @click="$bvModal.show('bv-modal-example')"
                          >
                            <feather type="plus-circle"></feather>عمل جديد
                          </button>


                          <b-modal
                            no-close-on-backdrop
                            @hide="project = {}"
                            id="bv-modal-example"
                            centered
                            size="lg"
                            hide-footer
                          >
                            <template #modal-title>
                              إضافة عمل الى معرض الاعمال
                            </template>


                            <div class="modal-body">
                              <form
                                class="form-bookmark needs-validation"
                                id="bookmark-form"
                                novalidate=""
                              >

                                <div class="form-row">

                                  <div class="form-group col-md-12">
                                    <label for="bm-weburl">الرابط</label>
                                    <input
                                      class="form-control"
                                      id="bm-weburl"
                                      v-model="project.link"
                                      type="text"
                                      required=""
                                      autocomplete="off"
                                    />
                                  </div>

                                  <div class="form-group col-md-12">
                                    <label for="bm-title">العنوان</label>
                                    <input
                                      class="form-control"
                                      id="bm-title"
                                      v-model="project.title"
                                      type="text"
                                      required=""
                                      autocomplete="off"
                                    />
                                  </div>

                                  <div class="form-group col-md-12">
                                    <label>الوصف</label>
                                    <vue-editor :editor-toolbar="customToolbar" v-model="project.description"></vue-editor>
                                  </div>

                                  <div class="form-group col-md-12">
                                    <label class="col-form-label pt-0"
                                      >صورة العمل<span class="font-danger"
                                        >*</span
                                      ></label
                                    >
                                    <input
                                      class="form-control"
                                      type="file"
                                      @input="toBase64"
                                    />
                                  </div>

                                  <div class="form-group col-md-6 mb-0">
                                    <label>الحالة</label>
                                    <select
                                      class="js-example-basic-single"
                                      id="bm-group"
                                      v-model="project.status"
                                    >
                                      <option value="1">ظاهر</option>
                                      <option value="0">مخفي</option>
                                    </select>
                                  </div>

                                  <div class="form-group col-md-12 mb-0">
                                    <label>التصنيفات</label>
                                    <div>
                                      <project-catagory :project="project" type = 'marketing' />
                                      <project-catagory :project="project" type = 'branding'  />
                                      <project-catagory :project="project" type = 'dev' />
                                    </div>
                                  </div>
                                  
                                  <!--
                                  <div class="form-group col-md-12 mb-0">
                                    <label>التصنيف</label>

                                    
                                   
                                   
                                    <select
                                      class="js-example-disabled-results"
                                      id="bm-collection"
                                      v-model="project.category_id"
                                    >
                                      <option value="1">
                                        تصميم وتطوير التطبيقات
                                      </option>
                                      <option value="2">
                                        حلول الأعمال الرقمية
                                      </option>
                                      <option value="3">
                                        بناء الهوية التجارية
                                      </option>
                                      <option value="4">التسويق الرقمي</option>
                                    </select>
                                  </div> -->

                                </div>
                                <!-- <input id="index_var" type="hidden" value="6" /> -->
                                <button
                                  class="btn btn-secondary"
                                  id="Bookmark"
                                  type="button"
                                  :disabled="loading"
                                  @click="
                                    project.id
                                      ? updateProject()
                                      : submitProject()
                                  "
                                >
                                  حفظ
                                </button>
                                <button
                                  class="btn btn-primary ml-2"
                                  type="button"
                                  data-dismiss="modal"
                                  @click="
                                    project = {};
                                    $bvModal.hide('bv-modal-example');
                                  "
                                >
                                  إلغاء
                                </button>
                              </form>
                            </div>

                          </b-modal>


                        </div>

                      </li>

                      <li class="nav-item">
                        <span class="main-title"> حالة العمل</span>
                      </li>

                      <li>
                        <a
                          @click="sortProjects('all')"
                          id="pills-created-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-created"
                          aria-selected="true"
                          ><span class="title">جميع المشاريع</span></a
                        >
                      </li>

                      <li>
                        <a
                          @click="sortProjects(0)"
                          id="pills-created-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-created"
                          aria-selected="true"
                          ><span class="title">مخفي</span></a
                        >
                      </li>

                      <li>
                        <a
                          @click="sortProjects(1)"
                          class="show"
                          id="pills-favourites-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-favourites"
                          aria-selected="false"
                          ><span class="title">ظاهر </span></a
                        >
                      </li>

                      <li>
                        <hr />
                      </li>

                      <li>
                        <span class="main-title">
                          التصنيفات<span class="pull-right"
                            ><a
                              href="#"
                              data-toggle="modal"
                              data-target="#createtag"
                              ><feather
                                type="plus-circle"
                                @click="$bvModal.show('tag-modal-example')"
                              ></feather></a></span
                        ></span>
                      </li>

                      <li>
                        <a
                          @click="filterProject(1)"
                          class="show"
                          id="pills-notification-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-notification"
                          aria-selected="false"
                          ><span
                            class="title"
                            :class="filter == 1 ? 'text-primary' : ''"
                          >
                            تصميم وتطوير التطبيقات</span
                          ></a
                        >
                      </li>

                      <li>
                        <a
                          @click="filterProject(2)"
                          class="show"
                          id="pills-newsletter-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-newsletter"
                          aria-selected="false"
                          ><span
                            class="title"
                            :class="filter == 2 ? 'text-primary' : ''"
                          >
                            حلول الأعمال الرقمية</span
                          ></a
                        >
                      </li>

                      <li>
                        <a
                          @click="filterProject(3)"
                          class="show"
                          id="pills-business-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-business-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            :class="filter == 3 ? 'text-primary' : ''"
                          >
                            بناء الهوية التجارية</span
                          ></a
                        >
                      </li>
                      
                      <li>
                        <a
                          @click="filterProject(4)"
                          class="show"
                          id="pills-holidays-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-holidays-tab"
                          aria-selected="false"
                          ><span
                            class="title"
                            :class="filter == 4 ? 'text-primary' : ''"
                          >
                            التسويق الرقمي</span
                          ></a
                        >
                      </li>

                      <li>
                        <a
                          @click="filterProject(0)"
                          :disabled="filter == null"
                          class="show btn badge-light-primary mt-3"
                          id="pills-holidays-tab"
                          data-toggle="pill"
                          href="javascript:void(0)"
                          role="tab"
                          aria-controls="pills-holidays-tab"
                          aria-selected="false"
                        >
                          <span class="title"> إزالة الفلتر</span>
                        </a>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-md-12 box-col-12">
            <div class="email-right-aside bookmark-tabcontent">
              <div class="card email-body radius-left">
                <div class="pl-0">
                  <div class="card mb-0">
                    <div class="card-header d-flex justify-content-between">
                      <h6 class="mb-0">جميع الأعمال</h6>
                      <ul class="row">
                        <li>
                          <a
                            class="grid-bookmark-view pl-2"
                            href="javascript:void(0);"
                            ><feather
                              type="grid"
                              @click="liststyle = !liststyle"
                            ></feather
                          ></a>
                        </li>
                        <li>
                          <a class="list-layout-view" href="javascript:void(0);"
                            ><feather
                              type="list"
                              @click="liststyle = !liststyle"
                            ></feather
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body pb-0">
                      <div
                        class="details-bookmark text-center"
                        v-bind:class="{ 'list-bookmark': liststyle }"
                      >
                        <div class="row" id="bookmarkData">
                          <div
                            class="col-xl-3 col-md-4 xl-50"
                            v-for="(item, index) in filteredProjects"
                            :key="index"
                          >
                            <div
                              class="
                                card card-with-border
                                bookmark-card
                                o-hidden
                              "
                            >
                              <div class="details-website">
                                <img
                                  class="img-fluid"
                                  :src="item.imagePath"
                                  alt=""
                                />
                                <div class="desciption-data">
                                  <div class="title-bookmark">
                                    <h6 class="title_0">{{ item.title }}</h6>
                                    <p class="weburl_0">
                                      {{ item.link }}
                                    </p>
                                    <span class="collection_0">{{
                                      getCategory(item.category_id)
                                    }}</span>
                                    <div class="hover-block">
                                      <ul>
                                        <li>
                                          <a
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#edit-bookmark"
                                            ><feather
                                              type="edit-2"
                                              @click="editMode(item)"
                                            ></feather
                                          ></a>
                                        </li>
                                        <li>
                                          <a href="#" @click="showModal(item)"
                                            ><feather type="link"></feather
                                          ></a>
                                        </li>
                                        <li>
                                          <a href="#"
                                            ><feather
                                              type="trash-2"
                                              @click="deleteMode(item.id)"
                                            ></feather
                                          ></a>
                                        </li>
                                        <li class="pull-right text-right">
                                          <feather type="tag"></feather>
                                        </li>
                                      </ul>
                                    </div>

                                    <div class="content-general">
                                      <p class="desc_0">
                                        {{ item.description }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <b-modal
                          v-if="project.category_id"
                          no-close-on-backdrop
                          @hide="project = {}"
                          id="show-project"
                          size="lg"
                          hide-footer
                        >
                          <div class="modal-body">
                            <div class="card o-hidden">
                              <div
                                class="calender-widget"
                                :style="
                                  'background:url(' +
                                  project.imagePath +
                                  ');background-size: contain;'
                                "
                              >
                                <div class="card-body">
                                  <div class="cal-desc" style="width: 100%">
                                    <div class="cal-date">
                                      <!-- <h5>{{project.created_at.getDay()}}<br />{{project.created_at.getMonth()}}</h5> -->
                                    </div>
                                    <div
                                      style="
                                        background: rgba(44, 50, 63, 0.9);
                                        padding: 20px;
                                        border-radius: 20px;
                                        width: 100%;
                                      "
                                    >
                                      <h4 class="text-primary">
                                        {{ project.title }}
                                      </h4>
                                      <small class="text-white">{{
                                        getCategory(project.category_id)
                                      }}</small>
                                      <p class="mt-1 mb-0 fw-900">
                                        {{ project.description }}
                                      </p>
                                      <a
                                        :href="project.link"
                                        class="text-white fw-700"
                                      >
                                        رابط المشروع</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { VueEditor } from 'vue2-editor';
import ProjectCatagory from "../components/Project_Catagory.vue"
import ProjectBuilder from "../components/ProjectPageBuilder.vue"


export default {
  components: {
      VueEditor,
      ProjectCatagory,
      ProjectBuilder
  },
  data() {
    return {
      project: {
        link: "",
        title: "",
        description: "",
        status: 1,
        category_id: "",
      },
      liststyle: false,
      filter: null,
      filterType: "",
      category_id: 0,
      status: "all",
       customToolbar: [
      ["bold", "italic", "underline"],
       [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }]
    ]
    };
  },
  computed: {
    ...mapGetters("projects", ["AllProjects"]),
    filteredProjects() {
      if (this.filterType == "category_id") {
        if (this.category_id == 0) {
          return this.AllProjects;
        } else {
          return this.AllProjects.filter(
            (item) => item.category_id == this.category_id
          );
        }
      } else {
        if (this.status == "all") {
          return this.AllProjects;
        } else {
          return this.AllProjects.filter((item) => item.status == this.status);
        }
      }
    },
    loading() {
      return this.$store.state.projects.loading;
    },
  },
  methods: {
    ...mapActions("projects", [
      "UpdateProject",
      "GetProjects",
      "AddProject",
      "DeleteProject",
    ]),
    editMode(item) {
      this.project = item;
      this.$bvModal.show("bv-modal-example");
    },
    getCategory(id) {
      let categories = [
        {
          id: 1,
          name: "تصميم وتطوير التطبيقات",
        },
        {
          id: 2,
          name: "حلول الأعمال الرقمية",
        },
        {
          id: 3,
          name: " بناء الهوية التجارية",
        },
        {
          id: 4,
          name: "التسويق الرقمي",
        },
      ];
      let category = categories.filter((item) => item.id == id);

      return category[0].name;
    },
    toBase64(file) {
      console.log(file);
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.target.files[0]);
        reader.onload = () => {
          this.project.image = reader.result; // variable to hold base64 image
          resolve(reader.result);
        };
        reader.onerror = (error) => reject(error);
      });
    },
    deleteMode(id) {
      this.$swal({
        text: "هل انت متأكد من مسح المشروع؟",
        showCancelButton: true,
        confirmButtonText: "نعم",
        confirmButtonColor: "#4466f2",
        cancelButtonText: "إلغاء",
        cancelButtonColor: "#efefef",
        reverseButtons: true,
      }).then((res) => {
        if (res.value) {
          this.DeleteProject(id).then((res) => {
            this.$toasted.show(" تمت العملية بنجاح ", {
              theme: "outline",
              position: "top-right",
              type: "success",
              duration: 2000,
            });
          });
        }
      });
    },
    assignModal(item) {
      this.project = item;
    },
    async showModal(item) {
      await this.assignModal(item)
      this.$bvModal.show("show-project");
    
    },
    submitProject() {
      if (
        this.project.title &&
        this.project.link &&
        this.project.status &&
        this.project.category_id &&
        this.project.description &&
        this.project.image
      ) {
        this.AddProject(this.project)
          .then(() => {
            this.$toasted.show(" تمت العملية بنجاح ", {
              theme: "outline",
              position: "top-right",
              type: "success",
              duration: 2000,
            });
            this.$bvModal.hide("bv-modal-example");
          })
          .catch(() => {
            this.error();
          });
      } else {
        return this.$toasted.show(" الرجاء ملئ كافة الحقول ", {
          theme: "outline",
          position: "top-right",
          type: "error",
          duration: 2000,
        });
      }
    },
    updateProject() {
      if (
        this.project.title &&
        this.project.link &&
        this.project.status &&
        this.project.category_id &&
        this.project.description
      ) {
        this.UpdateProject(this.project)
          .then(() => {
            this.$toasted.show(" تمت العملية بنجاح ", {
              theme: "outline",
              position: "top-right",
              type: "success",
              duration: 2000,
            });
            this.$bvModal.hide("bv-modal-example");
          })
          .catch((err) => {
            console.log(err);
            this.$toasted.show(" حدث خطأ ", {
              theme: "outline",
              position: "top-right",
              type: "error",
              duration: 2000,
            });
          });
      } else {
        return this.$toasted.show(" الرجاء ملئ كافة الحقول ", {
          theme: "outline",
          position: "top-right",
          type: "error",
          duration: 2000,
        });
      }
    },
    filterProject(category_id) {
      this.filterType = "category_id";
      this.category_id = category_id;
      this.filter = category_id;
    },
    sortProjects(status) {
      this.filterType = "status";
      this.status = status;
    },
  },
  created() {
    this.GetProjects();
  },
};
</script>

<style>
.img-fluid {
  max-height: 200px;
}

.ql-formats button{
    margin: 0px !important;
}
</style>
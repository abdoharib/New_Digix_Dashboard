<template>
  <div>
    <Breadcrumbs title="الوظائف" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 project-list">
          <div class="card">
            <div class="row m-0">

              <div class="col-sm-12 p-0">

                <b-tabs content-class="mt-3">

                  <b-tab active>

                    <template v-slot:title>الكل</template>

                    <b-card-text>

                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">

                              <div  class="col-xl-4 col-lg-6" v-for="(job,index) in AllJobs" :key="index" :class="index < 3 ? 'mb-4' : ''">
                               
                                <div class="project-box">

                                 <!-- <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span> -->
                                  <div class="d-flex justify-content-between">
                                    <div>
                                      <h6>{{ job.title }}</h6> 
                                      <div style="margin:0px" class="media">

                                  <!--  <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title=""> -->
                                  
                                    <div class="media-body">
                                      <p> أخر تحديث{{ job.time }}</p>
                                    </div>

                                  </div>
                                    </div>

                                      <b-button style="padding:5px; height:fit-content" @click="OpenUpdatePopup(job)" variant="primary">{{job.status?'اخفاء':'تفعيل'}}</b-button>
                                  </div>  
                                 
                                  


                                  <p>{{ job.description }}</p>

                                  <div class="row details">

                                    <div class="col-6">
                                      <span>طلبات التوظيف</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+job.type">25</div>
            
                                  </div>

                                  <!--
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  -->

                                  <div class="project-status mt-4">

                                    <div class="media mb-0">
                                      <p>20%</p>
                                      <div class="media-body text-right">
                                        <span>من مجموع الطلبات</span>
                                      </div>
                                    </div>

                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-primary'"
                                        role="progressbar"
                                        :style= "{'width': 20+'%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                
                                  </div>

                                  <b-button class="w-100 mt-2" style="padding:5px; height:fit-content; width:100%;" @click="SelectJob(job)" variant="light">تفاصيل</b-button>


                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>

                  </b-tab>

                    <b-tab >

                    <template v-slot:title>مفعل</template>

                    <b-card-text>

                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">

                              <div class="col-xl-4 col-lg-6" v-for="(job,index) in ActiveJobs" :key="index" :class="index < 3 ? 'mb-4' : ''">
                               
                                <div class="project-box">

                                 <!-- <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span> -->
                                  <h6>{{ job.title }}</h6>

                                  <div class="media">

                                  <!--  <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title=""> -->
                                    
                                    <div class="media-body">
                                      <p> أخر تحديث{{ job.time }}</p>
                                    </div>

                                  </div>


                                  <p>{{ job.description }}</p>

                                  <div class="row details">

                                    <div class="col-6">
                                      <span>طلبات التوظيف</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+job.type">25</div>
            
                                  </div>

                                  <!--
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  -->

                                  <div class="project-status mt-4">

                                    <div class="media mb-0">
                                      <p>20%</p>
                                      <div class="media-body text-right">
                                        <span>من مجموع الطلبات</span>
                                      </div>
                                    </div>

                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-primary'"
                                        role="progressbar"
                                        :style= "{'width': 20+'%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                
                                  </div>

                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>

                  </b-tab>

                    <b-tab >

                    <template v-slot:title>غير مفعل</template>

                    <b-card-text>

                      <div class="col-sm-12 p-0">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">

                              <div class="col-xl-4 col-lg-6" v-for="(job,index) in inActiveJobs" :key="index" :class="index < 3 ? 'mb-4' : ''">
                               
                                <div class="project-box">

                                 <!-- <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span> -->
                                  <h6>{{ job.title }}</h6>

                                  <div class="media">

                                  <!--  <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title=""> -->
                                    
                                    <div class="media-body">
                                      <p> أخر تحديث{{ job.time }}</p>
                                    </div>

                                  </div>


                                  <p>{{ job.description }}</p>

                                  <div class="row details">

                                    <div class="col-6">
                                      <span>طلبات التوظيف</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'text-'+job.type">25</div>
            
                                  </div>

                                  <!--
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ml-2">
                                        <p class="f-12">+10 More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  -->

                                  <div class="project-status mt-4">

                                    <div class="media mb-0">
                                      <p>20%</p>
                                      <div class="media-body text-right">
                                        <span>من مجموع الطلبات</span>
                                      </div>
                                    </div>

                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-primary'"
                                        role="progressbar"
                                        :style= "{'width': 20+'%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                
                                  </div>

                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card-text>

                  </b-tab>

                </b-tabs>

              </div>

              <div class="col-sm-6 create-project-btn">
                <div class="text-right">
                  <div class="form-group mb-0 mr-0"></div>
                  <!-- <a class="btn btn-primary" href="">
                    <i data-feather="plus-square"> </i>Create New Project</a
                  > -->
                  <b-button @click="$router.push('jobs-add')" class="mr-2 ml-2" variant="primary">اضافة وظيفة جديدة</b-button>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </div>
    </div>

       <b-modal centered  v-on:ok="UpdateStatus(true)" id="modal-1" title="تغير حالة الوظيفة" ok-title="تعديل" cancel-title="الغاء" class="theme-modal">
        <p>هدا التعديل سيمكن الزوار من رؤية الوظيفة و التقديم عليها</p>
       </b-modal>

        <b-modal centered v-on:ok="UpdateStatus(false)"  id="modal-2" title="تغير حالة الطلب" ok-title="تعديل" cancel-title="الغاء" class="theme-modal">
          <p>هدا التعديل سيمنع الزوار من رؤية او التقديم عل الوظيفة</p>
        </b-modal>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';
  
  export default {
    data(){
      return {
        selected:{}
      };
    },
    computed: {
      ...mapGetters("jobs",[
        "AllJobs",
        "ActiveJobs",
        "inActiveJobs",
        "Selected_job"
      ]),
    },
    methods:{
      ...mapMutations("jobs",[
        "UpdateSelected_job"
      ]),
      ...mapActions("jobs",[
        "UpdateJob",
        "GetJobs"
      ]),
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
      OpenUpdatePopup(job){
        this.selected = JSON.parse(JSON.stringify(job))
        this.$bvModal.show(job.status ? "modal-2" : "modal-1")	
      },
      async UpdateStatus(value){
        this.selected.status = value
        console.log("updated");
        await this.UpdateJob(this.selected)
      },
      SelectJob(job){
        console.log(job);
        this.UpdateSelected_job(job)
        console.log(this.Selected_job);
        this.$router.push("job-edit")
      }
    },
     async created(){
      await this.GetJobs()
    },

  };
</script>

<style scoped>
.custom-switch{
  padding: 0px !important;
  padding-left: 2.5rem !important;
}



</style>

<template>
  <div>
    <Breadcrumbs main="تعديل" title="الوظيفة " />
    <!-- Container-fluid starts-->
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <px-card>
                  <div slot="with-padding">
                    <div class="form theme-form">

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>عنوان الوظيفة</label>
                            <input :disabled="!editable" v-model="job.title" style="font-size:20px;" class="form-control" type="text">
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>الوصف الوظيفي</label>
                            <input :disabled="!editable" v-model="job.description" style="font-size:15px;" class="form-control" type="text" >
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>التفاصيل</label>
                            
                              <div v-if="!editable" v-html="job.HTML"></div>
                              <div v-else>
                                <vue-editor v-model="job.HTML"></vue-editor>
                              </div>
                            
                            
                            
                          </div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-0 d-flex justify-content-between">
                            
                            <div>
                              <b-button class="mr-2 ml-2" v-if="editable" @click="saveEditedJob" variant="success">حفظ</b-button>
                              <b-button class="mr-2 ml-2" v-else  @click="setEditTrue" variant="primary">تعديل</b-button>

                              <b-button class="mr-2 ml-2" v-if="!editable" @click="$router.push('jobs')" variant="danger">رجوع</b-button>
                              <b-button class="mr-2 ml-2" v-else  @click="setEditFalse" variant="danger">الغاء</b-button>
                            </div>

                            <b-button class="mr-2 ml-2" v-if="!editable" @click="SetArhivePopup" variant="warning">أرشفة</b-button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </px-card>
              </div>
            </div>
          </div>
          <!-- Container-fluid Ends-->

      <b-modal centered  v-on:ok="ArhiveJob" id="modal-arhive" title="أرشفة الوظيفة" ok-title="ارشفة" cancel-title="الغاء" class="theme-modal">
        <p>! لا يمكن استرجاع معلومات الوظيفة بعد الارشفة</p>
      </b-modal>
  </div>
</template>
<script>

  import { mapGetters, mapActions, mapMutations } from 'vuex';
  import { VueEditor } from 'vue2-editor';

  import 'vue2-dropzone/dist/vue2Dropzone.min.css';

  export default {
    components: {
      VueEditor
    },
    data(){
      return{
        job:{},
        editable:false
      };
    },
    computed:{
      ...mapGetters("jobs",[
        "Selected_job"
      ])
    }, 

    methods:{
         ...mapMutations("jobs",[
        "UpdateSelected_job"
      ]),
        ...mapActions("jobs",[
        "UpdateJob",
        "ArchiveJob"
      ]),
      setEditTrue(){
        this.editable = true
      },
      setEditFalse(){
        this.job = JSON.parse(JSON.stringify(this.Selected_job)) 
        this.editable = false
      },
      async saveEditedJob(){
        if(JSON.stringify(this.job) === JSON.stringify(this.Selected_job)){
          this.setEditFalse()
          return null
        }
        this.UpdateSelected_job(this.job)
        await this.UpdateJob()
        this.setEditFalse()
      },
      SetArhivePopup(){
        this.$bvModal.show("modal-arhive")	
      },
      async ArhiveJob(){
        await this.ArchiveJob()
        this.$router.push("jobs")
      }
    },
    mounted(){
      //this.UpdateSelected_job({})
      console.log(this.Selected_job);
      this.job = JSON.parse(JSON.stringify(this.Selected_job)) 
    },
    unmounted(){
      this.UpdateSelected_job({})
    }
  };
</script>

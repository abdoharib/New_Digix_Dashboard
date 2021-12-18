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
                            <input  v-model="job.title" style="font-size:20px;" class="form-control" type="text" >
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>الوصف الوظيفي</label>
                            <input v-model="job.description" style="font-size:15px;" class="form-control" type="text">
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <div class="form-group">
                            <label>التفاصيل</label>
                            
                             
                                <vue-editor v-model="job.HTML"></vue-editor>                            
                            
                            
                          </div>
                        </div>
                      </div>
                      
                      <div class="row">
                        <div class="col">
                          <div class="form-group mb-0 d-flex justify-content-between">
                            
                            <div>
                              <b-button class="mr-2 ml-2"  @click="SetAddPopup" variant="success">حفظ</b-button>

                              <b-button class="mr-2 ml-2"  @click="$router.push('jobs')" variant="danger">رجوع</b-button>
                            </div>

                        
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

      <b-modal centered  v-on:ok="saveEditedJob" id="modal-add" title="أرشفة الوظيفة" ok-title="اضافة" cancel-title="الغاء" class="theme-modal">
        <p>الوظيفة المضافة ستكون في حالة غير التفعيل اي ستكون غير مرئية</p>
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
        "AddJob",
        "ArchiveJob"
      ]),
       SetAddPopup(){
        this.$bvModal.show("modal-add")	
      },
      async saveEditedJob(){
        if(JSON.stringify(this.job) === JSON.stringify(this.Selected_job)){
          return null
        }
        this.UpdateSelected_job(this.job)
        await this.AddJob()
        this.$router.push("jobs")
      },


    },
    mounted(){
      this.UpdateSelected_job({})
      console.log(this.Selected_job);
      this.job = JSON.parse(JSON.stringify(this.Selected_job)) 
    }
  };
</script>

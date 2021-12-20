<template>
  <div>
    <Breadcrumbs title="طلبات التوظيف" />
    <!-- Container-fluid starts-->
    <div class="container-fluid support-ticket-section">
      <div class="row">
        <div class="col-md-12">
          <px-card :actions="false">
            <div slot="with-padding">

              <b-row align-v="end">

                <b-col style="margin-top: 5px" xl="2">
                  <span style="">filter by String</span>
                  <b-input-group class="">
                    <b-form-input
                      v-model="filter.string"
                      placeholder="Type to Search"
                    ></b-form-input>
                  </b-input-group>
                </b-col>

                <b-col style="margin-top: 5px" xl="2">
                  <span style="">filter by Postion</span>
                  <b-form-select v-model="filter.postion" @change="UpdateJobsFilter">
                    
                    <b-form-select-option :value="''"
                      >none</b-form-select-option
                    >
                    <b-form-select-option
                      v-for="(job, index) in Object.keys(AppsfilteredbyJobs)"
                      :value="job"
                      :key="index"
                      >{{ job }}</b-form-select-option
                    >
                  </b-form-select>
                </b-col>

                <b-col style="margin-top: 5px" xl="4">
                  <span style="">filter by time</span>
                  <div class="d-flex align-items-center">
                    <datepicker
                    input-class="datepicker-here form-control digits datestyle"
                    :format="DateFormater"
                    v-model="filter.dateFilter.from"
                    @input="UpdateDateFilter"
                  ></datepicker>
                  <span class="m-1">الي</span>
                  <datepicker
                    input-class="datepicker-here form-control digits datestyle"
                    :format="DateFormater"
                    v-model="filter.dateFilter.to"
                    @input="UpdateDateFilter"
                  ></datepicker>
                  </div>
                  
                </b-col>

                <b-col style="margin-top: 5px" xl="2">
                  <span>Per Page</span>
                  <b-form-select
                    v-model="perPage"
                    :options="pageOptions"
                  ></b-form-select>
                </b-col>
                <b-col style="margin-top: 5px" xl="1">
                <button @click="Clear" class="btn btn-primary">Clear</button>
                </b-col>
              </b-row>

              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="Items"
                  :fields="tablefields"
                  :filter="filter.string"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(time)="data">
                    {{ new Date(data.item.time).toDateString() }}
                  </template>

                     <template v-slot:cell(interviewDate)="data">
                    {{ data.item.interviewDate && data.item.interviewDate !== "" ? new Date(data.item.interviewDate).toDateString(): 'غير محدد' }}
                  </template>

                  <template v-slot:cell(statusid)="data">
                    <b-button
                    :disabled="data.item.status.id==3 || data.item.status.id==2"
                      @click="SetStatusPopup(data.item)"
                      :variant="colorMaper[data.item.status.id.toString()]"
                      >{{ data.item.status.name }}</b-button
                    >
                  </template>

                  <template v-slot:cell(download)="data">
                    <a
                      class="btn p-1"
                      :href="data.item.file"
                      target="_blank"
                      :download="data.item.name + '_' + data.item.phone"
                    >
                      <feather
                        style="width: 16px; cursor: pointer"
                        type="download"
                      >
                      </feather>
                    </a>
                  </template>
                  <template v-slot:cell(mail)="data">
                    <a
                      class="btn p-1"
                      :href="'mailto:' + data.item.email"
                      target="_blank"
                    >
                      <feather
                        style="width: 16px; cursor: pointer"
                        type="mail"
                      ></feather>
                    </a>
                  </template>
                </b-table>
              </div>

              <b-col md="6" class="p-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="Items.length"
                  :per-page="perPage"
                  class="my-0"
                ></b-pagination>
              </b-col>
            </div>
          </px-card>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
    <b-modal
      id="modal-status"
      v-on:ok="UpdateStatus"
      centered
      title="تغير الحالة"
      ok-title="تعديل"
      cancel-title="الغاء"
      class="theme-modal"
    >
    <div v-if="selected.id == 1" class="d-flex align-items-center m-1 justify-content-between">
      <p>الرجاء تحميل و مراجعة ملف الطلب قبل تغير الحالة</p>
      <b-button 
      class="m-1"      
      @click="DownloadPdf"
      variant="primary"
      >تحميل</b-button>
    </div>

    <div v-if="selected.id == 2" style="margin-bottom:20px !important" class="d-flex align-items-center m-2 justify-content-between">
      <div>
        <p style="font-size:15px" class="m-0 p-0">الرجاء تحديد موعد المقابلة</p>
        <p style="font-size:12px" class="m-0 p-0">سيتم ارسال رسالة  علي بريد المتقدم لاعلامه بالموعد</p>
      </div>
    

      <datepicker
      input-class="datepicker-here form-control digits datestyle"
      :format="DateFormater"
      v-model="interviewdate"></datepicker>

    </div>

      <div
        v-if="Selected_Applicaton.status"
        class="d-flex w-100 justify-content-center align-items-center"
      >
        <b-button
          disabled
          :variant="colorMaper[Selected_Applicaton.status.id.toString()]"
          >{{ Selected_Applicaton.status.name }}</b-button
        >
        <span style="margin: 10px">الي</span>
        <b-form-select
          v-model="selected"
          :variant="colorMaper[Selected_Applicaton.status.id.toString()]"
        >
          <b-form-select-option
            :value="statuse"
            v-for="(statuse, index) in StatusOrder.filter(
              (v, indx) => indx > Selected_Applicaton.status.id
            )"
            :key="index"
          >
            {{ statuse.name }}
          </b-form-select-option>
        </b-form-select>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      maxskill: 100,
      tablefields: [
        { key: "name", label: "Name", sortable: true },
        { key: "phone", label: "Phone", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "note", label: "Note", sortable: true },
        { key: "jobname", label: "Position", sortable: true },
        { key: "time", label: "Time", sortable: true },
        { key: "statusid", label: "Status", sortable: true },
        { key: "interviewDate", label: "Interview Date", sortable: true },
        { key: "download", label: "", sortable: false },
        { key: "mail", label: "", sortable: false },
      ],

      items: {
        all: [],
        postion: [],
        date: [],
        result: [],
      },

      filter: {
        dateFilter: {
          from: "",
          to: "",
        },
        postion: "",
        string: "",
      },

      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      // selected status
      selected: "",
      interviewdate:"",
      // valid status
      StatusOrder: [
        { id: 0, name: "معلق" },
        { id: 1, name: "قيد المراجعة" },
        { id: 2, name: "تم الموافقة" },
        { id: 3, name: "تم الرفض" },
      ],
    };
  },
  computed: {
    ...mapGetters("jobs", ["AllApplicatons", "Selected_Applicaton"]),
    AppsfilteredbyJobs() {
      let filteredApplications = {};

      this.AllApplicatons.map((app) => {
        !filteredApplications[app.jobname]
          ? (filteredApplications[app.jobname] = [])
          : null;
        filteredApplications[app.jobname].push(app);
      });
      console.log(filteredApplications);
      return filteredApplications;
    },

    sortOptions() {
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    colorMaper() {
      return {
        0: "secondary",
        1: "info",
        2: "success",
        3: "danger",
      };
    },
    Items() {
  
        if (this.filter.postion !== ""){
          let result = [];
            result = this.AllApplicatons.filter((value) =>
            this.items.postion.includes(value)
          );
          if(this.items.date.length){
             result = result.filter((value) =>
            this.items.date.includes(value)
          );
          }
          console.log(result);
          return result
        }
        
          if (this.filter.dateFilter.from !== "" || this.filter.dateFilter.to !== ""){
            let result = [];
            result = this.AllApplicatons.filter((value) =>
            this.items.date.includes(value)
          );
          if(this.items.postion.length){
             result = result.filter((value) =>
            this.items.postion.includes(value)
          );
          }
          console.log(result);
          return result
        }


        return this.AllApplicatons;
    },
  },
  methods: {
    ...mapMutations("jobs", ["Update_Application"]),
    ...mapActions("jobs", ["GetApplications", "UpdateApplication"]),
    DateFormater(date) {
      console.log(date);
      return date.toDateString();
    },
    ListofJobs(value) {
      if (value && value !== "") {
        return this.AppsfilteredbyJobs[value]
          ? this.AppsfilteredbyJobs[value]
          : [];
      } else {
        return []
      }
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    SetStatusPopup(app) {
      this.Update_Application(app);
      this.$bvModal.show("modal-status");
    },
    async UpdateStatus() {
      let temp = JSON.parse(JSON.stringify(this.Selected_Applicaton));
      console.log(this.selected);
      temp.status = this.selected;
      temp.statusid = this.selected.id;

      //interview date set 
      temp.statusid == 2 ? temp.interviewDate = new Date(this.interviewdate).getTime() : null

      console.log(temp);
      // this.Update_Application(temp)
   
          await this.UpdateApplication(temp).then( () => {
          this.successMessage("تم تعديل حالة الطلب");
        }).catch( err => {
          this.errorMessage(err);
        })
      
 
    },
    UpdateJobsFilter(value) {
     // this.filter.postion = value
      this.items.postion = this.ListofJobs(value);
    },
    UpdateDateFilter() {
      let fromfiltered = [];
      let tofiltered = []
      Object.keys(this.filter.dateFilter).map((key) => {

        if (this.filter.dateFilter[key] !== "") {
          this.AllApplicatons.map((item) => {
            let time = new Date(item.time);
            time.setHours(0, 0, 0, 0);
            let filter = new Date(this.filter.dateFilter[key]);
            if (key == "to") {
              time.getTime() <= filter.getTime() ? tofiltered.push(item) : null;
            } else if (key == "from") {
              time.getTime() >= filter.getTime() ? fromfiltered.push(item) : null;
            }
          });
        }
        console.log(fromfiltered);
          if(fromfiltered.length && tofiltered.length ){
            fromfiltered = fromfiltered.filter(v => tofiltered.includes(v) )
            this.items.date =  fromfiltered
          } else{
             this.filter.dateFilter.to !== "" ? this.items.date = tofiltered : this.items.date = fromfiltered
          }
       
      });
    },
    Clear(){
      this.filter.dateFilter.from = ""
      this.filter.dateFilter.to = ""
      this.filter.postion = ""
      this.filter.string = ""
    },
    DownloadPdf(){
       window.open(this.Selected_Applicaton.file, '_blank');
    }

   
  },
  async mounted() {
    this.items.all = this.AllApplicatons;
     await this.GetApplications();
     this.items.all = this.AllApplicatons
  },
  updated() {

  },
};
</script>

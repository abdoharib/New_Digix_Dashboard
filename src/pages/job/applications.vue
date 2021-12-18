<template>
  <div>
    <Breadcrumbs title="Support Ticket" />
    <!-- Container-fluid starts-->
    <div class="container-fluid support-ticket-section">
      <div class="row">
        <div class="col-md-12">

          <px-card :actions="false">
            <div slot="with-padding">
              


              <b-row>
                <b-col xl="6">
                  <b-input-group class="datatable-btn">
                    <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

                <b-col xl="6">
                  <b-form-group label-cols="2" label="Per Page" class="mb-0 datatable-select">
                    <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>

              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  :items="AllApplicatons"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                 
                  <template v-slot:cell(time)="data">
                   {{new Date(data.item.time).toDateString() }}
                  </template>
                  
                  <template v-slot:cell(statusid)="data">
                      <b-button @click="SetStatusPopup(data.item)" :variant="colorMaper[data.item.status.id.toString()]" >{{data.item.status.name}}</b-button> 
                  </template>

                  <template v-slot:cell(download)="data">
                      <a class="btn p-1" :href="data.item.file" target="_blank" :download="data.item.name+'_'+data.item.phone">
                          <feather style="width:16px; cursor:pointer;" type="download"  >  </feather>
                      </a>
                  </template>
                  <template v-slot:cell(mail)="data">
                    <a class="btn p-1" :href="'mailto:'+data.item.email" target="_blank" >
                      <feather style="width:16px; cursor:pointer;" type="mail"></feather>
                    </a>
                    </template>


                
                </b-table>
              </div>


              <b-col md="6" class="p-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
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
    <b-modal   id="modal-status"  centered title="تغير الحالة" ok-title="تعديل" cancel-title="الغاء" class="theme-modal">
        <div v-if="Selected_Applicaton.status" class="d-flex w-100 justify-content-center align-items-center">
                 <b-button disabled  :variant="colorMaper[Selected_Applicaton.status.id.toString()]" >{{Selected_Applicaton.status.name}}</b-button> 
                 <span  style="margin:10px;" >الي</span> 
                 <b-form-select v-model="selected" :variant="colorMaper[Selected_Applicaton.status.id.toString()]" >
                     <b-form-select-option :value="{id:index,name:statuse}" v-for="(statuse, index) in StatusOrder.filter((v,indx) => indx > Selected_Applicaton.status.id )" :key="index"> {{statuse}} </b-form-select-option>
                </b-form-select> 
        </div>
    </b-modal>
  </div>
  
</template>


<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        maxskill: 100,
        tablefields: [
          { key: 'name', label: 'Name', sortable: false },
          { key: 'phone', label: 'Phone', sortable: false },
          { key: 'email', label: 'Email', sortable: false },
          { key: 'jobname', label: 'Position', sortable: true },
          { key: 'time', label: 'Time', sortable: true },
          { key: 'statusid', label: 'Status', sortable: true },

          { key: 'download', label: '', sortable: false },
          { key: 'mail', label: '', sortable: false },



        ],

        filter: null,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15],
        selected:"",
        StatusOrder:["معلق","قيد المراجعة","تم الموافقة","تم الرفض"]
      };
    },
    computed: {
        ...mapGetters("jobs",[
            "AllApplicatons",
            "Selected_Applicaton"
        ]),
      sortOptions() {
        return this.TableConfig.tablefields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key };
          });
      },
      colorMaper(){
         return {
              '0':"secondary",
              '1':"info",
              '2':"success",
              '3':"variant",
              
          }},
      TableConfig(){
          return {
        tablefields: [
          { key: 'name', label: 'Name', sortable: false },
          { key: 'phone', label: 'Phone', sortable: false },
          { key: 'email', label: 'Email', sortable: false },
          { key: 'jobname', label: 'Position', sortable: true },
          { key: 'time', label: 'Time', sortable: true },
          { key: 'statusid', label: 'Status', sortable: true },

          { key: 'download', label: '', sortable: false },
          { key: 'mail', label: '', sortable: false },



        ],

        items: this.AllApplicatons,

        filter: "ولاء",
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15]
      };
      }

    },
    mounted() {
      //this.totalRows = this.items.length;
    },
    methods: {
        ...mapMutations("jobs",[
            "UpdateApplication"
        ]),

        ...mapActions("jobs",[
            "GetApplications",
            "UpdateApplication"
        ]),
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      },
        getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
       SetStatusPopup(app){
           this.UpdateApplication(app)
        this.$bvModal.show("modal-status")	
      },
      
    }
  };
</script>
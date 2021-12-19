<template>
<div>
    <Breadcrumbs title="الاحصائيات" />
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6 col-xxl-4 summary">
                <SummaryWidget color="primary" icon="fa-briefcase">
                    <template v-slot:name>
                        الوظائف <b-badge  class="ml-2 p-1" variant="primary">جديد</b-badge>
                    </template>
                    <template v-slot:value>
                        {{AllJobs.length}}
                    </template>
                </SummaryWidget>
                <SummaryWidget color="secondary" icon="fa-paper-plane">
                    <template v-slot:name>
                        طلبات التوظيف
                    </template>
                    <template v-slot:value>
                        {{AllApplicatons.length}}
                    </template>
                </SummaryWidget>
            </div>

             <div class="col-12 col-xxl-4 col-lg-6 latest-app-job">
                <Latest :data="AllApplicatons" :headers="lattestApplications.headers" to="jobs-applications" >
                    <template v-slot:header>أحدث الطلبات</template>
                </Latest>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-9">
                <px-card style="height:100%" class="h-100">
                    <div class="card-header p-4"><h5 style="" class="mt-2">حالة الطلبات لكل وظيفة</h5></div>
                    <div id="jobs-col-chart" class="card-body apex-chart">
                     <Bar class="chart-height"/>
                    </div>
                </px-card>
            </div>
            
            <div class="col-12 col-lg-3 app-job">
            
                    <px-card style="height:100%" class="h-100 p-1">
                    <div class="card-header p-4"><h5 style="" class="mt-2">طلبات التوظيف</h5></div>
                    <div id="job-app-pie-chart" class="card-body apex-chart p-3">
                        <apexchart
                        width="100%"
                        type="pie"
                        :options="piechart.chartOptions"
                        :series="piechart.series"
                        ></apexchart>
                    </div>
                    </px-card>
              
            </div>

            <div class="col-12 col-lg-12">
                    <Latest :data="LattestJobs_with_No_App" :headers="lattestJobs.headers" to="jobs">
                        <template v-slot:header>أحدث الوظائف</template>
                    </Latest>
            </div>
        </div>    
    </div>
</div>
</template>

<script>

import SummaryWidget from "../components/SummaryWidget.vue"
import Latest from "../components/Latest.vue"

var primary = localStorage.getItem('primary_color') || '#7366ff';
var secondary = localStorage.getItem('secondary_color') || '#f73164';

  import Bar from './Bar';
import { mapGetters, mapActions } from "vuex";

export default {
    components:{
        Bar,
        SummaryWidget,
        Latest
    },
    data:() => ({
        piechart: {
          series: [44, 55],
          chartOptions: {
            chart: {
              width: '100%',
              type: 'pie',
            },
            legend: {
                    position: 'bottom',
                    fontSize: '9px'
                  },
            labels: ['مطور ويب', 'مصمم'],
            responsive: [
              {
                breakpoint: 2000,
                options: {
                  chart: {
                    width: 300,
                  },
                  
                },
              },
            ],
            colors: [primary, secondary, '#51bb25', '#a927f9', '#f8d62b'],
          },
        },
        lattestApplications:{
            headers:[
                {name:'الاسم',key:"name"},
                {name:'الوظيفة',key:"jobname"},
                {name:'التاريخ',key:"time", formater:(time) => new Date(time).toDateString() },
                {name:'ملف',key:"file"}
                ]
        },
        lattestJobs:{
            headers:[
                {name:'العنوان',key:"title"},
                {name:'الوصف',key:"description"},
                {name:'اخر تخديث',key:"time",formater:(time) => new Date(time).toDateString()},
                {name:'عدد الطلبات',key:"noapp"},
                {name:'الحالة',key:"status", formater:(state) => state?'<i class=\'fa fa-eye\'></i>':'<i class=\'fa fa-eye-slash\'></i>'}
                ]
        },
        
        //remove after integration
        mockDataApplications :[
  
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"g",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "ahmed",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639095351000,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"ويب",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "mohamed",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639505030668,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
  {
    jobid: "ab365847-7382-441a-a234-97315a6b78d8",
    jobname:"ويب",
    note: "",
    file: "https://digix-dashboard-bucket.s3.eu-central-1.amazonaws.com/job-sub/ab98f6f3-db16-4212-9bf1-d1e085edb30f.pdf",
    phone: "+218919718023",
    name: "عبد المهيمن",
    id: "ab98f6f3-db16-4212-9bf1-d1e085edb30f",
    time: 1639505030668,
    email: "abdoamazon9@gmail.ocm",
    status: { id: 0, name: "معلق" },
    statusid:0
  },
]
    }),
    computed:{
        ...mapGetters("jobs", ["AllApplicatons", "AllJobs"]),
        LattestJobs_with_No_App(){
            return this.AllJobs.map(job => { job.noapp = this.AppOrderdbyjobname[job.title]? this.AppOrderdbyjobname[job.title].length : 0; return job })
        },
        AppOrderdbyjobname(){
            let AppOrderdbyjobname = {}
            this.AllApplicatons.map(app => {
          AppOrderdbyjobname[app.jobname] ? null :AppOrderdbyjobname[app.jobname] = []
          AppOrderdbyjobname[app.jobname].push(app)
        })
        return AppOrderdbyjobname
        }

    },
    methods:{
        ...mapActions("jobs", ["GetApplications", "GetJobs"]),
    },
    async created(){
        await this.GetJobs()
        await this.GetApplications();

      
        this.piechart.series = Object.keys(this.AppOrderdbyjobname).map(job => this.AppOrderdbyjobname[job].length)
        this.piechart.chartOptions.labels = Object.keys(this.AppOrderdbyjobname)
    }

}
</script>

<style>

</style>
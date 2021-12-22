<script>
  var primary = localStorage.getItem('primary_color') || '#7366ff';
  var secondary = localStorage.getItem('secondary_color') || '#f73164';

  import { Bar } from 'vue-chartjs';
  import { mapGetters } from "vuex";

  export default {
    extends: Bar,
    data: () => ({
      datacollection: {
        labels: ['مطور ويب', 'مصمم'],
        datasets: [{
          label:"معلق",
          data: [35, 59,],
          backgroundColor:'rgba(145, 46, 252, 0.4)',
          hoverBackgroundColor: primary
        }, {
          label:"قيد المراجعة",
          data: [28, 48],
          backgroundColor:'rgba(247, 49, 100, 0.4)',
          hoverBackgroundColor: secondary
        }]
      },
      options: {
        animation: {
          duration: 600,
          easing: 'linear'
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [{
            
            scaleLabel: {
              display: true,
              labelString: 'الوظائف'
              },
          stacked: true,
          categoryPercentage: 0.5,
          barPercentage: 1 }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'عدد الطلبات'
              },
          stacked: true
        }]
        },
        legend: {
          display: true,
        },
        tooltips: {
          mode: 'index'
        },
      }
    }),
      computed:{
      ...mapGetters("jobs", ["AllApplicatons", "AllJobs"]),

    },
    methods:{
     UpdateChart(){
           console.log("sdagsg");
                 const colors  = ["#CC99FF","#a927f9","#B4F0A7","#FF6381"]

      this.datacollection.labels=this.AllJobs.map(job => job.title)
      let OrderedAppbyStatus = {}
      this.AllApplicatons.map( app => {
      //  console.log(app);
        OrderedAppbyStatus[app.status.name] ? null : OrderedAppbyStatus[app.status.name] = []
        OrderedAppbyStatus[app.status.name].push(app)
      })
      //console.log(OrderedAppbyStatus);

      let AppOrderdbyjobname = {}
      Object.keys(OrderedAppbyStatus).map((status,index) => {
        OrderedAppbyStatus[status].map(app => {
          AppOrderdbyjobname[app.jobname] ? null :AppOrderdbyjobname[app.jobname] = []
          AppOrderdbyjobname[app.jobname].push(app)
        })
      })

     // console.log(AppOrderdbyjobname);
      //console.log(OrderedAppbyStatus);


      this.datacollection.datasets=Object.keys(OrderedAppbyStatus).map(( status, index ) => {
        
        //console.log(AppOrderdbyjobname);
        //console.log(this.AllJobs.map(job => job.title).map(job => AppOrderdbyjobname[job] ? AppOrderdbyjobname[job].length : 0).sort());
        let data = this.AllJobs.map(job => job.title).map(jobname => { 
          console.log();
          return this.AllApplicatons.filter(app => (app.jobname === jobname && app.status.name === status)).length 
          })
      
        
      console.log(data);
        
        return {
          label:status,
          backgroundColor:colors[OrderedAppbyStatus[status][0].statusid],
          data: data
        }
      })
     } 
    },
    mounted () {
      this.UpdateChart()
      this.renderChart(this.datacollection, this.options);
    },

    watch:{
      AllApplicatons:{
        handler(){
          this.UpdateChart()
          this.renderChart(this.datacollection, this.options);
        }
      }
    }
  
  };
</script>

<style>
</style>
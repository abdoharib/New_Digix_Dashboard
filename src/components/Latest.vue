<template>
            <div class="card">

            <div class="card-header card-no-border d-flex">
              <h5>
                  <slot name="header"></slot>
              </h5>
              <div class="card-header-right" style="left:35px">
                  <b-badge v-if="NewRowsToday().length" style="font-size:15px" pill class="txt-light pt-2 font-weight-bold" variant="primary">{{NewRowsToday().length}}</b-badge>
              </div>
            </div>

            <div class="card-body pt-0">
              <div class="our-product">
                <div class="table-responsive">
                  <table class="table table-bordernone">
                      <thead>
                          <tr>
                              <th class="" v-for="(head, index) in headers" :key="index">{{head.name}}</th>
                              <th class="w-1" ></th>

                          </tr>
                      </thead>
                    <tbody class="f-w-500">

                      <tr @click="$router.push(to?to:'overview')" style="cursor:pointer;" v-for="(row,index) in [...data].sort((a,b) => b.time - a.time)" :key="index"> 
                     
                        <td v-for="(col,index) in headers" :key="index" class="text-left">
                          <span v-html="col.formater ? col.formater(row[col.key]):row[col.key]" v-if="col.key !== 'file'"></span>
                          <span v-else>
                                <a
                      class="btn p-1"
                      :href="row[col.key]"
                      target="_blank"
                      :download="row['name']"
                    >
                      <feather
                        style="width: 16px; cursor: pointer"
                        type="download"
                      >
                      </feather>
                    </a>
                          </span>

                        </td>

                        <td v-if="isToday(row.time)"><b-badge  class="ml-2 p-1" variant="primary">جديد</b-badge></td>
                    
                      </tr>
                      
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
</template>

<script>
export default {
    props:[
        "headers",
        "data",
        "to"
    ],
    data:() => ({
        
    }),
    methods:{
        isToday(time){
            let comparer = new Date(time)
            comparer.setHours(0,0,0,0)
            let today = new Date(1639505030668)
            today.setHours(0,0,0,0)
            return today.getTime() === comparer.getTime()
        },
        NewRowsToday(){
            return this.data.filter(row => {
                let RowDate = new Date(row.time); RowDate.setHours(0,0,0,0)
                let TodayDate = new Date(); TodayDate.setHours(0,0,0,0)
                
                
                return TodayDate.getTime() === RowDate.getTime()
            })
        }
    }

}
</script>

<style>

</style>
<template>
  <div class="row">
    <div class="col-12">
      <div class="catagory d-flex w-100 p-2 my-2 shadow align-items-center">
        <div class="mx-1 mt-1 mr-2 icon">
            <component v-bind:is="Catagories[type].icon"></component>


        </div>
        <div class="media-body text-left">
          <span class="" style="font-size: 1rem">{{Catagories[type].name}}</span>
        </div>

        <div class="d-flex align-items-center mr-1">
          <div class="text-right switch-md icon-state">
            <label class="switch switch-md m-0 mr-2">
              <input type="checkbox" checked="" /><span
                class="switch-state"
              ></span>
            </label>
          </div>

          <b-button class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2" @click="openProjectBuilder">
            <i class="fa fa-pencil" style="font-size: 1rem" ></i>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dev from "./catagories-icons/dev.vue"
import idenity from "./catagories-icons/idenity.vue"
import marketing from "./catagories-icons/marketing.vue"
import { mapActions } from 'vuex'


export default {
  components: {
      dev,
      idenity,
      marketing,
  },
  props:{
      type:{
          required:true,
          type:String
      },
      project:{
        required:true,
        type:Object
      }
    
  },

  data: () => ({
      idenity:idenity,
      Catagories:{
          marketing:{
              name:"التسويق",
              icon:marketing
          },
          branding:{
              name:"الهوية التجارية",
              icon:idenity
          },
          dev:{
              name:"المواقع و التطبيقات",
              icon:dev
          }
      }
  }),
  methods:{
        ...mapActions("projectCategories", ["GetCatagory"]),

    openProjectBuilder(){
      this.GetCatagory({
        project:this.project,
        type:this.type 
      })
      this.$bvModal.show(`project-page-editor`)

    }
  }
};
</script>

<style lang="scss">
</style>



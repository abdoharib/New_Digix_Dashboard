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
              <input ref="checkbox" type="checkbox" v-model="project.catagories[type].isActive" @change="SetProjectStatus" /><span
                class="switch-state"
              ></span>
            </label>
          </div>

          <b-button v-if="isEditable" class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2" @click="openProjectBuilder">
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
import { mapActions, mapMutations } from 'vuex'


export default {
  components: {
      dev,
      idenity,
      marketing,
  },
  props:{
    isEditable:{
      default:true
    },
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
            id:[4],
              name:"التسويق",
              icon:marketing
          },
          branding:{
            id:[3],
            name:"الهوية التجارية",
            icon:idenity
          },
          development:{
              id:[1,2],
              name:"المواقع و التطبيقات",
              icon:dev
          }
      }
  }),
  computed:{
    ids:function(){
      return [...this.Catagories[this.type].id]
    }
  },
  methods:{
    ...mapMutations('projects',['UpdateProject']),
    ...mapActions("projectCategories", ["GetCatagory"]),

    openProjectBuilder(){
      this.GetCatagory({
        
        project:this.project,
        type:this.type 
      })
      this.$bvModal.show(`project-page-editor`)

    },
    SetProjectStatus(e){

      let project =JSON.parse(JSON.stringify(this.project)) 
      
      if(e.target.checked){
        project.category_id = [...project.category_id, ...this.ids]
      }else{
        let filtered = project.category_id.filter(id => this.ids.indexOf(id) < 0 )
        project.category_id = filtered
      }

     // project.catagories[this.type].isActive = e.target.checked

      this.UpdateProject(project)
    }
  },
  mounted(){
    if(!this.isEditable){
     // this.$refs.checkbox.checked = false
    }
  }
};
</script>

<style lang="scss">
</style>



<template>
  <b-modal size="xl" id="project-page-editor" title="تعديل الواجهة">
    <div class="row">
      <div class="col-3">
       <editor-tools  /> 
      </div>
      <div class="col-9">
        <b-card cl header-tag="div" body-class="">
          <h5 class="m-0 p-0" slot="header">التسويق</h5>

          <div
            style="width: fitcontent"
            class="editor  shadow p-3 rounded"
          >
            <draggable class="w-100" v-model="page">
              <div
                class="w-100"
                v-for="(ele, index) in $store.state.projectCategories.page.children[1].children"
                :key="index"
              >
                <component :index='index' :props='ele.props' v-bind:is="EleMapper[ele.name]"></component>
              </div>
            </draggable>

          </div>
        </b-card>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import EditorTools from "../components/EditorTools.vue";
import draggable from "vuedraggable";

import DoubleBox from "../components/sections/two_box.vue";
import TripleBox from "../components/sections/three_box.vue";
import OneBox from "../components/sections/one_box.vue";
import TextBox from "../components/sections/text_section.vue";



export default {
  components: {
    EditorTools,
    draggable,
  },
  data: () => ({
    page: [],
  }),
  methods: {
    AddtoPage(section) {
      this.page.push(section);
    },

    RemoveFromPage(id) {
      this.page.splice(id, 1);
    },
    previewImage: function (event, index) {
      let section = this.page[index].data;

      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          section.preview = e.target.result;
        };
        section.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  computed: {
    ...mapState("projectCategories",['page']),
    ...mapGetters("projectCategories", ["PageSections"]),
    ...mapMutations("projectCategories",["ReplaceBody"]),
    List:{
      get(){
        return this.PageSections
      },
      set(value){

      }
    },
    EleMapper: () => {
      return {
        DoubleBox: DoubleBox,
        TripleBox: TripleBox,
        OneBox: OneBox,
        TextBox: TextBox,
      };
    },
  },
  mounted() {
    console.log(this.$store.state.projectCategories.page)
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
</style>

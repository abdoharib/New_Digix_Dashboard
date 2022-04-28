<template>
  <b-modal @ok='handleOk' size="xl" id="project-page-editor" title="تعديل الواجهة">
    <div class="row">
      <div class="col-3">
        <editor-tools />
      </div>
      <div class="col-9">
        <b-card cl header-tag="div" body-class="">
          <div slot="header">
            <h5 class="m-0 p-0 text-center" >التسويق</h5>
              <div class="sections-header mt-4">
                <branding-header :header="PageHeader"/>
              </div>
          </div>
        
          <div style="width: fitcontent; max-height:400px; overflow:auto;" class="editor shadow p-2 rounded">
            <draggable v-bind="dragOptions" class="w-100" v-model="List">
              <transition-group
                type="transition"
                :name="!drag ? 'flip-list' : null"
                tag="div"
              >
                <div class="w-100 list-group-item" v-for="(ele, index) in List" :key="index">
                  <component
                    :index="index"
                    :props="ele.props"
                    v-bind:is="EleMapper[ele.name]"
                  ></component>
                </div>
              </transition-group>
            </draggable>
          </div>
        </b-card>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import EditorTools from "../components/EditorTools.vue";
import draggable from "vuedraggable";

import DoubleBox from "../components/sections/two_box.vue";
import TripleBox from "../components/sections/three_box.vue";
import OneBox from "../components/sections/one_box.vue";
import TextBox from "../components/sections/text_section.vue";
import BrandingHeader from './sections/branding_header.vue';

export default {
  components: {
    EditorTools,
    draggable,
    BrandingHeader,
  },
  data: () => ({
    page: [],
    drag: false,
  }),
  methods: {
        ...mapActions("projectCategories", ["UpdateCatagory"]),

    async handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        await this.UpdateCatagory()
        this.$bvModal.hide(`project-page-editor`)

    },
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
    ...mapGetters("projectCategories", ["PageSections","PageHeader"]),
    ...mapMutations({
      ReplaceBody: "projectCategories/ReplaceBody",
    }),
    List: {
      get() {
        return this.PageSections;
      },
      set(value) {
        console.log(value);
        this.$store.commit("projectCategories/ReplaceBody", value);
      },
    },
    EleMapper: () => {
      return {
        DoubleBox: DoubleBox,
        TripleBox: TripleBox,
        OneBox: OneBox,
        TextBox: TextBox,
        /*
        MarketingHeader:MarketingHeader,
        BrandingHeader:BrandingHeader,
        DevelopmentHeader:DevelopmentHeader*/
      };
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  mounted() {
    console.log(this.$store.state.projectCategories.page);
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  border: 0px;
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

.editor{

}
</style>

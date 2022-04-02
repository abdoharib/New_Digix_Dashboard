<template>
  <b-modal size="xl" id="project-page-editor" title="تعديل الواجهة">
    <div class="row">
      <div class="col-3">
        <editor-tools :AddToPage="AddtoPage" />
      </div>
      <div class="col-9">
        <b-card cl header-tag="div" body-class="">
          <h5 class="m-0 p-0" slot="header">التسويق</h5>

          <div
            style="width: fitcontent"
            class="editor d-flex justify-content-center shadow p-3 rounded"
          >
            <draggable class="w-100" v-model="page">
              <div
                class="w-100"
                v-for="(section, index) in page"
                :key="section.id"
              >
                <component
                  v-bind:is="section.ele"
                  :RemoveFromPage="RemoveFromPage"
                  :id="index"
                  :data='section.data'
                  :previewImage='previewImage'
                  :image='image'
                ></component>
              </div>
            </draggable>
          </div>
        </b-card>
      </div>
    </div>
  </b-modal>
</template>

<script>
import EditorTools from "../components/EditorTools.vue";
import draggable from "vuedraggable";

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
  computed:{
    image:(id)=>{
      return this.page[id].data.preview;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
</style>

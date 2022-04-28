<template>
  <div class="d-flex justify-content-center">
    <b-modal
      title="تعديل الأيقونات"
      size="sm"
      centered
      id="branding-header-modal"
    >
      <div
        class="
          d-flex
          flex-column
          px-3
          py-2
          justify-content-center
          align-items-center
        "
      >
        <catagory-header-icon 
        v-for="(icon, key) in header.props.icons"
        :key="key"
        :isShown="icon.isShown">
          <template v-slot:icon>
            <component :is="IconMaper[key]" />
          </template>


          <div class="d-flex" slot="content">
            <div class="text-right switch-md icon-state">
              <label class="switch switch-md m-0 mr-2">
                <input v-model="icon.isShown" type="checkbox" /><span class="switch-state"></span>
              </label>
            </div>
            <b-input v-model="icon.text" />
          </div>

        </catagory-header-icon>



      </div>
    </b-modal>
    <div
      class="d-flex px-2 shadow rounded catagory-header justify-content-center"
    >
      <b-button
        @click="OpenHeaderEditor"
        pill
        size="sm"
        style="
          position: absolute;
          right: -18px;
          top: -15px;
          padding: 5px;
          width: 28px;
          height: 28px;
        "
      >
        <i class="fa fa-pencil" style="font-size: 0.8rem"></i>
      </b-button>

      <catagory-header-icon
        v-for="(icon, key) in header.props.icons"
        :key="key"
        :isShown="icon.isShown"
        :text="icon.text||'empty'"
      >
        <template v-slot:icon>
          <component :is="IconMaper[key]" />
        </template>
      </catagory-header-icon>

      <!--
      <catagory-header-icon :isShown="true" :text="'afasfafafsa'">
        <template v-slot:icon>
          <i class="fa fa-trash-o" style="font-size: 1.5rem"></i>
        </template>
      </catagory-header-icon>

      <catagory-header-icon :isShown="false" :text="'afasfafafsa'">
        <template v-slot:icon>
          <i class="fa fa-trash-o" style="font-size: 1.5rem"></i>
        </template>
      </catagory-header-icon>
      -->
    </div>
  </div>
</template>

<script>
import CatagoryHeaderIcon from "../components/CatagoryHeaderIcon.vue";

//icons
import tools from "./HeaderIcons/tools.vue"
import stack from "./HeaderIcons/stack.vue"
import platforms  from "./HeaderIcons/platforms.vue"
import time from "./HeaderIcons/time.vue"




export default {
  components: {
    CatagoryHeaderIcon,
    tools,
    platforms,
    time
  },
  props: {
    header: {},
  },
  computed:{
    IconMaper: () =>({
  "tools": tools,
  "platforms":platforms,
  "time":time,
  "stack":stack
})
  },
  methods: {
    OpenHeaderEditor() {
      this.$bvModal.show("branding-header-modal");
    },
    
  },
};
</script>

<style>
.catagory-header {
  position: relative;
}
</style> 
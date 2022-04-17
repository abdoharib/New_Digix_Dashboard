<template>
  <div class="d-flex outtercon">
    <b-button
      class="remove-btn btn btn-pill m-2 p-0 pt-2 px-2"
      style="height: fit-content"
      @click="Remove(index)"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con mb-3">
      <div
        id="box-1"
        class="
          box
          d-flex
          flex-column
          align-items-center
          justify-content-center
          p-5
        "
      >
        <div class="headline position-relative">
          <b-button
            class="edit-btn btn btn-pill m-2 p-0 pt-2 px-2"
            style="height: fit-content"
            @click="EditHeadline"
          >
            <i class="fa fa-pencil"></i>
          </b-button>

          <div
            v-html="props.headline"
            style="font-weight: bold; font-size: 1.5rem"
          ></div>
        </div>
        <div class="underline position-relative">
          <b-button
            class="edit-btn btn btn-pill m-2 p-0 pt-2 px-2"
            style="height: fit-content"
            @click="EditUnderline"
          >
            <i class="fa fa-pencil"></i>
          </b-button>
          <div v-html="props.underline" class="text-center w-100"></div>
        </div>
      </div>
    </div>

    <b-modal centered id="headline" size="sm">
      <vue-editor v-model="props.headline" :editor-toolbar="customToolbar" />
    </b-modal>

    <b-modal centered id="underline" size="sm">
      <vue-editor v-model="props.underline" :editor-toolbar="customToolbar" />
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  props: {
    index: {
      required: true,
    },
    props: {
      required: true,
    },
  },
  data: () => ({
    customToolbar: [
      [
        {
          header: [false, 1, 2, 3, 4, 5, 6],
        },
      ],
      ["bold", "italic", "underline"],
      [
        {
          align: "",
        },
        {
          align: "center",
        },
        {
          align: "right",
        },
        {
          align: "justify",
        },
      ],
    ],
  }),
  methods: {
    ...mapActions("projectCategories", ["Remove", "UpdateProps"]),

    UpdateFirst: function (event) {
      var input = event.target;

      if (input.files) {
        var reader = new FileReader();

        reader.onload = (e) => {
          let TempProps = JSON.parse(JSON.stringify(this.props));
          TempProps.images[0] = {
            url: e.target.result,
            data: input.files[0],
          };
          this.UpdateProps({ props: TempProps, index: this.index });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    EditHeadline() {
      this.$bvModal.show(`headline`);
    },

    EditUnderline() {
      this.$bvModal.show(`underline`);
    },
  },
};
</script>

<style lang="scss" scoped>
.outtercon {
  width: 100%;
  position: relative;
  .btn {
    top: -20px;
    right: -20px;
    position: absolute;
    border: 2px solid black;
  }
}
.edit-btn {
  top: -25px !important;
  right: -25px !important;
}

.headline,
.underline {
  padding: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.164);
  border-radius: 0.5rem;
}

.con {
  width: 100%;
  height: 250px;

  .box {
    div {
      background-color: unset;
    }
    height: 100%;
    width: 100%;
  }
}
</style>
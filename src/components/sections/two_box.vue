<template>
  <div class="d-flex outtercon w-100">
    <b-button
      class="remove-btn btn btn-pill m-2 p-0 pt-2 px-2"
      style="height: fit-content"
      @click="Remove(index)"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con mb-3 w-100 justify-content-between">
      <div id="box-1" class="box mr-3">
        <img
          class="box-1-img box-img"
          :src="props.images[0].url"
          alt=""
        />

        <div class="file-input">
          <input
            type="file"
            :id="'file1-'+index"
            class="file"
            @change="UpdateFirst"
          />
          <label class="p-3" :for="'file1-'+index">
            <i class="fa fa-plus"></i>
            <p class="file-name"></p>
          </label>
        </div>
      </div>
      <div id="box-2" class="box">
        
        <img
          class="box-2-img box-img"
          :src="props.images[1].url"
          alt=""
        />
        <div class="file-input">
          <input
            type="file"
            :id="'file2-'+index"
            class="file"
            @change="UpdateSecond"
          />
          <label class="p-3" :for="'file2-'+index">
            <i class="fa fa-plus"></i>
            <p class="file-name"></p>
          </label>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    index: {
      required: true,
    },
    props: {
      required: true,
    },
  },
  methods: {
    ...mapActions("projectCategories", ["Remove", "UpdateProps"]),

    UpdateFirst: function (event) {
      var input = event.target;

      if (input.files) {
        var reader = new FileReader();

        reader.onload = (e) => {
          let TempProps = JSON.parse(JSON.stringify(this.props))
          TempProps.images[0]= {
              url: e.target.result,
              data: input.files[0],
            }
          this.UpdateProps({ props: TempProps, index: this.index });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    UpdateSecond: function (event) {
      var input = event.target;

      if (input.files) {
        var reader = new FileReader();

        reader.onload = (e) => {
          console.log(e.target.result);
          let TempProps = JSON.parse(JSON.stringify(this.props))
          console.log(TempProps.images[1]);
          TempProps.images[1]= {
              url: e.target.result,
              data: input.files[0],
            }

          this.UpdateProps({ props: TempProps, index: this.index });
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.outtercon {
  position: relative;
  .btn {
    top: -20px;
    right: -20px;
    position: absolute;
    border: 2px solid black;
  }
}

.remove-btn {
  z-index: 3;
}
.con {
  width: fit-content;
  height: 308px;
  .box {
    position: relative;

    aspect-ratio: 1;
    width: 100%;
  }
}

.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}
.file-input {
  background-color: unset;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.file-input label {
  display: block;
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 25px;
  background: #7873f5;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.85rem;
  color: #555;
}

input:hover + label,
input:focus + label {
  transform: scale(1.02);
}
.box-img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
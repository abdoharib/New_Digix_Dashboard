<template>
  <div>
    <div class="py-3 px-3 .">
      <h5 class="m-0">الأدوات</h5>
      <p class="m-0">لو سمحتي استعملهم ارجوك</p>
    </div>

    <div>
      <ul style="width: fit-content;" class="ml-3">
        <li class="two-boxs my-2">
          <div class="d-flex align-items-center tool">
            <div class="d-flex con">
              <div class="mr-2"></div>
              <div class=""></div>
            </div>

            <div class="overlay">
              <b-button
                class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2"
                @click="Append('DoubleBox')"
              >
                <i class="fa fa-plus"></i>
              </b-button>
            </div>
          </div>
        </li>

        <li class="three-boxs my-2">
          <div class="d-flex align-items-center tool">
            <div class="d-flex con">
              <div class="mx-2 mx-0"></div>
              <div class="mx-2"></div>
              <div class="mx-2 mx-0"></div>
            </div>

            <div class="overlay">
              <b-button
                class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2"
                @click="Append('TripleBox')"
              >
                <i class="fa fa-plus"></i>
              </b-button>
            </div>
          </div>
        </li>

        <li class="one-box my-2">
          <div class="d-flex align-items-center tool">
            <div class="d-flex con">
              <div class=""></div>
            </div>

            <div class="overlay">
              <b-button
                class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2"
                @click="Append('OneBox')"
              >
                <i class="fa fa-plus"></i>
              </b-button>
            </div>
          </div>
        </li>

        <li class="text my-2">
          <div class="d-flex align-items-center tool">
            <div class="d-flex con">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  justify-content-center
                "
              >
                <span style="font-weight: bold; font-size: 0.6rem"
                  >Lorem ipsum</span
                >
                <span style="font-size: 0.4rem" class="text-center"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, perspiciatis?</span
                >
              </div>
            </div>

            <div class="overlay">
              <b-button
                class="btn btn-pill btn-primary m-0 p-0 pt-2 px-2"
                @click="Append('TextBox')"
              >
                <i class="fa fa-plus"></i>
              </b-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  
  props: {

  },

  data: () => ({

  }),
  methods: {
    ...mapActions("projectCategories", ["Append"]),
  },
};
</script>

<style lang="scss"  >
$two-box-size: 100px;
$three-box-size: 64px;
$box-backround: url("../assets/images/x-image.png");

.tool {
  position: relative;
  .overlay {
    background-image: url("../assets/images/Rectangle.png");
    opacity: 0;
    position: absolute;
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    transition: all 0.2s;
    &:hover {
      opacity: 1;
    }
  }
}

.con {
  width: 100%;
  div {
    background-color: rgba(0, 0, 0, 0.096);
  }
}

.two-boxs {
  .con {
    div {
      height: $two-box-size !important;
      aspect-ratio: 1;
    }
  }
}
.three-boxs {
  .con {
    div {
      height: $three-box-size !important;
      aspect-ratio: 1;
    }
  }
}

.one-box {
  .con {
    div {
      height: 100px !important;
      width: 100%;
      aspect-ratio: 1;
    }
  }
}
.text {
  .con {
    div {
      height: 80px !important;
      width: 100%;
      aspect-ratio: 1;
      padding: 1rem;
    }
  }
}
</style>


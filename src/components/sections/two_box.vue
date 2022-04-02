<template>
  <div class="d-flex outtercon w-100 ">
    <b-button
      class="btn btn-pill m-2 p-0 pt-2 px-2"
      style="height:fit-content;"
      @click="RemoveFromPage(id)"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con mb-3 w-100 justify-content-between">
      <div id="box-1" class="box mr-3"></div>
      <div id="box-2" class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
    RemoveFromPage:{
      required:true
    },
    id:{
      required:true
    }
  }
};
</script>

<style lang="scss" scoped>
.outtercon{
  position: relative;
  .btn{
    top: -20px;
    right: -20px;
    position: absolute;
    border: 2px solid black;
  }
}
.con {
  width: fit-content;
  height: 308px;
  .box {
    aspect-ratio: 1;
    width: 100%;
  }
}
</style>
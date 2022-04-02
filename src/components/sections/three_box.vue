
<template>
  <div class="d-flex outtercon">
    <b-button
      class="btn btn-pill m-2 p-0 pt-2 px-2"
      style="height:fit-content;"
      @click="RemoveFromPage(id)"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con w-100 mb-3 justify-content-between">
      <div id="box-1" class="box mr-3"></div>
      <div id="box-2" class="box mr-3"></div>
      <div id="box-3" class="box"></div>
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
  }
}
.con {
  width: fit-content;
  height: 200px;
  .box {
    aspect-ratio: 1;
    width: 100%;
  }
}
</style>
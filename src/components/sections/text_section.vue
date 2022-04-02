<template>
  <div class="d-flex outtercon">
    <b-button
      class="btn btn-pill m-2 p-0 pt-2 px-2"
      style="height:fit-content;"
      @click="RemoveFromPage(id)"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con mb-3">
      <div id="box-1" class="box d-flex flex-column align-items-center justify-content-center p-5">
          <span style="font-weight:bold; font-size:1.5rem">Lorem ipsum dolor</span>
          <p class="text-center w-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, est rem odio labore in quod nihil ad, modi velit numquam qui! Sunt ea similique veniam quasi sit error recusandae dolore!</p>
      </div>
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
    width: 100%;
  position: relative;
  .btn{
    top: -20px;
    right: -20px;
    position: absolute;
    border: 2px solid black;
  }
}
.con {
  width: 100%;
  height: 250px;
  .box {
    height: 100%;
    width: 100%;
  }
}
</style>
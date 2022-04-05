<template>
  <div class="d-flex outtercon">
    <b-button
      class="btn remove btn-pill m-2 p-0 pt-2 px-2"
      style="height: fit-content"
    >
      <i class="fa fa-trash-o"></i>
    </b-button>
    <div class="d-flex con mb-3">
      <div
        id="box-1"
        class="box d-flex justify-content-center align-items-center"
      >
      <img  class="box-1-img" :src="image" alt="">
        <div class="file-input">
          <input type="file" id="file" class="file" />
          <label class="p-3" for="file">
            <i class="fa fa-plus"></i>
            <p class="file-name"></p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.outtercon {
  width: 100%;
  position: relative;
  .remove {
    top: -20px;
    right: -20px;
    position: absolute;
    border: 2px solid black;
  }
}
.con {
  width: 100%;
  height: 308px;
  .box {
    position: relative;
    height: 100%;
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
}
.file-input label {
  display: block;
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 25px;
  background:  #7873f5;
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
.box-1-img{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}


</style>
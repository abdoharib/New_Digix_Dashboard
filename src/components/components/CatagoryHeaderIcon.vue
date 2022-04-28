<template>
  <div v-bind:class="{ disabled: !isShown }" class=" my-1 category_props d-flex">
    <div class="d-flex prop">

      <div class="icon m-1">
        <slot name="icon"></slot>
      </div>

      <div class="text mx-2">
        {{ text }}
        <slot v-if="text == null" name="content"></slot>
      </div>

    </div>

  
  </div>
</template>

<script>
export default {
  props: {
    isShown: {
      required: true,
    },
    text: {
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  max-width: 30px;
}
.category_props {
    flex-direction: row-reverse;
        justify-content: center;
    align-items: center;
width: fit-content;
  max-height: 50px;
}
.disabled {
  opacity: 0.5;
}

.button-con{
    width: 25px;
    height: 25px;
    aspect-ratio: 1;
}
.text{
    height: fit-content;
}

.prop{
        flex-direction: row-reverse;

    justify-content: center;
    align-items: center;
}


</style>


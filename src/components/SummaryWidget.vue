<template>
   <px-card class="static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="media-body">
            
                  <h6 class="font-roboto"><slot name="name"></slot></h6>
                  <h4 class="mb-0 counter" style="font-weight: bold;"> <slot name="value"></slot></h4>
                </div>
                <span :class="'txt-'+color" style="font-size:42px; height:fit-content; line-height:1;"><i :class="'fa '+icon"></i></span>
                
                
              </div>
              <div class="progress-widget">
                <div class="progress sm-progress-bar progress-animate">
                  <div :class="'progress-gradient-'+color" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <span class="animate-circle"></span>
                  </div>
                </div>
              </div>
            </div>
    </px-card>
</template>

<script>
export default {
    props:[
        "color",
        "icon"
    ]
}
</script>

<style>

</style>
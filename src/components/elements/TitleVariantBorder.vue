<template>
  <div class="title-display-1" style="position:relative;">
      <slot>
          <div class="line"></div>
          <div class="z-top">

          <p>
              {{titleText}}
          </p>
          </div>
      </slot>
  </div>
</template>

<script>
export default {
    props: { 
        titleText: {
            type: String,
            default: 'Untitled'
        }
    },
}
</script>

<style lang="stylus">
.z-top
    position :relative
    z-index : 10;

.line
    position :absolute;
    bottom : .2rem;
    height : 10px;
    width : 300px;
    background : rgba(0,0,0,.1);
    border-radius : .5rem;
    z-index : 1;
    @media screen and (max-width: 570px)
        width : 200px;
</style>
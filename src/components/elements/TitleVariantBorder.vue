<template>
  <div>
      <slot>
          <p>
              {{titleText}}
          </p>
          <hr>
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

<style>
    
</style>
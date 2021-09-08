<template>
  <div>
      <input type="text" :name="nameInput" id="" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    props:{
        nameInput: String,
        placeholder: String
    }
}
</script>

<style>

</style>
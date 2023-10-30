<template>
  <div>
    <h3> {{  task.title }}</h3>
    <div class="icons"></div>
    <i class="material-icons">delete</i>
    <i class="material-icons">favorite</i>
  </div>
</template>

<script>
export default {    
    props:['task']

}
</script>

<style>

</style>
<template>
  <section class='content'>
    <h1 class="text-center">{{message}}</h1>
    <h4 class="text-center">Show {{message}} of our house</h4>

    <div class="row">
      <div class="col-md-12">
        This is where the content of {{message}} showing
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Light',
  data: function () {
    return {
      message: 'Lights'
    }
  },
  mounted: function () {
  }
}
</script>

<style>
</style>

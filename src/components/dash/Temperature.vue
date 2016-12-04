<template>
  <section class='content'>
    <h1 class="text-center">Temperature</h1>
    <h4 class="text-center">Temperature & Hubmidity of our home</h4>

    <div class="row">
      <div class="col-md-12">
        This is where the content of Temperature & Humidity showing
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Temperature',
  data: function () {
    return {
      stats: [{
        header: '8390',
        text: 'Visitors'
      }, {
        header: '30%',
        text: 'Referrals'
      }, {
        header: '70%',
        text: 'Organic'
      }]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Add map
      window.jQuery.getScript('/static/js/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js', function (data, textStatus, jqxhr) {
        window.jQuery.getScript('/static/js/plugins/jvectormap/jquery-jvectormap-world-mill.js', function (data, textStatus, jqxhr) {
          window.jQuery('#world-map-markers').vectorMap({
            map: 'world_mill'
          })
        })
      })
    })
  }
}
</script>

<style>
.fake { color: 'red'}
#world-map-markers svg {
  height: 355px;
}
.row.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.row.no-gutters > [class^="col-"],
.row.no-gutters > [class*=" col-"] {
  padding-right: 0;
  padding-left: 0;
}
</style>

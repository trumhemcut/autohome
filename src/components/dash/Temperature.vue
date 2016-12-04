<template>
  <section class='content'>
    <h1 class="text-center">Temperature</h1>
    <h4 class="text-center">Temperature & Hubmidity of our home</h4>
    <div class="row">
      <div class="col-md-12">
        <div id="chart"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Rickshaw from 'rickshaw'
import PubNub from 'pubnub'

export default {
  name: 'Temperature',
  data: function () {
    return {
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      var tv = 2000

      // instantiate our graph!
      var graph = new Rickshaw.Graph({
        element: document.getElementById('chart'),
        width: 900,
        height: 400,
        renderer: 'line',
        series: new Rickshaw.Series.FixedDuration([{ name: 'one' }], undefined, {
          timeInterval: tv,
          maxDataPoints: 100,
          timeBase: new Date().getTime() / 1000
        })
      })

      graph.render()

      let pubnub = new PubNub({
        subscribeKey: 'sub-c-434796fa-b9e7-11e6-8036-0619f8945a4f',
        publishKey: 'pub-c-038f9e11-fc17-4bf1-b2be-3946c20238fa',
        ssl: true
      })

      pubnub.addListener({
        message: function (data) {
          let graphData = {
            one: Math.floor(data.message.humidity),
            two: Math.floor(data.message.temperature)
          }

          graph.series.addData(graphData)
          graph.render()

          console.log(graphData)
        },
        presence: function (presenceEvent) {
          // handle presence
        }
      })
      console.log('Subscribing...')
      pubnub.subscribe({
        channels: ['DHT']
      })
    })
  }
}
</script>
<style>
</style>

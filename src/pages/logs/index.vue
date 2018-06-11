<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Modo from 'modo-ui'
  import card from '@/components/card'
  const Utils = Modo.Utils

  export default {
    components: {
      card
    },

    data () {
      return {
        logs: []
      }
    },

    created () {
      const logs = (wx.getStorageSync('logs') || [])
      this.logs = logs.map(log => Utils.formatTime(new Date(log)))
    }
  }
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>

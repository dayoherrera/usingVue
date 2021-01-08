<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    }
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },

  methods: {
    getData() {
      api.getCryptos().then((data) => {
        this.cryptos = data
      })
    },

    mounted() {
      setInterval(() => {
        this.getData()
      }, 1000)
    },
  },
}
</script>
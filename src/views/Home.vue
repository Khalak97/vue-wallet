<template>
  <div>
    <div class="page-title">
      <h3>Bill</h3>
      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">

      <HomeBill />
      <HomeCurrency />

    </div>
  </div>
</template>

<script>
import HomeBill from '../components/HomeBill'
import HomeCurrency from '../components/HomeCurrency'

export default {
  name: 'Home',
  data: () => ({
    loading: true,
    currency: null
  }),
  mounted() {
    this.loading = false
  },
  components: {
    HomeBill,
    HomeCurrency
  }
}
</script>
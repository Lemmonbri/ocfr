var viewExpired = new Vue({
  el: '#viewExpired',
  data: {
    expired: []
  },
  methods: {
    fetchExpired() {
      fetch('api/expired/index.php')
      .then(response => response.json())
      .then(json => { viewExpired.expired = json })
    },
  },
  created() {
    this.fetchExpired();
  }
});

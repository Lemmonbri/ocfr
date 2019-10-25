var viewCert = new Vue({
  el: '#viewCert',
  data: {
    selected: '',
    certifications: []
  },
  methods: {
    fetchCerts() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { viewCert.certifications = json })
    },
    handleRowClick(c) {
      certAdd.certification = c;
    }
  },
  created() {
    this.fetchCerts();
  }
});

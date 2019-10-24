var viewCert = new Vue({
  el: '#viewCert',
  data: {
    certifications: []
  },
  methods: {
    fetchCerts() {
      fetch('api/certifications/')
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

var temp;
var viewCert = new Vue({
  el: '#viewCert',
  data: {
    selected: '',
    certifications: [],
    certification: {},
    people: []
  },
  methods: {
    fetchCerts() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { viewCert.certifications = json })
    },

    fetchPeopleCertSpec() {
      fetch('api/certMemb/indexSpec.php?id='+ this.certification.cID)
      .then(response => response.json())
      .then(json => { viewCert.people = json })
    },

    handleRowClick(c) {
      certAdd.certification = c;
      viewCert.certification = c;
    },

    redirectPage(c) {
        window.location = 'membWCert.html?id='+c;
    }

  },


  created() {
    this.fetchCerts();
    let params = new URLSearchParams(location.search);
    this.certification.cID = params.get('id');
    this.fetchPeopleCertSpec();
  }
});

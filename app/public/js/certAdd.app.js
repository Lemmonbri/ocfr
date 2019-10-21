var membAdd = new Vue({
  el: '#certAdd',
  data: {
    // people: [],
    recordCert: {}
  },
  methods: {
    // fetchPeople() {
    //   fetch('api/records/index.php')
    //   .then(response => response.json())
    //   .then(json => { membAdd.people = json })
    // },
    handleSubmit(event) {
      fetch('api/certifications/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => window.location = './certList.html' )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
        //"JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"
     });

      this.handleReset();
    },
    handleReset() {
      this.recordCert = {
        cName: '',
        cAgency: '',
        expPeriod: ''
      }
    },
    //handleRowClick(patient) {
    //  patientTriageApp.patient = patient;
    //}

  }, // end methods
  created() {
    this.handleReset();
    //this.fetchPeople();
  }
});

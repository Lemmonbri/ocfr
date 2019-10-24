var certAdd = new Vue({
  el: '#certAdd',
  data: {
    // people: [],
    certification: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/certMemb/post.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
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
    handleUpdate(event) {
      fetch('api/certifications/update.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    },

    handleDelete(){
      fetch('api/certifications/delete.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    },
    handleReset() {
      this.certification = {
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

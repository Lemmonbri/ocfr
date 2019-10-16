var membAdd = new Vue({
  el: '#membAdd',
  data: {
    person: {}
  },
  methods: {
    handleSubmit() {
       fetch('api/people/post.php', {
         method:'POST',
         body: JSON.stringify(this.person),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {viewMembs.people = json})
       .catch( err => {
         console.error('PEOPLE POST ERROR:');
         console.error(err);
      });

       // waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.person = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        wPhone: '',
        mPhone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        startDate: '',
        obTitle: '',
        radioNumber: '',
        stationNumber: '',
        isActive: ''
      }
    }
  },
  created() {
    //this.handleReset();
  }
});

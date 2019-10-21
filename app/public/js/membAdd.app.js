var membAdd = new Vue({
  el: '#membAdd',
  data: {
    // people: [],
    recordPerson: {}
  },
  methods: {
    // fetchPeople() {
    //   fetch('api/records/index.php')
    //   .then(response => response.json())
    //   .then(json => { membAdd.people = json })
    // },
    handleSubmit(event) {
      fetch('api/people/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => window.location = './membList.html' )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
        //"JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"
     });

      this.handleReset();
    },
    handleReset() {
      this.recordPerson = {
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
        jobTitle: '',
        radioNumber: '',
        stationNumber: '',
        isActive: ''
      }
    }

  }, // end methods
  created() {
    this.handleReset();
    //this.fetchPeople();
  }
});

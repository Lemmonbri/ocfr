var membAdd = new Vue({
  el: '#membAdd',
  data: {
    person: {}
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
        body: JSON.stringify(this.person),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => window.location = './membList.html' )
      .catch( err => {
        console.error(' POST ERROR:');
        console.error(err);
     });

      this.handleReset();
    },
    handleReset() {
      this.person = {
        pID: '',
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
    },
    handleUpdate(event) {
      fetch('api/people/update.php', {
        method:'POST',
        body: JSON.stringify(this.person),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    },

    handleDelete(){
      fetch('api/people/delete.php', {
        method:'POST',
        body: JSON.stringify(this.person),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    }
  }, // end methods
  created() {
    this.handleReset();
    //this.fetchPeople();
  }
});

var certMemb = new Vue({
  el: '#certMemb',
  data: {
    people: [],
    certifications: [],
    peopleCert: [],
    selection:{
      pID: '',
      cID: '',
      received: ''
    }
  },
  methods: {
    fetchCerts() {
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => { certMemb.certifications = json })
    },

    fetchMembs() {
      fetch('api/people/index.php')
      .then(response => response.json())
      .then(json => { certMemb.people = json })
    },

    fetchPeopleCert() {
      fetch('api/certMemb/index.php')
      .then(response => response.json())
      .then(json => { certMemb.peopleCert = json })
    },

    handleSubmit(event) {
      fetch('api/certMemb/post.php', {
        method:'POST',
        body: JSON.stringify(this.selection),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => window.location = './certMemb.html' )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
        //"JSON.parse: unexpected end of data at line 1 column 1 of the JSON data"
     });

      this.handleReset();
    },

    handleUpdate(event) {
      fetch('api/certMemb/update.php', {
        method:'POST',
        body: JSON.stringify(this.selection),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    },

    handleDelete(){
      fetch('api/certMemb/delete.php', {
        method:'POST',
        body: JSON.stringify(this.selection),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      this.handleReset();
    },

    handleReset() {
      this.selection = {
        pID: '',
        cID: '',
        received: ''
      }
    },

    handleRowClick(pc) {
      certMemb.selection = pc;
    }

  }, // end methods
  created() {
    this.handleReset();
    this.fetchMembs();
    this.fetchCerts();
    this.fetchPeopleCert();
  }
});

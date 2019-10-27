var viewMembs = new Vue({
  el: '#viewMembs',
  data: {
    selected: '',
    people: [],
    person: {},
    certOfMemb: []
  },
  methods: {
    fetchMembs() {
      fetch('api/people/')
      .then(response => response.json())
      .then(json => { viewMembs.people = json })
    },

    handleRowClick(p) {
      membAdd.person = p;
      viewMembs.person = p;
    },

    fetchCertOfMemb() {
      fetch('api/certMemb/indexSpecMemb.php?id='+ this.person.pID)
      .then(response => response.json())
      .then(json => { viewMembs.certOfMemb = json })
    },

    redirectPageMemb(p) {
        window.location = 'certOfMemb.html?id='+p;
    }

  },
  created() {
    this.fetchMembs();
    let params = new URLSearchParams(location.search);
    this.person.pID = params.get('id');
    this.fetchCertOfMemb();
  }
});

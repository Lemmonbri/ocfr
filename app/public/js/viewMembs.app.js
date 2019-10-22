var viewMembs = new Vue({
  el: '#viewMembs',
  data: {
    people: []
  },
  methods: {
    fetchMembs() {
      fetch('api/people')
      .then(response => response.json())
      .then(json => { viewMembs.people = json })
    },
    viewMember(p) {
      //viewMembs.person = person;
      window.location = 'membView.html?id='+p.pID;
    }
  },

  created() {
    this.fetchMembs();
  }
});

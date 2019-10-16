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
    }
  },
  created() {
    this.fetchMembs();
  }
});
